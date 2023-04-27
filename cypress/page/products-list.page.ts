class ProductListPage {
  private productList: string;
  private tShirtItem: string;
  private btnAddTShirtItem: string;

  constructor() {
    this.productList = '#inventory_container';
    this.tShirtItem = '#item_1_img_link';
    this.btnAddTShirtItem = '#add-to-cart-sauce-labs-bolt-t-shirt'
    }

  public addToCartItem(nameItem: string): void {
    this.findProductByName(nameItem).find(this.btnAddTShirtItem).click();
    }

  private findProductByName (inventoryItem: string) {
    return cy.get(this.productList).find('>div').filter(`:contains(${inventoryItem})`);
  }
}

export { ProductListPage };
