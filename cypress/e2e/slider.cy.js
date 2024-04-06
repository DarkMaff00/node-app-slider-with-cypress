describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if titles and descriptions are fine', function () {
    cy.visit('http://localhost:3000');
    cy.get('.card-description h1').should('be.visible').and('contain', 'Rome');
    cy.get('.card-description p').should('be.visible').and('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.card-description h1').should('be.visible').and('contain', 'London');
    cy.get('.card-description p').should('be.visible').and('contain', 'United Kingdom');
    cy.wait(2000);
    cy.get('.swiper-button-next').click();
    cy.get('.card-description h1').should('be.visible').and('contain', 'Paris');
    cy.get('.card-description p').should('be.visible').and('contain', 'France');
  });
});