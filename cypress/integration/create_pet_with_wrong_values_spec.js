/* eslint-env mocha */
describe('Create a pet using the API with missing data', () => {

  it('Create a new pet in the store with missing fields', () => {
    /** it creates teh pet no mather what, it returns an pet 
     * object with id (random generated?) field that is missing */
    cy.request({
        method: 'POST',
        url: 'pet',
        body: {
          "category": {
            "id": 0,
            "name": "test"
          },
          "name": "Cypet",
          "tags": [{
            "id": 0,
            "name": "cytest"
          }],
        }
      })
      .its('status').should('eq', 200)
  })
})