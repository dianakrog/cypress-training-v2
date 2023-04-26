class InformationPage {
  private fildFirstName: string;
  private fildLastName: string;
  private filsPostalCode: string;
  private btnContinue: string;

  constructor() {
    this.fildFirstName='#first-name';
    this.fildLastName='#last-name';
    this.filsPostalCode='#postal-code';
    this.btnContinue = '#continue';
    }

  public writeFirstName(firstName: string): void {
    cy.get(this.fildFirstName).type(firstName);
    }

  public writeLastName(lastName: string): void {
    cy.get(this.fildLastName).type(lastName);
    }

  public writepostalCode(postalCode: string): void {
    cy.get(this.filsPostalCode).type(postalCode);
    }

  public checkoutUserInformation(): void {
    cy.get(this.btnContinue).click();
    }
}

export { InformationPage };
