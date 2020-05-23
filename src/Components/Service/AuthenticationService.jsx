class AuthenticationService {
    registerSuccessfulLogin(userName) {
        sessionStorage.setItem('authenticatedUser', userName)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        return user === null ? false : true
    }
}

export default new AuthenticationService()