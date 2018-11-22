/* eslint-env mocha */
describe('Update pet data with diferent values', () => {

    it('Update a pet missing the ID', () => {
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
            .then((response) => {
                cy.writeFile('cypress/fixtures/newPet.json', response.body)
            })

    })

    it('Update pet object with form data', () => {
        cy.fixture('newPet.json').as('pet')
        cy.request({
            method: 'POST',
            url: 'pet/',
            form: true,
            body: {
                petId: 6666,
                name: 'CyformName',
                status: 'sold'
            }
        })
    })

    it('Delete the pet object', () => {
        cy.request('DELETE', 'pet/6666', 'failOnStatusCode')
    })

})