<template>
  <div>
    <div class="flex items-center gap-4 mt-4">
      <div class="flex-auto h-full">
        <Ray />
      </div>
      <h1 class="flex justify-content font-bold text-5xl underline bg-white mx-6 place-content-center"><p>world</p></h1>
      <div class="flex-auto h-full">
        <Ray reverse/>
      </div>
    </div>
    <div class="grid">
      <div class="frame place-self-center border-2 border-gray-400"></div>
    </div>
    <div>
      <div class="flex gap-4 mt-4">
        <img class="w-28 rounded-full" :src="photoUrl" alt="Profile photo">
        <div>
          <p>about me i am a profession</p>
          <p>about me i am a profession</p>
          <p>about me i am a profession</p>
          <p>about me i am a profession</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ray from './Ray.vue';

export default {
  components: {
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

<style>
.frame {
  height: 100px;
  width: 100%;
  border-top: 0px;
}

</style>