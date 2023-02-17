<template>
  <div class="percent-bar-label">
    <p>{{ name }}</p>
  </div>
  <div class="percent-bar">
    <div class="percent-bar-fill" :style="{width: percent}"></div>
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