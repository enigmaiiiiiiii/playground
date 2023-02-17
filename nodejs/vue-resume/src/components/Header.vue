<template>
  <div>
    <Title />
    <div class="flex gap-4 my-4">
      <img class="w-28 rounded-full" :src="photoUrl" alt="Profile photo">
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
import Ray from './Ray.vue';
import Title from './Title.vue';

export default {
  components: {
    Title,
    Ray,
  },
  props: {
    photoUrl: {
      type: String,
      required: true
    },
  }
}
</script>
