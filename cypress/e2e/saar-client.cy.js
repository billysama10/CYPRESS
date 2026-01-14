/// <reference types="cypress" />

describe("test de connexion a saar cote client", () => {
  beforeEach(() => {
    cy.visit("http://10.0.102.67:4201/fr/assure/dashboard");
  });
  // it("connexion assurée données valides", () => {
  //   cy.get("#username").type("CMN276599", { force: true });
  //   cy.get("#password").type("002147483647", { force: true });
  //   cy.get("#remember-me").click();
  //   cy.get(":nth-child(3) > .w-full").click();
  // });
  // it("connexion assuree donnees id invalide", () => {
  //   cy.get("#username").type("CMN27659", { force: true });
  //   cy.get("#password").type("002147483647", { force: true });
  //   cy.get("#remember-me").click();
  //   cy.get(":nth-child(3) > .w-full").click();
  //   cy.wait(2000);
  //   cy.get(".mt-6 > .w-full").click();
  // });
  // it("connexion avec un mdp invalide", () => {
  //   cy.get("#username").type("CMN276599", { force: true });
  //   cy.get("#password").type("002147483644", { force: true });
  //   cy.get("#remember-me").click();
  //   cy.get(":nth-child(3) > .w-full").click();
  //   cy.wait(2000);
  //   cy.get(".mt-6 > .w-full").click();
  // });
  // it("declaration d'un sinistre",()=>{
  //   cy.get("#username").type("CMN276599", { force: true });
  //   cy.get("#password").type("002147483647", { force: true });
  //   cy.get("#remember-me").click();
  //   cy.get(":nth-child(3) > .w-full").click();
  //   cy.contains("a", "Réclammation").click();
  //   cy.get("#name").type("NGOUANET KUEGOU BILLY ROBSON ");
  //   cy.get("#email").type("ngouanetbilly@gmail.com");
  //   cy.get("#contact").type("691599199");
  //   cy.get("#subject").type("Probleme avec ma police d'assurance ");
  //   cy.get("#message").type("RASsssssssssssssssssssssssssssssssssssssssssssssss");
  //   cy.get(".pt-4 > .w-full").click();
  //   cy.wait(4000)
  //   cy.get(".bg-gray-50 > .w-full").click();
  // });
  it("declaration d'un sinistre",()=>{
    cy.get("#username").type("CMN276599", { force: true });
    cy.get("#password").type("002147483647", { force: true });
    cy.get("#remember-me").click();
    cy.get(":nth-child(3) > .w-full").click();
    cy.contains("button", "Sinistre").click();
    cy.contains("a", "Sinistres par statut").click();
    cy.get("#sinistres-en-attente-search-input").type("SIN-20251010-0056");
  });
});
