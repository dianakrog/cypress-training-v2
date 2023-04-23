class ProductListPage {
  private tShirtItem: string;

  constructor() {
    this.tShirtItem = '#item_1_img_link';
    }

  public selectTShirt(): void {
    cy.get(this.tShirtItem).click();
    }

}

export { ProductListPage };
