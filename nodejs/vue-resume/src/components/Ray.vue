<template>
  <div :class="rayStyle">
    <div class="h-16 w-0.5 bg-gray-400"> </div>
    <div class="flex-auto w-max h-0.5 bg-gray-400 transform -translate-y-1/2"></div>
    <div class="h-2 w-2 bg-gray-800 rounded-full transform -translate-y-1/2 "/>
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
    },
    offset() {
      let style = this.reverse
        ? '-translate-x-0.5'
        : 'translate-x-0.5'
      return style;
    }
  }
};
</script>
