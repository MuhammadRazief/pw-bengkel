<template>
    <div class="tentang-kami-page">
      <!-- Navbar -->
      <Navbar />
  
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-container">
          <div class="hero-image">
            <img src="../assets/Bengkel.png" alt="Rental Car Banner" />
          </div>
          <div class="hero-text">
            <h1 class="hero-title">TENTANG KAMI</h1>
            <p class="hero-subtitle">Bengkel Kami Cisarua</p>
            <p class="hero-description">
              Bengkel Kami Cisarua adalah bengkel yang berdiri sejak 2021. Selain melayani perawatan kendaraan, kami juga menyediakan berbagai produk dan perlengkapan otomotif berkualitas untuk memenuhi kebutuhan kendaraan Anda, dengan pelayanan yang profesional dan terpercaya.
            </p>
          </div>
        </div>
      </section>
  
      <!-- New Section: Prosedur Servis -->
  <!-- New Section: Visi dan Misi -->
<section class="visi-misi">
  <h2 class="visi-misi-title">VISI & MISI</h2>
  <div class="visi-misi-container">
    <div class="visi">
      <h3>Visi</h3>
      <p>Menjadi bengkel terpercaya yang memberikan pelayanan dan produk otomotif terbaik di Indonesia.</p>
    </div>
    <div class="misi">
      <h3>Misi</h3>
      <ul>
        <li>Menyediakan pelayanan servis kendaraan yang profesional dan ramah.</li>
        <li>Menawarkan produk otomotif berkualitas tinggi dan terpercaya.</li>
        <li>Membangun hubungan jangka panjang dengan pelanggan melalui kepuasan layanan.</li>
      </ul>
    </div>
  </div>
</section>

  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    name: "TentangKamiPage",
    components: {
      Navbar,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  /* General Styles */
  .tentang-kami-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Hero Section */
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 50px;
    background: #025742;
    color: #333;
  }
  
  .hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .visi-misi {
  background-color: #ffffff;
  color: #333;
  padding: 60px 20px;
}

.visi-misi-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
  color: #025742;
}

@media (max-width: 768px) {

  .hero {
    padding: 60px 20px; /* Samakan dengan .visi-misi */
  }
  .hero-container {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .hero-text {
    margin: 0;
    padding: 0 10px;
    max-width: 100%;
  }

  .hero-image img {
    max-width: 90%;
    margin-top: 20px;
    margin-left: 30px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }
}

.visi-misi-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.visi, .misi {
  background-color: #f4f4f4;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.visi h3,
.misi h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #025742;
}

.misi ul {
  list-style-type: disc;
  padding-left: 20px;
}

.misi li {
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
}

  
  .hero-image img {
    max-width: 50%;
    border-radius: 8px;
    margin-top: 80px;
    position: relative;
    z-index: 1;
  }
  
  .hero-text {
    max-width: 500px;
    margin-left: 20px;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
  }
  
  .hero-description {
    font-size: 1rem;
    line-height: 1.8;
    color: white;
  }

  </style>