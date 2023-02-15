<template>
  <div class="resume">
    <Sidebar :name="name" :photoUrl="photoUrl" :email="email" :phone="phone" :location="location" />
    <Main :chartData="chartData" :skills="skills" />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Main from './Main.vue';

export default {
  name: 'Resume',
  components: {
    Sidebar,
    Main
  },
  data() {
    return {
      name: 'John Doe',
      photoUrl: 'https://via.placeholder.com/150',
      email: 'johndoe@gmail.com',
      phone: '+1 123-456-7890',
      location: 'New York, NY',
      chartData: {
        labels: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
        datasets: [
          {
            label: 'Skill level',
            backgroundColor: '#41b883',
            data: [4, 3, 4, 3, 4]
          }
        ]
      },
      skills: [
        {
          name: 'Java',
          level: 'Advanced',
          description: 'Experience building RESTful APIs with Spring Boot'
        },
        {
          name: 'JavaScript',
          level: 'Intermediate',
          description: 'Familiarity with React and Vue.js'
        },
        {
          name: 'HTML',
          level: 'Advanced',
          description: 'Experience building responsive websites'
        },
        {
          name: 'CSS',
          level: 'Intermediate',
          description: 'Familiarity with Sass and Bootstrap'
        },
        {
          name: 'SQL',
          level: 'Advanced',
          description: 'Experience with MySQL and PostgreSQL'
        }
      ]
    }
  }
};
</script>
