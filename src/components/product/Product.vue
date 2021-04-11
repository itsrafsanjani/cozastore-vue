<template>
<div class="row">
    <div class="col-lg-4 col-md-6" v-for="(product, index) in products" :key="index">
<div class="single-product">
    <div class="product-img">
        <img class="img-fluid w-100" :src="$siteUrl+JSON.parse(product.product_image)[0]" :alt="product.product_name" />
    <div class="p_icon">
        <a href="#">
        <i class="ti-eye"></i>
        </a>
        <a href="#">
        <i class="ti-heart"></i>
        </a>
        <a href="#">
        <i class="ti-shopping-cart"></i>
        </a>
    </div>
    </div>
    <div class="product-btm">
    <a href="#" class="d-block">
        <h4> {{product.product_name}} </h4>
    </a>
    <div class="mt-3">
        <span class="mr-4">৳{{product.product_price}}</span>
        <del>৳{{product.product_price+product.product_price*.05}}</del>
    </div>
    </div>
</div>
</div></div>

</template>
<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    productsByCategories () {
      this.$api.get('products/categories/' + this.$route.params.id)
        .then(response => {
          this.products = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    this.productsByCategories()
  },
  watch: {
    productsByCategories () {
      this.products = this.productsByCategories
    }
  }
}
</script>

<style>
</style>
