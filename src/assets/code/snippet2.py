import statsmodels.api as sm
X = df['patronage']
y = df['service_hours']
X = sm.add_constant(X)
model = sm.OLS(y, X, missing='drop').fit()
print(model.summary())