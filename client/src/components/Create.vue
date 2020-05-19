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
    methods: {
        submit() {
            this.product.count = Number(this.product.count);
            this.product.price = Number(this.product.price);
            API.createProduct(this.product)
                .then(({ id }) => {
                    this.$router.push({
                        name: 'Product',
                        params: {
                            id,
                        },
                    });
                });
        },
    },
};
</script>

<style lang="css">
</style>
