<template>
    <div>
      <div v-if="sliders.length > 0">
        <carousel :items="1" :margin="10" :autoplay="true" :nav="false" :loop="true">
          <div  v-for="slider in sliders" :key="slider.index">
             <img :src="$siteUrl+slider.slider_image" alt="slider.slider_title" />
          </div>
        </carousel>
      </div>
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'Slider',
  components: { carousel },
  data () {
    return {
      sliders: []
    }
  },
  methods: {
    allSliders: function () {
      this.$api.get('sliders')
        .then((res) => {
          this.sliders = res.data.sliders
          console.log(res.data.sliders)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.allSliders()
  }
}
</script>
<style></style>
