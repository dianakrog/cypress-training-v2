class LoginPage {
  private loginURL: string;
  private userNameField: string;
  private passwordField: string;
  private loginButton: string;
  
  constructor() {
    this.loginURL = "http://saucedemo.com/";
    this.userNameField = "#user-name";
    this.passwordField = "#password";
    this.loginButton = "#login-button";
  }
  
  public visitLoginPage(): void {
    cy.visit(this.loginURL);
  }
  
  public setUserName(userName: string): void {
    cy.get(this.userNameField).type(userName);
    }

  public setPassword(password: string): void {
    cy.get(this.passwordField).type(password);
    }

  public signIn(): void {
    cy.get(this.loginButton).click();
    }
}
  
export { LoginPage };
