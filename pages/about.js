app.component("about", {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    
    data() {
        return {
            sources: [
                {
                    name: "Background",
                    link: "https://www.campsited.com/en/campsites-france/waterpark-campsites/"
                },
                {
                    name: "Logo",
                    link: "https://www.clipartmax.com/middle/m2K9A0m2b1i8Z5N4_crown-cartoon/"
                },
                {
                    name: "The rock's slide",
                    link: "https://www.c2j-loisirs.com/produit/600-a-bosse/"
                },
                {
                    name: "Rrrrrrrrr",
                    link: "https://www.airetvolume.fr/fr/toboggans-gonflables/1444-toboggan-pm-tigre.html"
                },
                {
                    name: "Caribean slide",
                    link: "https://www.occitanie-sl.fr/p/toboggan-pirate-alex-super"
                },
                {
                    name: "Double jurassic slide",
                    link: "https://www.c2j-loisirs.com/en/produit/600-double-a-bosse/"
                },
                {
                    name: "El serpentino",
                    link: "https://www.archiexpo.de/prod/polin-waterparks/product-64440-210416.html"
                },
                {
                    name: "Golden slide",
                    link: "https://klarer.com/PDF/Klarer-News/buch_klarer_E_2015.pdf"
                },
                {
                    name: "Japanese style",
                    link: "https://www.nipponconnection.fr/il-y-a-les-toboggans-lambdas-puis-au-japon-il-y-a-ce-monstre/"
                },
                {
                    name: "Low budget",
                    link: "https://www.pinterest.fr/airetvolume1/jeux-aquatiques-gonflables/"
                },
                {
                    name: "Contact us",
                    link: "https://png.is/f/email-icon-vector-png/m2i8H7m2G6d3A0d3-201907242129.html"
                },
                {
                    name: "Find us",
                    link: "https://icons-for-free.com/map+marker+icon-1320166085262793102/"
                },
                {
                    name: "About us",
                    link: "https://fr.wikipedia.org/wiki/Fichier:Infobox_info_icon.svg"
                },
                {
                    name: "Disconnect",
                    link: "https://d29fhpw069ctt2.cloudfront.net/icon/image/39211/preview.png"
                }
            ],
            team: [
                {
                    name: "Yohan Villiers",
                    img: "yohan.png"
                },
                {
                    name: "Reda Falaki",
                    img: "reda.webp"
                },
                {
                    name: "Quentin Marois",
                    img: "quentin.webp"
                }
            ]
        }
    },

    template:
    /*html*/
    `
    <section>
        <div id="content">
            <h2>About us</h2>

            <h3 class="sections">Our story</h3>
            <p class="text">
                Created in 2<sup>nd</sup> of july 1927, Toboloc always aimed to provide entertainment to everyone everywhere around the world, with high quality and secured slides and water slides. Now managed by Yohan Villiers, Reda Falaki and Quentin Marois, the company still continues on the same tracks as its founder, always searching for innovative and hightech slides.
            </p>

            <h3 class="sections">Our team</h3>
            <div id="team">
                <div v-for="member in team">
                    <img :src="'images/' + member.img" alt="">
                    <h3>{{ member.name }}</h3>
                    <p>CEO</p>
                </div>
            </div>

            <h3 class="sections">Our website creation</h3>
            <p class="text">
                As <del>the society don't have enough money</del> the 3 CEOs of toboloc are highly concerned by the experience of their clients, they decided to entierely design this wonderful website by themselves.
            </p>

            <h3 class="sections">Our Sources</h3>
            <ul id="sources">
                <li v-for="source in sources">
                    {{ source.name }}:
                    <a :href="source.link" target="_blank"> {{ source.link }}</a>
                </li>
            </ul>
        </div>
    </section>
    `
})