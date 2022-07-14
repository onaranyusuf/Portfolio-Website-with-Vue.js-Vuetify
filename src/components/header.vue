<template>
    <v-app-bar elevation="0" height="40" class="d-none d-sm-block">
        <v-subheader>
            <h1 style="color: #03045E"><span style="color: #00B4D8"></span></h1>
        </v-subheader>
        <v-tabs center-active right background-color="transparent" active-class="active-tab" class="justify-end ">
            <v-tab href="/#top">Home</v-tab>
            <v-tab href="/#about">About</v-tab>
            <v-tab href="/#education">Education</v-tab>
            <v-tab href="/#portfolio">Portfolio</v-tab>
            <v-tab href="/#contact">Contact</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-btn large color="bblue2" class="text-white ml-10 justify-end" href="mailto:YourMailHere" variant="outlined">
            Send me an
            Email</v-btn>
    </v-app-bar>


    <v-app-bar elevation="0" height="40" class="d-sm-none my-n1">
        <v-subheader>
            <h1 style="color: #03045E"><span style="color: #00B4D8"></span></h1>
        </v-subheader>
        <v-tabs class="justify-end ">
            <v-tab href="/#top" class="mx-n1">Home</v-tab>
            <v-tab href="/#about" class="mx-n1">About</v-tab>
            <v-tab href="/#portfolio" class="mx-n1">Portfolio</v-tab>
            <v-tab href="/#contact" class="mx-n1">Contact</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
    </v-app-bar>



</template>


<script>
export default {
    name: "SiteHeader"
}
</script>

<style>
.v-tab.active-tab {
    color: #e91e63;
}

.v-tab.active-tab::before {
    background-color: #4caf50;
}
</style>

