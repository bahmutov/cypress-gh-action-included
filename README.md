# cypress-gh-action-included
> Example showing if we can run [cypress/included Docker image][1] inside GH Actions CI

Run Cypress tests locally with

```shell
docker run -it -v $PWD:/test -w /test cypress/included:3.8.3
```

[1]: https://github.com/cypress-io/cypress-docker-images/tree/master/included
