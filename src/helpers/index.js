export const authenticateUser = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    callback()
  },
  signout(callback) {
    this.isAuthenticated = false;
    callback()
  }
}