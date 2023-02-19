<template>
  <div class="container">
    <div>{{ text }}</div>
    <div class="box" :class="cls"></div>
    <button @click="toggleStyle">Toggle Style</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useTranslate: false,
      text: 'position',
    }
  },
  computed: {
    cls() {
      return this.useTranslate ? 'translate' : 'box-relative';
    }
  },
  methods: {
    toggleStyle() {
      this.useTranslate = !this.useTranslate;
      this.text = this.useTranslate ? 'translate' : 'position';
    }
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #f00;
}

.translate {
  transform: translate(50px, 50px);
}

.box-relative{
  position: relative;
  top: 50px;
  left: 50px;
}
</style>
