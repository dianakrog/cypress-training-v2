class ProductListPage {
  private tShirtItem: string;
  private btnAddTShirtItem: string;

  constructor() {
    this.tShirtItem = '#item_1_img_link';
    this.btnAddTShirtItem = '#add-to-cart-sauce-labs-bolt-t-shirt'
    }

  public selectTShirt(): void {
    cy.get(this.tShirtItem).click();
    }

  public addToCardTShirt(): void {
    cy.get(this.btnAddTShirtItem).click();
  }
}

export { ProductListPage };
