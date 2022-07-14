<template>
    <a name="about"></a>
    <v-container>

        <section class="mt-15">
            <h4 class="text-h4 text-center mb-5">About Me</h4>
            <v-row class="align-center justify-center">
                <v-col>

                    <v-card class="text-center pa-6 rounded-lg" color="#e1e0e0c9" elevation="6">
                        <v-card-subtitle class="text-h6 text-black">ABOUT MYSELF</v-card-subtitle>
                        <h2 class="display-1 font-weight-regular mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in dolorum suscipit officiis
                            ipsa at commodi totam, blanditiis voluptates autem?
                        </h2>
                        <div class="d-flex justify-center">
                            <v-btn href="#contact" large elevation="5" color="bblue3" class="text-white mt-5 px-10 py-5 d-flex 
                        justify-space-around align-center flex-column flex-md-row">Contact Me
                                <v-icon>mdi-gesture-tap</v-icon>
                            </v-btn>

                        </div>

                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-6 rounded-lg" color="#e1e0e0c9" elevation="6">
                        <v-card-subtitle class="text-black text-center text-h6">LANGUAGES & TECHNOLOGIES
                        </v-card-subtitle>
                        <div class="py-1" v-for="(item, index) in items" :key="index">
                            <label>{{ item.title }}</label>
                            <v-progress-linear :color="item.color" height="5" buffer-value="0" :model-value="item.value"
                                stream></v-progress-linear>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </section>
    </v-container>
</template>

<script>
export default {
    name: "SiteAbout",
    data: () => ({
        drawer: null,
        items: [
            { title: 'Python', value: 90, color: 'cyan accent-3' },
            { title: 'HTML5', value: 100, color: 'teal' },
            { title: 'CSS', value: 90, color: 'deep-orange' },
            { title: 'Javascript', value: 65, color: 'green' },
            { title: 'VueJS', value: 80, color: 'brown darken-1' },
            { title: 'Vuetify', value: 90, color: 'black' },
            { title: 'C', value: 65, color: 'red' },
            { title: 'Java', value: 50, color: 'teal darken-2' },
        ],
    }),
}
</script>