<template>
  <div class="h-16 w-full place-self-center border-b-2 border-x-2 bo border-gray-400 mt-14">
    <div class="flex relative items-center gap-4 bottom-10t">
      <div class="flex-auto">
        <Ray />
      </div>
      <div>
        <div class="flex flex-col font-bold text-5xl bg-white mx-6 place-content-center justify-between mt-4">
          <p>hello world</p>
          <div class="w-full bg-gray-500 h-0.5"></div>
          <div class="flex justify-center">
            <p class="text-xl">development</p>
          </div>
        </div>
      </div>
      <div class="flex-auto h-full">
        <Ray reverse />
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
};
</script>
