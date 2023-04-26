class InformationPage {
  private firstNameInput: string;
  private lastNameInput: string;
  private postalCodeInput: string;
  private btnContinue: string;

  constructor() {
    this.firstNameInput ='#first-name';
    this.lastNameInput='#last-name';
    this.postalCodeInput='#postal-code';
    this.btnContinue = '#continue';
    }

    public checkoutUserInformation(firstName: string, lastName: string, postalCode: string): void {
      cy.get(this.firstNameInput).type(firstName);
      cy.get(this.lastNameInput).type(lastName);
      cy.get(this.postalCodeInput).type(postalCode);
      cy.get(this.btnContinue).click();
      }
}

export { InformationPage };
