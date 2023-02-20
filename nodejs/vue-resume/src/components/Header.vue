<template>
  <div>
    <TitleFrame>
      hello world
    </TitleFrame>
    <div class="flex gap-4 my-4">
      <img class="w-24 h-24 rounded-full" :src="photoUrl" alt="Profile photo">
      <div>
        <p>about me i am a profession</p>
        <p>about me i am a profession</p>
        <p>about me i am a profession</p>
        <p>about me i am a profession</p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';
import TitleFrame from './TitleFrame.vue';

export default {
  components: {
    Title,
    TitleFrame,
  },
  props: {
    photoUrl: {
      type: String,
      required: true
    },
  }
}
</script>
