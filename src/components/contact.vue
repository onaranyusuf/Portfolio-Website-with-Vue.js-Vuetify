<template>


    <v-container>
        <h4 class="text-h4 text-center mb-1">Contact Me</h4>
        <v-form ref="form" v-model="valid" lazy-validation action="" method="POST">
            <input>
            <v-text-field v-model="name" :counter="25" :rules="nameRules" label="Name" type="name" name="Name" required>
            </v-text-field>

            <v-text-field class="mt-n3" v-model="email" :rules="emailRules" label="E-mail" type="email" name="E-mail"
                required></v-text-field>

            <v-select class="mt-n3" v-model="select" :items="items" :rules="[v => !!v || 'You have to choice!']"
                label="What are you contacting for?" required name="Subject">
            </v-select>

            <v-text-field class="mt-n3" v-model="message" :counter="225" :rules="messageRules" name="Message"
                label="Message (Explain what you want)" required></v-text-field>

            <v-checkbox class="mt-n8" v-model="checkbox" :rules="[v => !!v || 'You must agree to send form!']"
                label="Do you agree?" required></v-checkbox>
            <div class="d-flex justify-center mt-n8">

                <v-btn :disabled="!valid" color="bblue2" class="mr-4" @click="submit" type="submit">
                    Submit
                </v-btn>

                <v-btn color="error" class="mr-4" @click="reset">
                    Reset Form
                </v-btn>
            </div>
        </v-form>
    </v-container>

</template>



<script>
export default {
    name: "SiteContact",
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required!',
            v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required!',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Lorem ipsum dolor sit amet.',
            'Lorem ipsum dolor sit amet.',
            'Lorem ipsum dolor sit amet.',
            'Lorem ipsum dolor sit amet.',
        ],
        checkbox: false,
        // valid: true,
        message: '',
        messageRules: [
            i => !!i || 'Message is required!',
            i => (i && i.length <= 225) || 'Message must be less than 225 characters',
        ],
    }),

    methods: {
        submit() {
            this.$refs.form.submit()
        },
        reset() {
            this.$refs.form.reset()
        },
    },
}
</script>

