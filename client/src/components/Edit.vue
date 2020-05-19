<template lang="html">
  <ProductForm :product="product" :onSubmit="submit"></ProductForm>
</template>

<script>
import API from '../lib/API';
import ProductForm from './ProductForm.vue';

export default {
    components: {
        ProductForm,
    },
    data() {
        return {
            product: {
                title: '',
                description: '',
                count: 0,
                price: 0,
                url: '',
            },
        };
    },
    mounted() {
        const { id } = this.$route.params;
        this.load(id);
    },
    methods: {
        load(id) {
            API.getProduct(id)
                .then((product) => {
                    this.product = product;
                });
        },
        submit() {
            this.product.count = Number(this.product.count);
            this.product.price = Number(this.product.price);
            API.updateProduct(this.product.id, this.product)
                .then(() => {
                    this.$router.push({
                        name: 'Product',
                        params: {
                            id: this.product.id,
                        },
                    });
                });
        },
    },
};
</script>

<style lang="css">
</style>
