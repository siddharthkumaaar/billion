<template>
    <div id="app">
        <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            >
            <v-btn
                icon
                @click.stop="drawer = !drawer"
            >
                <v-app-bar-nav-icon class="d-lg-none" ></v-app-bar-nav-icon>
            </v-btn>
            <v-toolbar-title><span class="blue--text">Im</span><span class="green--text">Works</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-row
                justify="end"
                class="mt-2"
            >
                <v-btn icon>
                    <v-img class="mx-5" src="abcd.png" height="30" contain></v-img> 
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-comment-question</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-account-circle</v-icon>
                </v-btn>
            </v-row>
        </v-app-bar>
        <v-navigation-drawer
                app
                color="white"
                v-model="drawer"
                :mini-variant.sync="mini">
                <v-divider></v-divider>
                <v-list nav dense>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="title"></v-list-item-title>
                        <v-btn
                            icon
                            @click.stop="mini = !mini"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-list-item>
                    <v-list class="float-left" nav dense>
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-monitor-dashboard</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title><router-link to='/home'>Dashboard</router-link></v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-file-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title><router-link to='/'>My Task</router-link></v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-progress-wrench</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title><router-link to='/about'>About</router-link></v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-folder</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title><router-link to='/projects'>Projects</router-link></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-list>
        </v-navigation-drawer>
        <v-content>
            <router-view></router-view>
            <!-- <CardBox /> -->
        </v-content>
        </v-app>
    </div>
</template>
<script>
// import CardBox from './CardBox'

export default {
    name:'NavBar',
    components:{
        // CardBox
    },
     data () {
      return {
        drawer: true,
        mini: true,
      }
    }
}
</script>

