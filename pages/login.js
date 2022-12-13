app.component("login", {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    
    data() {
        return {
            email: "",
            password: "",
            stayConnected: false
        }
    },

    emits: ["change-page", "connect"],

    template:
    /*html*/
    `
    <section>
        <div id="content">
            <h2>Log In</h2>
            <form id="login_form" @submit.prevent="login">
                <table>
                    <tr>
                        <td>
                            <label for="mail">E-mail address:</label>
                        </td>
                        <td>
                            <input type="email" name="mail" id="mail" v-model="email" placeholder="email@email.com" required>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="password">Password:</label>
                        </td>
                        <td>
                            <input type="password" name="password" id="password" v-model="password" placeholder="********" pattern=".{8,}" title="Eight or more characters" required>
                        </td>
                    </tr>
                </table>
                <input type="checkbox" name="stay_connected" id="stay_connected" v-model="stayConnected">
                <label for="stay_connected">Stay Connected</label>
                <br>
                <p id="create_account">
                    Don't have an account ? 
                    <p @click="$emit('change-page', 'createAccount')">Create one now</p>
                </p>
                <button type="submit">Connect</button>
                <button type="button" @click="$emit('change-page', 'previous')">Cancel</button>
            </form>
        </div>
    </section>
    `,

    methods: {
        login() {
            let user = JSON.parse(window.localStorage.getItem(this.email));
        
            if (user === null) {
                alert("No account found !");
            }
            else if (user.password === this.password) {
                if (this.stayConnected === true) {
                    window.localStorage.setItem("connected", this.email);
                }
                window.sessionStorage.setItem("connected", this.email);
                this.$emit("connect", user.name);
                this.$emit("change-page", "home");
            }
            else {
                alert("Invalid password !");
            }
        }
    }
})