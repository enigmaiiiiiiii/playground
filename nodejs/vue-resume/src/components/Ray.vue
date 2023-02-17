<template>
  <div :class="rayStyle">
    <div class="flex-auto w-full h-0.5 bg-gray-400 transform -translate-y-1/2"></div>
    <div class="h-2 w-2 bg-gray-800 rounded-full transform -translate-y-1/2"/>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
    }
  },
  computed: {
    rayStyle() {
      let style = this.reverse
        ? 'flex flex-row-reverse'
        : 'flex flex-row'
      return style;
    }
  }
};
</script>
