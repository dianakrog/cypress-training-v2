class ItemPage {
  private addToCardTShirtItem: string;

  constructor() {
    this.addToCardTShirtItem = '#add-to-cart-sauce-labs-bolt-t-shirt';
    }

  public addTShirtItem(): void {
    cy.get(this.addToCardTShirtItem).click();
    }
}

export { ItemPage };
