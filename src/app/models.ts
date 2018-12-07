export class User {
  constructor(
    private firstname: string,
    private lastname: string,
    private email: string,
    private password: string) {}
}


export class LogInfo {
  constructor(
    private loggedIn: boolean,
    private username: string) {}
}
