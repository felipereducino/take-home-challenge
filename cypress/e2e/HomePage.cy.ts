describe('HomePage E2E Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/v1/public/characters*', {
      fixture: 'characters.json',
    }).as('getCharacters')
    cy.visit('/')
    cy.wait('@getCharacters')
  })

  it('should display the Hero Section', () => {
    cy.contains('MARVEL').should('be.visible')
    cy.contains('Discover the Universe of Marvel').should('be.visible')
  })

  it('should not display the About Marvel section if the user hasnt scroll down', () => {
    cy.contains('About Marvel').should('not.be.visible')
  })

  it('should display the About Marvel section when the user scrolls down', () => {
    // Scroll to the "About Marvel" section
    cy.contains('About Marvel').scrollIntoView()

    // Wait for the animation to complete
    cy.wait(1000) // Adjust the duration if your animation takes longer

    // Now, the opacity should be 1
    cy.contains('About Marvel').should(($el) => {
      const opacity = $el.css('opacity')
      expect(opacity).to.eq('1')
    })
  })
})
