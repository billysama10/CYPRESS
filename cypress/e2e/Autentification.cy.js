/// <reference types="cypress" />

describe("Tests de connexion à eHR", () => {
  beforeEach(() => {
    cy.visit("http://10.0.102.61:8093/#!/login");
  });

  it("connexion RH valide", () => {
    cy.get("#matricule").type("1939", { force: true });
    cy.get("#password").type("Azerty@123", { force: true });
    cy.get(".modern-login-btn").contains("Connexion").click();
    cy.contains("Gestion des absences").first().click();
    // cy.get(".nav-link.ng-binding", { force: true })
    //   .contains('a["Paramètres"]')
    //   .first()
    //   .click();
    cy.contains('a',/Paramètres/i).click({force: true});

  });

  // it("connexion RH avec matricule invalide", () => {
  //   cy.get("#matricule").type("1938", { force: true });
  //   cy.get("#password").type("Azerty@123", { force: true });
  //   cy.get(".modern-login-btn").contains("Connexion").click();
  //   cy.get(".btn-default").contains("OK").click();
  // });

  // it("connexion RH avec password invalide", () => {
  //   cy.get("#matricule").type("1939", { force: true });
  //   cy.get("#password").type("Azerty@12", { force: true });
  //   cy.get(".modern-login-btn").contains("Connexion").click();
  //   cy.get(".btn-default").contains("OK").click();
  // });

  // it("connexion employé avec des données valides", () => {
  //   cy.get("#matricule").type("Employer1", { force: true });
  //   cy.get("#password").type("Qwerty123", { force: true });
  //   cy.get(".modern-login-btn").contains("Connexion").click();
  //   cy.get('[role="button"]').first().click();
  //   cy.contains("Déconnexion").click();
  // });

});

it('login', function() {
  cy.visit('http://10.0.102.61:8093/#!/login')
  
});
