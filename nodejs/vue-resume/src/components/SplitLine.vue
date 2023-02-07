<template>
  <div :class="containerStyle">
    <div :class="lineStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'SplitLine',
  props: {
    direction: {
      type: String,
    }
  },
  computed: {
    dotCount() {
      const lineWidth = this.size - (this.dotSize * 2)
      const dotWidth = this.dotSize + this.dotSpacing
      return Math.floor(lineWidth / dotWidth)
    },
    lineStyle() {
      let direct = this.direction === 'vertical'
        ? 'h-full w-1'
        : 'w-full h-1'
      return `${direct} bg-gray-300`
    },
    containerStyle() {
      let style = this.direction === 'vertical'
        ? 'flex justify-center h-full'
        : 'flex flex-col justify-center w-full'
      return style;
    }
  }
}
</script>

<style scoped>
/* Styles for the component */
</style>
