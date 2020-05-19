<template lang="html">
  <v-layout>
    <v-flex xs12>
      <v-form ref="form" v-model="valid">
        <v-text-field
          label="Title"
          v-model="product.title"
          :rules="titleRules"
          required
        ></v-text-field>
        <v-text-field
          label="Description"
          v-model="product.description"
          multi-line
        ></v-text-field>
        <v-text-field
          label="Count"
          v-model="product.count"
          :rules="quantityRules"
          required
        ></v-text-field>
        <v-text-field
          label="Price"
          v-model="product.price"
          :rules="quantityRules"
          required
        ></v-text-field>
        <v-text-field
          label="Image"
          v-model="product.url"
          required
          :rules="imageRules"
        ></v-text-field>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props: ['product', 'onSubmit'],
    data() {
        return {
            valid: true,
            titleRules: [(title) => {
                if (title.trim() === '') return 'Title must not be empty.';
                return true;
            }],
            quantityRules: [(rating) => {
                if (isNaN(rating)) return 'Must be a valid number.';
                if (Number(rating) < 0) return 'Must be 0 or greater';
                return true;
            }],
            imageRules: [(url) => {
                if (url.trim() === '') return 'url must not be empty.';
                return true;
            }],
        };
    },
    methods: {
        submit() {
            if (this.valid) {
                this.onSubmit();
            }
        },
        clear() {
            this.$refs.form.reset();
        },
    },
};
</script>

<style lang="css">
</style>
