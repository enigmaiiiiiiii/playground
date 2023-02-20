<template>
  <div class="flex items-center gap-2">
    <p class="w-1 h-1 rounded-full bg-black"></p>
    <p class="text-base">{{ name }}</p>
  </div>
  <div class="relative w-full h-2 bg-gray-300 rounded-full">
    <div class="absolute top-0 left-0 h-full bg-blue-500 rounded-full" :style="{width: percent}"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.percent-bar {
  width: 100%;
  height: 20px;
  background-color: #aaa;
  border-radius: 10px;
  margin-bottom: 10px;
}

.percent-bar-fill {
  height: 100%;
  background-color: #333;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
}

.percent-bar-label {
  font-size: 12px;
}
</style>