/* eslint-env mocha */
describe('Create a pet using the API with missing data', () => {

    it('Create a new pet in the store with missing fields', () => {
      cy.request({
        method: 'POST',
        url: 'pet',
        failOnStatusCode: true,
        body: {
            "category": {
              "id": 0,
              "name": "test"
            },
            "name": "Cypet",
            "tags": [
              {
                "id": 0,
                "name": "cytest"
              }
            ],
        }
      })
    })
  })