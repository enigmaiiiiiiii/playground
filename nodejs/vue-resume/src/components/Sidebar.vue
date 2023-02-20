<template>
  <div class="w-full leading-8">
    <div> C O N T A C T </div>
    <div class="flex items-center gap-2">
      <div class="flex justify-center w-14">
        <font-awesome-icon class="fa-3x" icon="fa-solid fa-mobile-screen" />
      </div>
      <div>
        <p><strong>PHONE</strong></p>
        <p>{{ phone }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <font-awesome-icon class="fa-3x" icon="fa-regular fa-envelope" />
      <div>
        <p><strong>EMAIL</strong></p>
        <p>{{ email }}</p>
      </div>
    </div>
    <div class="h-1 w-12 bg-gray-500 my-3"></div>
    <div>E D U C A T I O N</div>
    <div class="flex flex-col gap-4">
      <div>
        <div class="flex justify-between">
          <p>2010-2014</p>
          <p>本科</p>
        </div>
        <p class="leading-3"><strong>河北工业大学</strong></p>
      </div>
      <div>
        <div class="flex justify-between">
          <p>2015-2018</p>
          <p>硕士</p>
        </div>
        <p class="leading-3"><strong>河北工业大学</strong></p>
      </div>
    </div>
    <div class="overflow-visible">
      <div class="h-1 w-12 bg-gray-500 my-5"></div>
    </div>
    <h2>SKILLS</h2>
    <div class="flex flex-col gap-1">
      <SkillBar name="Java" percent="80%" />
      <SkillBar name="Spring" percent="80%" />
      <SkillBar name="MySQL" percent="70%" />
      <SkillBar name="MySQL" percent="70%" />
      <SkillBar name="vue" percent="60%" />
    </div>
  </div>
</template>

<script>
import SkillBar from './SkillBar.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {

  components: {
    SkillBar
  },

  props: {
    photoUrl: String,
    email: String,
    phone: String,
    location: String
  }

}
</script>
