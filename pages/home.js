app.component("home", {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    
    template:
    /*html*/
    `
    <section id="home">
        <h2>Slide to your happiness</h2>
    </section>
    `
})