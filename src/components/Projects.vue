<template>
    <div>
        <v-card class="mr-6" elevation="2">
            <v-card-title>
                <v-btn outlined class="ma-2" fab color="blue">
                    <v-icon>mdi-file-cabinet</v-icon>
                </v-btn>
                <h5 class="title">Projects</h5>
                <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="success">Create Project</v-btn>
                    <v-btn class="ma-2" outlined>Bulk Actions<v-icon right dark>mdi-menu-down</v-icon></v-btn>
                    
                    <v-icon class="d-lg-none">mdi-magnify</v-icon>
                    <v-btn outlined class="mr-2 d-none d-sm-flex">
                        <v-icon>mdi-magnify</v-icon>
                        <p class="mt-3">Search</p>
                    </v-btn>
                    <v-btn outlined class="mr-2 d-lg-none">
                        <v-icon>mdi-filter</v-icon>
                    </v-btn>
                    <v-btn outlined class="mr-2 d-none d-sm-flex">
                        <v-icon>mdi-filter</v-icon>
                        <p class="mt-3">Filters</p>
                    </v-btn>
                    <v-btn outlined class="mr-2">
                        <v-icon>mdi-calculator-variant</v-icon>
                    </v-btn>
                    <v-btn outlined class="mr-2">
                        <v-icon>mdi-sort</v-icon>
                    </v-btn>
                
            </v-card-title>
            <v-card-text>
                <v-row align="center" justify="center">
                    <v-btn-toggle v-model="toggle_multiple" borderless multiple>
                        <v-btn>
                            <span>Draft</span>
                        </v-btn>
                        <v-btn>
                            <span>Deployed</span>
                        </v-btn>
                        <v-btn>
                            <span>Completed</span>
                        </v-btn>
                        <v-btn>
                            <span>Archived</span>
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-card-text>
            <v-card-text>
                <v-row class="d-lg-none" justify="center">
                    <p class="mt-4"><span style="color:gray">28/03/2019</span></p>
                </v-row>
                <v-row class="mb-2">
                    <v-card class="mx-auto" width="600" outlined style="border-left: 5px solid blue">
                        <v-card-title>
                            <h5>Baseline Survey</h5>
                            <v-btn class="ml-5 info d-none d-sm-flex">
                                surveys
                            </v-btn>
                            <v-spacer></v-spacer>
                            <p class="mt-4 d-none d-sm-flex"><span style="color:gray">28/03/2019</span></p>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-card-title>
                        <v-card-subtitle>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </v-card-subtitle>
                        <v-card-subtitle class="d-lg-none">
                            Project Name: Mahila..
                        <v-btn class="ml-5 info d-lg-none">
                                Activity
                        </v-btn>
                        </v-card-subtitle>
                        <v-card-subtitle class="d-none d-sm-flex">
                            Project Name: Mahila Kisan Sashaktikaran Pariyojna (MKSP)
                        </v-card-subtitle>
                    </v-card>
                </v-row>
                <v-row class="d-lg-none" justify="center">
                    <p class="mt-4"><span style="color:gray">29/03/2019</span></p>
                </v-row>
                <v-row class="mb-2">
                    <v-card class="mx-auto" width="600" outlined style="border-left: 5px solid green">
                        <v-card-title>
                            <h5>Baseline Survey</h5>
                            <v-btn class="ml-5 success d-none d-sm-flex">
                                Activity
                            </v-btn>
                            <v-spacer></v-spacer>
                            <p class="mt-4 d-none d-sm-flex"><span style="color:gray">29/03/2019</span></p>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-card-title>
                        <v-card-subtitle>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </v-card-subtitle>
                        <v-card-subtitle class="d-lg-none">
                            Project Name: Mahila..
                        <v-btn class="ml-5 success d-lg-none">
                                Activity
                        </v-btn>
                        </v-card-subtitle>
                        <v-card-subtitle class="d-none d-sm-flex">
                            Project Name: Mahila Kisan Sashaktikaran Pariyojna (MKSP)
                        </v-card-subtitle>
                    </v-card>
                </v-row>
                <v-row class="d-lg-none" justify="center">
                    <p class="mt-4"><span style="color:gray">30/03/2019</span></p>
                </v-row>
                <v-row class="mb-2">
                    <v-card class="mx-auto" width="600" outlined style="border-left: 5px solid red">
                        <v-card-title>
                            <h5>Baseline Survey</h5>
                            <v-btn class="ml-5 error d-none d-sm-flex">
                                Outcomes
                            </v-btn>
                            <v-spacer></v-spacer>
                            <p class="mt-4 d-none d-sm-flex"><span style="color:gray">30/03/2019</span></p>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-card-title>
                        <v-card-subtitle>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </v-card-subtitle>
                        <v-card-subtitle class="d-lg-none">
                            Project Name: Mahila..
                        <v-btn class="ml-5 error d-lg-none">
                                Outcomes
                        </v-btn>
                        </v-card-subtitle>
                        <v-card-subtitle class="d-none d-sm-flex">
                            Project Name: Mahila Kisan Sashaktikaran Pariyojna (MKSP)
                        </v-card-subtitle>
                        
                    </v-card>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    name:'Projects'
}
</script>