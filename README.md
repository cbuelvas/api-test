# API Test
## API-test with Postman & Newman

### Require Node.js & npm installed

Clone the repo and install dependencies

```sh
$ cd api-test && npm install
```

Once installed, you can run the test in two ways, all in one, or per collection [pet, store, user]

To run all the test at once sun:
```sh
$ npm run petstore
```
Tests:
- pet_ideal : ideal behavior of the API
- pet:mv : use missing values at creation time
- pet:wv : use wrong values to update
- pet:ls : list the pets according its status, and a non existent status
- storetest : run test on the store API
- usertest : run test on user API

To run each set of tests run: 
```sh
$ npm run pet:ideal
$ npm run pet:mv
$ npm run pet:wv
$ npm run pet:ls
$ npm run storetest
$ npm run usertest
```

## API-test with cypress

To run the test using cypress run:
```sh
$ npm run cyrun
```

####work in progress
