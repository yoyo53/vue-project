app.component("pay-form", {
    emits: ["pay-confirm", "pay-cancel"],

    template:
    /*html*/
    `
    <form id="pay_form" @submit.prevent="$emit('pay-confirm')">
        <h2>Payement</h2>
        <table>
            <tr>
                <td>
                    <label for="card_number">Card number:</label>
                </td>
                <td>
                    <input type="text" name="card_number" id="card_number" pattern="[0-9]{4}( [0-9]{4}){3}" maxlength="19" placeholder="XXXX XXXX XXXX XXXX" required>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="expiration_date">Expiration date:</label>
                </td>
                <td>
                    <input type="text" name="expiration_date" id="expiration_date" pattern="(0[1-9]|1[012])/[0-9]{2}" maxlength="5" placeholder="MM/YY" required>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="security_code">Card security code:</label>
                </td>
                <td>
                    <input type="text" name="security_code"  id="security_code" pattern="[0-9]{3}" maxlength="3" placeholder="***" required>
                </td>
            </tr>
        </table>
        <button type="submit">Confirm</button>
        <button type="button" @click="$emit('pay-cancel')">Cancel</button>
    </form>
    <div id="cover"></div>
    `
})