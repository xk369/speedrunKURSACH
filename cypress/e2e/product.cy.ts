describe('Product Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display product grid', () => {
    cy.get('[data-testid="product-grid"]').should('be.visible')
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1)
  })

  it('should add product to favorites', () => {
    cy.get('[data-testid="product-card"]').first().within(() => {
      cy.get('[data-testid="favorite-button"]').click()
    })
    
    cy.get('[data-testid="favorites-count"]').should('contain', '1')
  })

  it('should add product to comparison', () => {
    cy.get('[data-testid="product-card"]').first().within(() => {
      cy.get('[data-testid="compare-button"]').click()
    })
    
    cy.get('[data-testid="comparison-panel"]').should('be.visible')
  })

  it('should filter products by category', () => {
    cy.get('[data-testid="category-select"]').click()
    cy.get('[data-testid="category-option"]').first().click()
    
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1)
  })

  it('should search products', () => {
    cy.get('[data-testid="search-input"]').type('test product')
    cy.get('[data-testid="search-button"]').click()
    
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1)
  })
}) 