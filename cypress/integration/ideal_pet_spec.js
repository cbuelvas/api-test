/* eslint-env mocha */
describe('Ideal usage of the pet API calls', () => {

  it('Creates a new pet in the store', () => {
    cy.request({
      method: 'POST',
      url: 'pet',
      failOnStatusCode: true,
      body: {
          "id": 6666,
          "category": {
            "id": 0,
            "name": "test"
          },
          "name": "Cypet",
          "photoUrls": [
            ""
          ],
          "tags": [
            {
              "id": 0,
              "name": "cytest"
            }
          ],
          "status": "available"
      }
    })
  })

  it('Updates a pet in the store', () => {
    cy.request({
      method: 'PUT',
      url: 'pet',
      failOnStatusCode: true,
      body: {
          "id": 6666,
          "category": {
            "id": 0,
            "name": "test"
          },
          "name": "NewCyName",
          "photoUrls": [
            ""
          ],
          "tags": [
            {
              "id": 0,
              "name": "cytest"
            }
          ],
          "status": "available"
      }
    })
  })

  it('List pets by status', () => {
    // Available values : available, pending, sold
    cy.request({
      method: 'GET',
      url: '/pet/findByStatus?status=available',
      failOnStatusCode: true
    })
    cy.request({
      method: 'GET',
      url: '/pet/findByStatus?status=pending',
      failOnStatusCode: true
    })
    cy.request({
      method: 'GET',
      url: '/pet/findByStatus?status=sold',
      failOnStatusCode: true
    })
  })

  it('Update pet object with form data', () =>{
    cy.request({
      method: 'POST',
      url: '/pet/6666', 
      form: true, 
      body: {
        petId: 6666,
        name: 'CyformName',
        status: 'sold'
      }
    })
  })

  it('Pet fetched and returns a JSON object', () => {
    cy.request('pet/6666', 'failOnStatusCode')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('Delete the pet object', () => {
    cy.request('DELETE','pet/6666','failOnStatusCode')
  })

})
