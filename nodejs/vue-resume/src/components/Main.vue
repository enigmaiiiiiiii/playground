<template>
  <div>
    <div class="my-8">
      <h2 class="text-2xl font-bold">Work Experience</h2>
      <div v-for="job in jobs">
        <h3>{{ job.position }}</h3>
        <p>{{ job.company }} - {{ job.dates }}</p>
        <ul>
          <li v-for="task in job.tasks">{{ task }}</li>
        </ul>
      </div>
    </div>
    <div class="certifications">
      <h2>Certifications</h2>
      <ul>
        <li v-for="cert in certifications">{{ cert }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          company: 'ABC Company',
          position: 'Frontend Developer',
          dates: '2019-present',
          tasks: [
            'Developed and maintained several company websites using HTML, CSS, and JavaScript.',
            'Collaborated with designers to ensure consistent user experience and implement responsive design.',
            'Optimized website performance and resolved cross-browser compatibility issues.'
          ]
        },
        {
          company: 'XYZ Agency',
          position: 'UI/UX Designer',
          dates: '2016-2019',
          tasks: [
            'Designed and prototyped user interfaces for mobile and web applications.',
            'Created user personas and conducted user testing to inform design decisions.',
            'Collaborated with developers to ensure efficient implementation of designs.'
          ]
        }
      ],
      degrees: [
        {
          title: 'Bachelor of Science in Computer Science',
          institution: 'University of ABC',
          graduationDate: '2016',
          description: 'Focused on software development and algorithms.'
        },
        {
          title: 'Master of Fine Arts in Graphic Design',
          institution: 'XYZ College',
          graduationDate: '2013',
          description: 'Focused on visual communication and design theory.'
        },
      ],
      certifications: [
        'Responsive Web Design',
        'JavaScript Algorithms and Data Structures',
        'Front End Libraries'
      ]
    }
  }
}
</script>