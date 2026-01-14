describe("tests sur Saar back office ",()=>{
beforeEach(()=>{
    cy.visit("http://10.0.102.67:4201/fr/auth/login");
});
it("connexion back office donnees valides",()=>{
  cy.get("#username").type("admin");
  cy.get("#password").type("0123456789012");
  cy.get("#login-submit-button").click();
  cy.get("#sidebar-link-users").click();
  cy.get("#users-add-button").click();
  // On cible l'input qui a exactement ce nom de contrôle
  cy.get('input[placeholder="Nom d\'utilisateur"]').type("sama");
  cy.get("input[placeholder='Entrer le mot de passe']").type("123456789123");
  cy.get("input[placeholder='Nom de famille']").type("sama");
  cy.get("input[placeholder='Prénom']").type("billy");
  cy.get("input[placeholder='exemple@email.com']").type("ngouanetbilly@gmail.com");
  cy.get("input[placeholder='+237 XXX XXX XXX']").type("678023474");

});
});