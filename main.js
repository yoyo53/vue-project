const app = Vue.createApp({
    data() {
        return {
            slides: [
                {
                    name: "Golden slide",
                    description: "This 35 m long slide was built using only premium quality materials. Mithril ore, diamond particles and the final touch giving all its charm and color to the golden slide: 24 carat massive golden plates. The most observant will have notice its particular shape, reminding a golden ring.<br><br>The golden ring slide is one of our best-seller. Porc Adventuro, Merineland and more of our partners already trusted us with this masterpiece of slide crafting.",
                    type: "water",
                    price: 100000,
                    img: "golden_slide.png",
                    quantity: 0
                },
                {
                    name: "El serpentino",
                    description: "Coiling around like an Amazon rainforest python, El serpentino will make your visitors' heads turn around, around and around for a 26.6 m long glide. Though smaller than our other water slides, its aerodynamic shape allows to accumulate much more speed, making your splash arrival spectacular! During our experiments, we recorded a maximum arrival speed of 10 m/s, which is more than two times the average speed of conventional water slides.",
                    type: "water",
                    price: 30000,
                    img: "el_serpentino.jpg",
                    quantity: 0
                },
                {
                    name: "Japanese style",
                    description: "You are searching for an original and unique gliding experience to impress your visitors? This water slide freshly patented by our japanese research lab is made for you. Its circular shape will make your visitors feel like a roulette ball, as they turn around the slide, in order to reach the center. Another attracting aspect of the Japanese style water slide is its shining colors, that will instantly catch everyone's eyes. There is no doubt that this brand new slide will become the new idol around!",
                    type: "water",
                    price: 50000,
                    img: "japanese_style.jpg",
                    quantity: 0
                },
                {
                    name: "Low budget",
                    description: "Of course, very long and complex water slides are attracting. But sometimes, simplicity is the key, both for you and your wallet. That is why, here at Toboloc, we wanted to propose this nostalgic, timeless water slide. Its advantages are numerous. First, its size, making it accessible to all type of structures. Second, its mobility, allowing the visitors to move it around as they please, increasing the possibilities of entertainement. Finally, its accessibility, since contrarly to our other water slides, it does not have any age restrictions, making it fun for all the family!",
                    type: "water",
                    price: 1000,
                    img: "low_budget.png",
                    quantity: 0
                },
                {
                    name: "Caribean slide",
                    description: "Awaken your pirat soul with this timeless slide, present in every funfair. Let the kids join captain Jake Spearow crew and experiment the pirat life for the time of an exciting gliding experiment. Easy to install and maintain, the Caribean style slide can be blown up in only 5 minutes (time can vary depending on the quality of your air pump). The two palm trees on its bottom will give to your event an exotic and green spirit, very appreciated by visitors nowadays.",
                    type: "classic",
                    price: 10000,
                    img: "caribean_slide.jpg",
                    quantity: 0
                },
                {
                    name: "Double jurassic slide",
                    description: "Here at Toboloc, we all love Spealbarg. But what we love more that Spealbarg are its famous movie: Jorrussic Pork. That is why we asked our California based design team to create this model for all dinosaurs fans! Its double entry slide allows very small waiting time and a shared gliding experience, that favors exchanges between your visitors. This will install a good mood for all the time of your event that will incite people to stay longer.",
                    type: "classic",
                    price: 40000,
                    img: "double_jurassic_slide.jpg",
                    quantity: 0
                },
                {
                    name: "Rrrrrrrrr",
                    description: "Ok, lions are cool. But let us not forget about tigers. The Rrrrrrrrr slide is made for all big cats and savanna ambiance lovers. Let your visitors experiment the feelings of a roadtrip in the vast savanna for the time of a slide. Walk into the tiger's den has never been so fun!",
                    type: "classic",
                    price: 15000,
                    img: "rrrrrrrrr.jpg",
                    quantity: 0
                },
                {
                    name: "The rock's slide",
                    description: "Climb the abrupt rock to reach your goal: an exciting and unforgettable gliding experience aboard our latest slide. The incredible aspect of the rock's slide is that the climbing was thought to be as fun as the descent. Indeed, the inclined slope along with the spaced small steps let the visitors face a true challenge, that will divert them even before experiencing the true fun of the slide: its 10m high speed descent!",
                    type: "classic",
                    price: 20000,
                    img: "the_rocks_slide.png",
                    quantity: 0
                }
            ],
            pages: {
                about: {
                    component: "about",
                    title: "Toboloc - About Us"
                },
                buy: {
                    component: "buy",
                    title: "Toboloc - Buy"
                },
                contact: {
                    component: "contact",
                    title: "Toboloc - Contact Us"
                },
                createAccount: {
                    component: "create-account",
                    title: "Toboloc - Create Account"
                },
                home: {
                    component: "home",
                    title: "Toboloc"
                },
                login: {
                    component: "login",
                    title: "Toboloc - Login"
                },
                slides: {
                    component: "slides",
                    title: "Toboloc - Our Slides"
                },
                waterSlides: {
                    component: "water-slides",
                    title: "Toboloc - Our Water Slides"
                }
            },
            history: ["home"],
            user: null
        }
    },

    mounted() {
        document.title = this.currentPage.title;
        if (window.sessionStorage.getItem("connected") !== null) {
            this.user = JSON.parse(window.localStorage.getItem(window.sessionStorage.getItem("connected"))).name;
        }
        else if (window.localStorage.getItem("connected") !== null){
            this.user = JSON.parse(window.localStorage.getItem(window.localStorage.getItem("connected"))).name;
        }
    },

    template:
    /*html*/
    `
    <v-header :user="user" @change-page="changePage" @disconnect="disconnect"></v-header>
    <component :is="currentPage.component" 
               v-bind="{slides: slides}"
               @change-page="changePage"
               @add-slide="addSlide"
               @remove-slide="removeSlide"
               @clear-cart="clearCart"
               @connect="connect">
    </component>
    <v-footer @change-page="changePage"></v-footer>
    `,

    methods: {
         changePage(page) {
            if (page === "previous" && this.history.length > 1) {
                this.history.shift();
            }
            else if (page !== this.currentPage) {
                this.history.unshift(page);
            }
            document.title = this.currentPage.title;
        },

        connect(username) {
            this.user = username;
        },

        disconnect() {
            window.localStorage.removeItem("connected");
            window.sessionStorage.removeItem("connected");
            this.user = null;
        },

        addSlide(slide) {
            this.slides[slide].quantity++;
        },

        removeSlide(slide) {
            if (this.slides[slide].quantity > 0) {
                this.slides[slide].quantity--;
            }
        },

        clearCart() {
            this.slides.forEach(slide => slide.quantity = 0);
        }
    },

    computed: {
        currentPage() {
            return this.pages[this.history[0]];
        }
    }
});