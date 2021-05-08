<template>
  <div>
    <h1>Shipping Cart</h1>
    <ul>
      <li v-for="product in products">
        {{ product.title}} - {{product.price | currency}} - {{product.quantity}}
      </li>
    </ul>
    <p class="cart-total">Total: {{total | currency}}</p>
    <button @click="$store.dispatch('checkout')">Checkout</button>
    <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
  </div>

</template>

<script>
export default {
  name: 'ShoppingCart',
  computed: {
    products () {
      return this.$store.getters.cartProducts
    },
    total () {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style scoped>
.cart-total {
  font-weight: bold;
}
</style>
