// State: data that has to be managed by our application. Data from user.
// State is important because it tells the status of our application.

class App {
    constructor() {

        // Intializing State Object - For managing state
        this.state = {
            isAuth: false,
            error: ''
        };

        this.checkAuth();
        this.render();

        // this.$userMessage = document.getElementById("user-message");
        
    }

    checkAuth() {

        // State
        const user = true;

        if (user) {

            // Keeping a copy of the previous state and updating the value
            this.state = { ...this.state, isAuth: true };

            // this.$userMessage.textContent = "Welcome Back";
        } else {
            this.state = { ...this.state, error: "You must sign in!" };
            // this.$userMessage.textContent = "You must sign in!";
            // this.$userMessage.style.color = "red";
        }
    }

    render() {

        const { isAuth, error } = this.state;

        document.getElementById("root").innerHTML = `
            <div style="color: ${ error && 'red' }">
                ${ isAuth ? "<b>Welcome Back</b>" : error }
            </div>
        `;
    }
}

new App();