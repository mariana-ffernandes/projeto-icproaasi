<template>
    <button @click="handleClick" class="handling-button">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      videoUrl: String,
      text: String
    },
    methods: {
      handleClick() {
        this.$emit('navigate', {
          title: this.title,
          videoUrl: this.videoUrl,
          text: this.text
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .handling-button {
    background-color: var(--color-container-button);
    border: none;
    color: var(--color-black);
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 10px;
    width: 25rem;
    height: 13rem;
    cursor: pointer;
    align-items: center;
  }
  </style>
  