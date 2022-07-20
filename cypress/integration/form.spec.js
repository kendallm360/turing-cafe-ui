describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should show the title", () => {
    cy.get("div .App").contains("h1", "Turing Cafe Reservations");
  });

  it("Should show the form elements", () => {
    cy.get("div .allResys").get("input[type=text]").should("have.length", 3);
    cy.get("div .allResys").get("select").should("exist");
    cy.get("div .allResys").get("button").should("exist");
  });

  it("Should show existing reservations", () => {
    cy.get("div .resys").should("have.length", 9);
  });

  it("Should show reservation details", () => {
    cy.get("div .resys").contains("p");
    cy.get("div .resys").contains("button", "Cancel");
    cy.get("div .resys").contains("h1", "Christie");
  });

  it.only("Should have a form that takes in and populates information", () => {
    cy.get("div .allResys").get("input[type=text]").eq(0).type("Kendall");
    cy.get("div .allResys").get("input[type=text]").eq(1).type("09/28");
    cy.get("select").select("7:00");
    cy.get("div .allResys").get("input[type=text]").eq(2).type("2");
  });
});
