app.component("v-header", {
    props: {
        user: {
            type: String
        }
    },
    emits: ["change-page", "disconnect"],

    template:
    /*html*/
    `
    <header>
        <div id="title_line">
            <div id="title">
                <img src="images/logo.png" alt="">
                <h1>Toboloc</h1>
            </div>
            <p v-if="user === null" @click="$emit('change-page', 'login')" id="login">Log In</p>
            <button v-else id="disconnect" @click="$emit('disconnect')">
                <p>{{ user }}</p>
                <img src="images/disconnect.png">
            </button>
        </div>
        <div id="nav_bar">
            <ul>
                <li class="link" @click="$emit('change-page', 'home')">Home</li>
                <li class="menu">
                    <p>Products</p>
                    <ul>
                        <li class="link" @click="$emit('change-page', 'slides')">Slides</li>
                        <li class="link" @click="$emit('change-page', 'waterSlides')">Water slides</li>
                    </ul>
                </li>
                <li class="link" @click="$emit('change-page', 'buy')">Buy</li>
                <li class="link" @click="$emit('change-page', 'about')">About us</li>
            </ul>
        </div>
    </header>
    `
})