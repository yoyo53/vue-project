app.component("create-account", {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    
    data() {
        return {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            stayConnected: false
        }
    },

    emits: ["change-page", "connect"],

    template:
    /*html*/
    `
    <section>
        <div id="content">
            <h2>Create your Account</h2>
            <form id="create_account_form" @submit.prevent="createAccount">
                <table>
                    <tr>
                        <td>
                            <label for="name">Name:</label>
                        </td>
                        <td>
                            <input type="text" name="name" id="name" v-model="name" placeholder="Enter your name" required>
                        </td>
                    </tr>
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
                            <input type="password" name="password" id="password" v-model="password" placeholder="********" pattern=".{8,}" title="Eight or more characters" @keyup="checkPassword" required>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="confirm_password">Confirm Password:</label>
                        </td>
                        <td>
                            <input type="password" name="confirm_password" id="confirm_password" v-model="confirmPassword" placeholder="********" @keyup="checkPassword" required>
                        </td>
                    </tr>
                </table>
                <input type="checkbox" name="stay_connected" id="stay_connected" v-model="stayConnected">
                <label for="stay_connected">Stay Connected</label>
                <br>
                <button type="submit">Create Account</button>
                <button type="button" @click="$emit('change-page', 'previous')">Cancel</button>
            </form>
        </div>
    </section>
    `,

    methods: {
        checkPassword() {
            if (this.password !== this.confirmPassword) {
                document.getElementById("confirm_password").setCustomValidity("Passwords Don't Match");
            }
            else {
                document.getElementById("confirm_password").setCustomValidity("");
            }
        },

        createAccount() {
            if (window.localStorage.getItem(this.email) !== null) {
                alert("This e-mail address is already used !");
            }
            else {
                window.localStorage.setItem(this.email, JSON.stringify({name: this.name, password: this.password}));
                if (this.stayConnected === true) {
                    window.localStorage.setItem("connected", this.email);
                }
                window.sessionStorage.setItem("connected", this.email);
                this.$emit("connect", this.name);
                this.$emit("change-page", "home");
            }
        }
    }
})