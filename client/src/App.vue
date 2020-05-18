<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item link :to=" { name: 'Products' }">
                    <v-list-item-action>
                        <v-icon>mdi-peanut</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1">Kernel Shop Front</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Kernel Shoppe</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container class="fill-height" fluid>
                <v-row>
                    <router-view></router-view>
                </v-row>
            </v-container>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">Squirrel's Den Inc &copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        drawer: false,
    }),
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
