<template>
    <v-row>
        <v-flex xs12 md4 v-for="product in products" :key="product.id">
            <v-card wrap outlined>
                <v-img class="white--text align-end" height="300px" :src="product.url"></v-img>
                <v-card-title>{{product.title}}</v-card-title>
                <v-card-text class="text--primary">
                    <div>{{product.description}}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        :to="{ name: 'Product', params: { id: product.id } }"
                        color="orange"
                        text
                    >View</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-row>
</template>

<script>
import API from '../lib/API';

export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            API.getProducts().then(products => {
                this.products = products;
            });
        },
    },
};
</script>

<style scoped>
</style>
