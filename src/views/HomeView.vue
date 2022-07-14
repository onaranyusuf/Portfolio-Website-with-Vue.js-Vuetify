<template>

<SiteIntroduction/>
<SiteAbout/>
<SiteEducation/>
<SiteProjects/>
<SiteContact/>   

  
</template>


<script>
import { defineComponent } from 'vue';

// Components

import SiteIntroduction from '../components/introduction.vue';
import SiteAbout from '../components/aboutme.vue';
import SiteEducation from '../components/education.vue'
import SiteProjects from '../components/projects.vue'
import SiteContact from '../components/contact.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    //HelloWorld,
    SiteIntroduction,
    SiteAbout,
    SiteEducation,
    SiteProjects,
    SiteContact,

  },
});
</script>
