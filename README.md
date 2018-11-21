# api-test
## API-test with Posntman & Newman

### Require Node.js & npm installed

Clone the repo and install dependencies

```sh
$ cd api-test && npm install
```

Once installed, you can run the test in two ways, all in one, or per collection [pet, store, user]

To run all the test at once sun:
```sh
$ npm run alltest
```

To run each set of tests run: {set}test
```sh
$ npm run pettest
$ npm run storetest
$ npm run usertest
```

## API-test with cypress

To run the test using cypress run:
```sh
$ npm run cyrun
```

