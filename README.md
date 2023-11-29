# tsh-test-automation

Implemented using Typescript with WebdriverIo. NodeJs 18.15.0 or newer is required to run tests.

# How to run all tests:

`npm run wdio`

# How to run specific feature:

For login tests, for example:

`npm run wdio -- --spec features/newsletter.feature`

## How to run sanity tests:

`npm run wdio -- --cucumberOpts.tagExpression='@sanity'`

Test results are visible in the console and report is generated in xml format to "/out/report/" directory Tests can be run via Github Actions -> API Regression on Staging.

By default headless mode is turned on, to switch off you have to remove this array element:
<img width="857" alt="gtihub" src="https://github.com/mitus1212/tsh-test-automation/assets/36314619/be804c00-f89e-4035-b249-d16c52231ac8">
