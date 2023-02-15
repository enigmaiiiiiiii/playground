<template>
  <div class="sidebar">
    <img :src="photoUrl" alt="Profile photo">
    <h2>{{ name }}</h2>
    <p>{{ summary }}</p>
    <ul>
      <li><strong>Email:</strong> {{ email }}</li>
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Location:</strong> {{ location }}</li>
    </ul>
  </div>
</template>

<script>
export default {
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

