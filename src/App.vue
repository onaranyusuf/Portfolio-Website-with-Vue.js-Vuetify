<template>
  <v-app class="bg-grey-lighten-5">
    <SiteHeader />
    <v-main>
      <router-view />
    </v-main>
    <v-footer theme="dark" color="grey-lighten-2 mt-5">
      <v-container class="text-center w-100 justify-space-between d-flex flex-row">
        <v-row>
          <v-col>
            <div class="align-start">
              <div class="d-flex flex-row justify-start flex-column text-start">
                <p>You can find my projects in <strong><a href="#portfolio"
                      class="text-blue text-decoration-none">Portfolio</a></strong> part. </p>
                <p>For communication and your questions, you can send a form from the "<strong><a href="#contact"
                      class="text-blue text-decoration-none">contact me</a></strong>"
                  section.</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <div class="bg-grey-lighten-2 text-center d-flex flex-column">
      <v-divider></v-divider>
      <v-subheader>
        <strong>© <a href="https://github.com/onaranyusuf" class="text-red text-decoration-none">YUSUF ONARAN</a> —
          Theme by <a href="https://www.yusufonaran.me" target="_blank" class="text-red text-decoration-none">YUSUF
            ONARAN</a> </strong> — {{ new Date().getFullYear() }}
        <v-spacer></v-spacer>
      </v-subheader>
    </div>
  </v-app>
</template>

<script>
import SiteHeader from '@/components/header.vue';

export default {
  name: 'App',
  data: () => ({

  }),

  components: {
    SiteHeader,
  },

}
</script>

