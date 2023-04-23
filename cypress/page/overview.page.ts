class OverViewPage {
  private btnFinish: string;

  constructor() {
    this.btnFinish = '#finish';
    }

  public finishOverview(): void {
    cy.get(this.btnFinish).click();
    }
}

export { OverViewPage };
