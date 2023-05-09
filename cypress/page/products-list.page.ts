class ProductListPage {
  private productList: string;
  private btnAddTShirtItem: string;

  constructor() {
    this.productList = '#inventory_container';
    this.btnAddTShirtItem = '#add-to-cart-sauce-labs-bolt-t-shirt'
    }

  public addToCartItem(nameItem: string): void {
    this.findProductByName(nameItem).find(this.btnAddTShirtItem).click();
    }

  private findProductByName (inventoryItem: string) {
    return cy.get(this.productList).filter(`:contains(${inventoryItem})`);
  }
}

export { ProductListPage };
