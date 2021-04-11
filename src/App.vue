<template>
  <div id="app">
    <!-- My Footer -->
    <my-header></my-header>

    <!-- My Home -->
    <!-- <my-home></my-home> -->
    <router-view></router-view>

    <!-- My Footer -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from '@/components/includes/Header'
import Footer from '@/components/includes/Footer'
import Slider from '@/components/includes/Slider'
import Product from '@/components/product/Product'

export default {
  name: 'App',
  components: {
    'my-header': Header,
    'my-footer': Footer,
    'my-slider': Slider,
    'product': Product
  }
}
</script>

<style></style>
