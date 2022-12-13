app.component("contact", {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    
    emits: ["change-page"],

    template:
    /*html*/
    `
    <section>
        <div id="content">
            <h2>Contact us</h2>
            <form id="contact" @submit.prevent="sendMessage">
                <label for="mail">E-mail address:</label>
                <input type="email" name="mail" id="mail" placeholder="email@email.com" required>
                <br>
                <label for="category"></label>
                <select id="category" name="category" required>
                    <option value="">--Reason of the request--</option>
                    <option>Client services</option>
                    <option>Join us</option>
                    <option>Other</option>
                </select>
                <br>
                <textarea id="message" rows="10" cols="50" placeholder="Type your message here" required></textarea>
                <br>
                <button type="submit">Send</button>
                <button type="button" @click="$emit('change-page', 'previous')">Cancel</button>
            </form>
        </div>
    </section>
    `,
    methods: {
        sendMessage() {
            alert("thank you for taking the time to contact us !\n\nYour message have been transmitted to our team, one of our agents will get back to you as soon as possible. In normal time, that’s usually within a few years. It might take a little longer on weekends.");
            this.$emit('change-page', 'home');
        }
    }
})