<template>
    <a
      href="https://wa.me/6285695401702" 
      target="_blank" 
      class="whatsapp-button"
      aria-label="Chat via WhatsApp"
    >
      <i class="fab fa-whatsapp"></i>
    </a>
  </template>
  
  <script>
  export default {
    name: "WhatsAppButton",
  };
  </script>
  
  <style scoped>
  .whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 2rem;
    z-index: 1000;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .whatsapp-button:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  </style>