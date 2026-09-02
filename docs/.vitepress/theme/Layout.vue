<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-before>
      <section class="home-intro">
        <h2>Welcome to the Farming And Friends Wiki</h2>

        <p>
          Welcome to the <strong>Farming And Friends Wiki</strong>, the unofficial
          community wiki dedicated to Farming And Friends.
        </p>

        <p>
          Find information about shops, landmarks, events, companies, locations,
          gameplay mechanics and more.
        </p>
      </section>
    </template>
  </Layout>
</template>