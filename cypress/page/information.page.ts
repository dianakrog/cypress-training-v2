class InformationPage {
  private writeFirstName: string;
  private writeLastName: string;
  private writepostalCode: string;
  private btnContinue: string;

  constructor() {
    this.writeFirstName='#first-name';
    this.writeLastName='#last-name';
    this.writepostalCode='#postal-code';
    this.btnContinue = '#continue';
    }

  public checkoutUserInformation(firstName: string, lastName: string, postalCode: string): void {
    cy.get(this.writeFirstName).type(firstName);
    cy.get(this.writeLastName).type(lastName);
    cy.get(this.writepostalCode).type(postalCode);
    cy.get(this.btnContinue).click();
    }
}

export { InformationPage };
