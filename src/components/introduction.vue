<template>
    <a name="home"></a>
    <section class="intro-section mt-n5" id="home">
        <v-row class="align-center px-10">
            <v-col class="pa-6 font-weight-bold py-16">
                <div class="d-flex flex-column justify-center align-center">
                    <span>
                        <!-- ---------------------------- -->
                        <!-- TELEFON GÖRÜNÜMÜ İÇİN -->
                        <div class="d-md-none my-n1 my-n16">
                            <h2 class="text-h3 "><span style="color:#52734D"> <br>Web</span> & <span
                                    style="color:#00B4D8">Software</span> <br></h2>
                            <h2 class="text-h1">Developer</h2>

                            <div class="my-3">
                            </div>
                            <v-subheader class=" d-flex text-grey text-center justify-center ">Lorem ipsum dolor sit
                                amet.
                            </v-subheader>

                            <div class="d-flex justify-center mt-4">
                                <v-btn :loading="loading[1]" :disabled="loading[1]" @click="load(1)" large elevation="5"
                                    color="bblue3" class="text-dark mt-1 px-10 py-5 text-center d-flex flex-row"
                                    href="mailto:YourMailHere">Job Offer</v-btn>
                                <v-btn :loading="loading[2]" :disabled="loading[2]" @click="load(2)" large elevation="5"
                                    color="bblue3" class="text-white mt-1 ml-10 px-10 py-5 text-center d-flex flex-row"
                                    href="#contact">Contact</v-btn>
                            </div>

                            <v-row class="mt-6 d-flex flex-row justify-center">
                                <v-chip class="px-4 ma-3 " color="info" href="YourLinkedinLinkHere" target="blank">
                                    <v-icon left size="20">mdi-linkedin</v-icon>
                                    Linkedin
                                </v-chip>
                                <v-chip class="px-4 ma-3" color="dark" href="https://github.com/onaranyusuf"
                                    target="blank">
                                    <v-icon left size="20">mdi-github</v-icon>
                                    Github
                                </v-chip>
                                <v-chip class="px-4 ma-3" color="red" href="YourLinkHere" target="blank">
                                    <v-icon left size="20">mdi-youtube</v-icon>
                                    Youtube
                                </v-chip>
                                <v-chip class="px-4 ma-3" color="orange" href="mailto:YourMailHere">
                                    <v-icon left size="20">mdi-email-edit-outline</v-icon>
                                    E-mail
                                </v-chip>
                            </v-row>

                            <v-img src="@/assets/bannerimg.png" width="400px" height="600px" class=" d-md-none ">
                            </v-img>


                        </div>

                        <!-- ----------------------------------------
                            ---------------------------------------- -->
                        <!-- WEB GÖRÜNÜMÜ İÇİN -->

                        <div class="d-none d-md-block">
                            <div class="text-h2 ml-n1 ">I'm a</div>
                            <div class="d-flex flex-row  wrapper">

                                <ul class="dynamic-txts">
                                    <li><span>Lorem, ipsum dolor.</span></li>
                                    <li><span>Lorem, ipsum.</span></li>
                                    <li><span>Lorem.</span></li>
                                    <li><span>Lorem, ipsum dolor.</span></li>
                                    <li><span>Lorem, ipsum.</span></li>
                                </ul>
                            </div>
                            <div class="my-2">
                            </div>
                            <v-subheader class="text-grey text-center ">Lorem ipsum dolor sit amet consectetur.
                            </v-subheader>

                            <br>
                            <br>
                            <div class="d-flex justify-space-around align-center flex-column flex-md-row">
                                <v-btn :loading="loading[1]" :disabled="loading[1]" @click="load(1)" large elevation="5"
                                    color="bblue3" class="text-dark mt-1 px-10 py-5 text-center d-flex flex-row"
                                    href="mailto:YourMailHere">Job Offer</v-btn>
                                <v-btn :loading="loading[2]" :disabled="loading[2]" @click="load(2)" large elevation="5"
                                    color="bblue3" class="text-white mt-1 ml-10 px-10 py-5 text-center d-flex flex-row"
                                    href="#contact">Contact</v-btn>
                            </div>

                            <v-row class="mt-16 d-flex flex-row justify-center">
                                <v-chip class="px-4 ma-3 " color="info" href="YourLinkHere" target="blank">
                                    <v-icon left size="20">mdi-linkedin</v-icon>
                                    Linkedin
                                </v-chip>
                                <v-chip class="px-4 ma-3" color="dark" href="https://github.com/onaranyusuf"
                                    target="blank">
                                    <v-icon left size="20">mdi-github</v-icon>
                                    Github
                                </v-chip>
                                <v-chip class="px-4 ma-3" color="red" href="YourLinkHere" target="blank">
                                    <v-icon left size="20">mdi-youtube</v-icon>
                                    Youtube

                                </v-chip>
                                <v-chip class="px-4 ma-3" color="orange" href="mailto:YourMailHere">
                                    <v-icon left size="20">mdi-email-edit-outline</v-icon>
                                    E-mail
                                </v-chip>
                            </v-row>
                        </div>
                    </span>
                </div>
            </v-col>
            <v-col class="d-none d-md-block">
                <v-img src="@/assets/bannerimg.png" width="700px" height="500px" class="mx-80 ">
                </v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "SiteIntroduction",
    data() {
        return {
            loading: [],
        }
    },
    methods: {
        load(i) {
            this.loading[i] = true
            setTimeout(() => (this.loading[i] = false), 3500)
        },
    },
}
</script>

<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}

@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-o-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');



.wrapper {
    display: flex;
}



.wrapper .dynamic-txts {
    margin-left: -5px;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
}

.dynamic-txts li {
    list-style: none;
    color: #03045E;
    font-size: 40px;
    font-weight: 500;
    position: relative;
    top: 0;
    animation: slide 15s steps(5) infinite;
}

@keyframes slide {
    100% {
        top: -250px;
    }
}

.dynamic-txts li span {
    position: relative;
    margin: 5px 0;
    line-height: 50px;
}

.dynamic-txts li span::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background: #FAFAFA;
    border-left: 2px solid #90E0EF;
    animation: typing 3s steps(10) infinite;
}

@keyframes typing {

    40%,
    60% {
        left: calc(100% + 30px);
    }

    100% {
        left: 0;
    }
}
</style>
