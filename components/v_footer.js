app.component("v-footer", {
    emits: ["change-page"],

    template:
    /*html*/
    `
    <footer>
        <ul>
            <li @click="$emit('change-page', 'contact')" class="link">
                <img src="images/contact_icon.png" alt="">
                <p>Contact us</p>
            </li>
            <li>
                <a href="https://goo.gl/maps/vMVJikAC5TB77T2r6" target="_blank" class="link">
                    <img src="images/find_us_icon.png" alt="">
                    <p>Find us</p>
                </a>
            </li>
            <li @click="$emit('change-page', 'about')" class="link">
                <img src="images/info_icon.png" alt="">
                <p>About us</p>
            </li>
        </ul>
    </footer>
    `
})