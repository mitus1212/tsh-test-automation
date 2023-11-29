# automated-wdio-tests-ui

# How to run all tests:

`npm run wdio -- --spec ./features/*.feature`

# How to run specific feature:

For login tests, for example:

`npm run wdio -- --spec features/newsletter.feature`

## How to run sanity tests:

`npm run wdio -- --cucumberOpts.tagExpression='@sanity'`
