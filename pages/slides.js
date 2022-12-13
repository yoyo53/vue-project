app.component("slides", {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
    ` 
    <section>
        <div id="content">
            <h2 id="page_title">Our slides</h2>
            <div v-for="slide in classicSlides" class="slides">
                <img :src="'images/' + slide.img" alt="">
                <div>
                    <h3>{{ slide.name }}</h3>
                    <p v-html="slide.description"></p>
                </div>
            </div>
        </div>
    </section>
    `,
    computed: {
        classicSlides() {
            return this.slides.filter(slide => slide.type === "classic");
        }
    }

})