app.component("buy", {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            isPaying: false
        }
    },

    emits: ["add-slide", "remove-slide", "change-page"],

    template:
    /*html*/
    `
    <section>
        <div id="content">
            <h2>Buy a slide</h2>
            <div id="slides_buttons">
                <button v-for="(slide, i) in slides" class="img_buttons" @click="$emit('add-slide', i)">
                    {{ slide.name }}
                    <img :src="'images/' + slide.img" alt="">
                </button>
            </div>
            <table id="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unity price ($)</th>
                        <th>Total price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart">
                        <td>{{ item.name }}</td>
                        <td class="quantity">
                            <button @click="$emit('remove-slide', slides.indexOf(item))">-</button>
                            <p>{{ item.quantity }}</p>
                            <button @click="$emit('add-slide', slides.indexOf(item))">+</button>
                        </td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.quantity * item.price }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{{ totalQuantity }}</td>
                        <td></td>
                        <td>{{ totalPrice }}</td>
                    </tr>
                </tfoot>
            </table>
            <button @click="pay" id="pay_button">Pay</button>
        </div>
        <pay-form v-if="isPaying" :slides="slides" @pay-confirm="payConfirm" @pay-cancel="payCancel"></pay-form>
    </section>
    `,
    methods: {
        pay() {
            if (this.totalQuantity === 0) {
                alert("Select at least one article !");
            }
            else {
                this.isPaying = true;
                document.body.classList.add("hidden_body");
            }
        },
        
        payConfirm() {
            alert("Payement accepted, you will receive your command between 10 days and never.");
            this.payCancel();
            this.$emit('clear-cart');
            this.$emit('change-page', 'home');
        },
        
        payCancel() {
            this.isPaying = false;
            document.body.classList.remove("hidden_body");
        }
    },

    computed: {
        totalQuantity() {
            return this.slides.reduce((total, slide) => total + slide.quantity, 0);
        },

        totalPrice() {
            return this.slides.reduce((total, slide) => total + slide.quantity * slide.price, 0);
        },
        
        cart() {
            return this.slides.filter(slide => slide.quantity > 0);
        }
    }
})