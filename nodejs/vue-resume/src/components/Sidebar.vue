<template>
  <div class="w-full leading-8">
    <h2>{{ name }}</h2>
    <p>{{ summary }}</p>
    <ul>
      <li><strong>Email:</strong> {{ email }}</li>
      <li><strong>Phone:</strong> {{ phone }}</li>
    </ul>
    <h2>Education</h2>
    <div>
      <ul>
        <li>2010.9-2014.6</li>
        <li>university</li>
        <li>本科</li>
      </ul>
      <ul>
        <li>2015.9-2018.1</li>
        <li>university</li>
        <li>硕士</li>
      </ul>
    </div>
    <h2>SKILLS</h2>
    <div>
      <SkillBar name="Java" percent="80%"/>
      <SkillBar name="Spring" percent="80%"/>
      <SkillBar name="MySQL" percent="70%"/>
      <SkillBar name="vue" percent="60%" />
    </div>
  </div>
</template>

<script>
import SkillBar from './SkillBar.vue';

export default {

  components: {
    SkillBar
  },

  props: {
    name: String,
    photoUrl: String,
    summary: String,
    email: String,
    phone: String,
    location: String
  }

}
</script>
