<template>
  <div class="flex justify-center">
    <div>
      <div>
        <Header photoUrl="/profile.jpg" />
      </div>
      <div class="my-4">
        <HLine />
      </div>
      <div class="grid grid-cols-10">
        <div class="h-full col-start-1 col-span-3">
          <Sidebar
            phone="+1 (123) 456-7890"
            email="example@example.com"
          />
        </div>
        <div class="h-full col-span-1">
          <VLine />
        </div>
        <div class="h-full col-span-6">
          <Main />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Main from './Main.vue';
import Header from './Header.vue';
import SplitLine from './SplitLine.vue';
import Demo from './Demo.vue';
import Ray from './Ray.vue';
import VLine from './VLine.vue';
import HLine from './HLine.vue';

export default {
  name: 'Resume',
  components: {
    Sidebar,
    Main,
    Header,
    SplitLine,
    Demo,
    Ray,
    VLine,
    HLine,
  },
};
</script>
