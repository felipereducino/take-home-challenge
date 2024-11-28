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
    cy.contains('About Marvel').scrollIntoView()

    cy.wait(1000)

    cy.contains('About Marvel').should(($el) => {
      const opacity = $el.css('opacity')
      expect(opacity).to.eq('1')
    })

    cy.contains('Marvel Curiosities').should(($el) => {
      const opacity = $el.css('opacity')
      expect(opacity).to.eq('1')
    })
  })

  it('should display the Marvel Curiosities section when the user scrolls down', () => {
    cy.contains('Marvel Curiosities').scrollIntoView()

    cy.wait(1000)

    cy.contains('Marvel Curiosities').should(($el) => {
      const opacity = $el.css('opacity')
      expect(opacity).to.eq('1')
    })
  })

  it('should display the Featured Characters section when the user scrolls down', () => {
    cy.contains('Featured Characters').scrollIntoView()

    cy.wait(1000)

    cy.contains('Featured Characters').should(($el) => {
      const opacity = $el.css('opacity')
      expect(opacity).to.eq('1')
    })
  })

  it('should display the "See All" button when the user scrolls down', () => {
    cy.get('[data-testid="see-all-button"]')
      .contains('See All')
      .scrollIntoView()
  })
})
