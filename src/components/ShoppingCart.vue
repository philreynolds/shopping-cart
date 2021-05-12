<template>
  <div>
    <h1>Shipping Cart</h1>
    <ul>
      <li v-for="product in products">
        {{ product.title}} - {{product.price | currency}} - {{product.quantity}}
      </li>
    </ul>
    <p class="cart-total">Total: {{total | currency}}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>

</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'ShoppingCart',
  computed: {
    ...mapState({
      checkoutStatus: 'checkoutStatus'
    }),
    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotal'
    })
  },
  methods: {
    ...mapActions([
      'checkout'
    ])
  }
}
</script>

<style scoped>
.cart-total {
  font-weight: bold;
}
</style>
