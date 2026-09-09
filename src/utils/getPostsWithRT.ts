import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

export const getReadingTime = async () => {
    const globPosts = import.meta.glob("../content/blog/*.md") as Record<
        string,
        () => Promise<{ frontmatter: CollectionEntry<"blog">["data"] }>
    >;
    const mapFrontmatter = new Map<string, string | undefined>();

    await Promise.all(
        Object.values(globPosts).map(async loadPost => {
            const { frontmatter } = await loadPost();
            mapFrontmatter.set(
                slugifyStr(frontmatter.title),
                frontmatter.readingTime
            );
        })
    );

    return mapFrontmatter;
};

const getPostsWithRT = async (posts: CollectionEntry<"blog">[]) => {
    const mapFrontmatter = await getReadingTime();

    return posts.map(post => ({
        ...post,
        data: {
            ...post.data,
            readingTime: mapFrontmatter.get(slugifyStr(post.data.title)),
        },
    }));
};

export default getPostsWithRT;