# cypress-gh-action-included ![status](https://github.com/bahmutov/cypress-gh-action-included/workflows/included/badge.svg?branch=master)
> Example showing how to run [cypress/included Docker image][1] inside GH Actions CI

This repository contains the static page [index.html](index.html) tested by Cypress Test Runner in [cypress/integration/spec.js](cypress/integration/spec.js). There is nothing to install or start, how can we run these tests in the simplest way?

Fact: you can run Cypress tests locally without installing dependencies

```shell
docker run -it -v $PWD:/test -w /test cypress/included:3.8.3
```

Then: run the same on GH Actions CI. See [.github/workflows/included.yml](.github/workflows/included.yml), but in general

```yml
name: included
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    # Docker image with Cypress pre-installed
    # https://github.com/cypress-io/cypress-docker-images/tree/master/included
    container: cypress/included:3.8.3
    steps:
      - uses: actions/checkout@v1
      - run: cypress run
```

[1]: https://github.com/cypress-io/cypress-docker-images/tree/master/included
