<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif"
      alt="loading"
    />
    <ul v-else>
      <li v-for="product in products">
        {{product.title}} - {{product.price | currency}} - {{product.inventory}}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add To Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'ProductList',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
     products: state => state.products.items
    }),
    ...mapGetters('products', {
      productIsInStock: 'productIsInStock'
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart'
    })
  },
  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>
