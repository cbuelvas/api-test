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
            "id": 8,
            "name": "cytest"
          },
          "name": "Cypet",
          "photoUrls": [
            "none"
          ],
          "tags": [{
            "id": 5,
            "name": "cytest"
          }],
          "status": "available"
        }
      })
      .then((response) => {
        cy.writeFile('cypress/fixtures/newPet.json', response.body)
      })
    cy.readFile('cypress/fixtures/newPet.json')
      .its('id').should('eq', 6666)
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
        "tags": [{
          "id": 0,
          "name": "cytest"
        }],
        "status": "available"
      }
    })
  })

  it('List pets by status', () => {
    // Available values : available, pending, sold
    cy.request({
      method: 'GET',
      url: '/pet/findByStatus',
      failOnStatusCode: true,
      qs: {
        status: 'available'
      },
    })
    cy.request({
      method: 'GET',
      url: '/pet/findByStatus',
      failOnStatusCode: true,
      qs: {
        status: 'pending'
      },
    })
    cy.request({
      method: 'GET',
      url: '/pet/findByStatus',
      failOnStatusCode: true,
      qs: {
        status: 'sold'
      },
    })
  })

  it('Update pet object with form data', () => {
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
    cy.request('DELETE', 'pet/6666', 'failOnStatusCode')
  })

})
