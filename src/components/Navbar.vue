<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

    <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
      <div class="container">

        <div class="logo">
        <img class="img" src="../assets/bengkel1.png">
        </div>
  
        <div class="hamburger" :class="{ 'is-active': menuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        <div :class="['navbar-menu fade-in', { 'is-open': menuOpen }]">

         <button v-if="menuOpen && isMobile" class="close-menu" @click="closeMenu">✖</button>
  
  
         <ul class="navbar-links">
          <li
            v-for="(link, index) in links"
            :key="index"
            :style="{ animationDelay: `${index * 0.2 + 0.5}s` }"
            class="nav-item fade-in"
          >
            <router-link :to="link.to" @click="closeMenu">{{ link.label }}</router-link>
          </li>
        </ul>
  
          <!-- <div class="navbar-buttons fade-in" :style="{ animationDelay: `${links.length * 0.2 + 0.5}s` }">
          <router-link to="/login" class="btn btn-outline" @click="closeMenu">Login</router-link>
          <router-link to="/daftar" class="btn btn-primary" @click="closeMenu">Daftar</router-link>
        </div> -->
        </div>
      </div>
    </nav>
  </template>
  
  <script>

  import"../assets/navbar.css"

  export default {
    name: "NavbarPage",
    data() {
      return {
        menuOpen: false,
        isScrolled: false,
        isMobile: window.innerWidth <= 768,
        links: [
        { label: "Beranda", to: "/beranda" },
        { label: "Produk", to: "/produk" },
        { label: "Tentang Kami", to: "/tentang-kami" },
        { label: "Promo", to: "/promo" },
        { label: "Kontak", to: "/kontak" },
      ],
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      closeMenu() {
        this.menuOpen = false;
      },
      checkIsMobile() {
        this.isMobile = window.innerWidth <= 768;
      },
      handleScroll() {
        // Periksa apakah posisi scroll lebih dari 50px
        this.isScrolled = window.scrollY > 50;
      },
    },
    mounted() {
      window.addEventListener("resize", this.checkIsMobile);
      window.addEventListener("scroll", this.handleScroll); // Tambahkan event listener untuk scroll
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.checkIsMobile);
      window.removeEventListener("scroll", this.handleScroll); // Hapus event listener saat komponen dihancurkan
    },
  }
  </script>