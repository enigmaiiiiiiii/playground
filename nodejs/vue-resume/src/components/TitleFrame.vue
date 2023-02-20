<template>
  <div class="flex flex-col gap-1 mt-2 border-gray-400">
    <div class="flex">
      <div class="flex w-full justify-center">
        <div class="flex flex-col h-full flex-auto mt-6">
          <Ray />
        </div>
        <div class="flex flex-col text-5xl justify-center mx-6 gap-1">
          <p>
            <slot></slot>
          </p>
          <div class="h-0.5 w-full bg-gray-500"></div>
          <div class="flex justify-center">
            <p class="text-xl">full stack developer</p>
          </div>
        </div>
        <div class="flex flex-col h-full flex-auto mt-6">
          <Ray reverse />
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 bg-gray-400"></div>
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