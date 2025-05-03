<template>
    <div class="promo-page">
      <Navbar />
        <Whatsapp />
    
      <section class="hero">
        <div class="hero-content">
          <h1 class="moving-text">Promo Terbaik untuk Anda</h1>
          <p>Manfaatkan penawaran spesial kami untuk layanan dan produk unggulan.</p>
        </div>
      </section>
    
      <section class="promo-section">
        <h2 class="section-title">Penawaran Spesial</h2>
        <div class="promo-grid">
          <div class="promo-card">
            <div class="promo-image-container">
              <img src="../assets/produk1.png" alt="Diskon Produk 30%" class="promo-image" />
            </div>
            <div class="promo-details">
              <h3>Diskon Produk 30%</h3>
              <p>Nikmati diskon 30% untuk semua Produk kendaraan.</p>
              <router-link to="/produk" class="btn btn-primary">Lihat Detail</router-link>

            </div>
          </div>
    
          <div class="promo-card">
            <div class="promo-image-container">
              <img src="../assets/bk.jpeg" alt="Diskon Services 20%" class="promo-image" />
            </div>
            <div class="promo-details">
              <h3>Diskon Services 20%</h3>
              <p>Nikmati diskon 20% untuk semua layanan servis dari bengkel kami.</p>
              <router-link to="/produk" class="btn btn-primary">Lihat Detail</router-link>

            </div>
          </div>
    
          <div class="promo-card">
            <div class="promo-image-container">
              <img src="../assets/oli.jpeg" alt="Voucher Oli Gratis" class="promo-image" />
            </div>
            <div class="promo-details">
              <h3>Voucher Oli Gratis</h3>
              <p>Voucher oli gratis untuk servis berkala pertama Anda.</p>
              <router-link to="/produk" class="btn btn-primary">Lihat Detail</router-link>

            </div>
          </div>
        </div>
      </section>
    
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import Whatsapp from "@/components/Whatsapp.vue";
  
  export default {
    name: "PromoPage",
    components: {
      Navbar,
      Footer,
      Whatsapp
    },
    data() {
      return {
        promos: [
          {
            id: 1,
            title: "Diskon Produk 30%",
            description: "Nikmati diskon 30% untuk semua Produk kendaraan.",
            image: "../assets/promo1.jpg",
          },
          {
            id: 2,
            title: "Diskon Services 20%",
            description: "Nikmati diskon 20% untuk semua layanan servis.",
            image: "../assets/promo2.jpg",
          },
          {
            id: 3,
            title: "Voucher Oli Gratis",
            description: "Voucher oli gratis untuk servis berkala pertama Anda.",
            image: "../assets/promo3.jpg",
          },
        ],
      };
    },
    methods: {
      viewPromo(id) {
        alert(`Promo dengan ID ${id} dipilih!`);
      },
    },
  };
  </script>
  
  <style scoped>

  .promo-page {
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  .hero {
    /* background: linear-gradient(to right, #025742, #007f5f); */
    /* color: rgb(0, 0, 0); */
    text-align: center;
    padding: 100px 20px;
    overflow: hidden;
  }
  
  .hero-content {
    position: relative;
  }
  
  .moving-text {
  color: #025742;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif; 
}
  
  
  .hero-content p {
    font-size: 1.2rem;
  font-weight: 400;
  color: #666;
  margin-top: 8px;
  margin-bottom: 16px;
  }
  .hero-content h1 {
    font-size: 2rem;
    margin-top: 10px;
    padding-top: 30px;
  }
  
  .promo-section {
    padding: 50px 20px;
    /* background-color: #f8f9fa; */
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #025742;
    text-align: left;
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .section-title::before {
    content: "--";
    font-size: 1.5rem;
    color: #025742;
    display: inline-block;
  }
  
  .promo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    justify-items: center;
  }
  
  .promo-card {
    background: rgb(241, 240, 240);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .promo-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .promo-image-container {
    height: 200px;
    overflow: hidden;
  }
  
  .promo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .promo-card:hover .promo-image {
    transform: scale(1.1);
  }
  
  .promo-details {
    padding: 20px;
    text-align: left;
  }
  
  .promo-details h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #025742;
  }
  
  .promo-details p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
  }
  
  .btn-primary {
    background: #025742;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .btn-primary:hover {
    background: #007f5f;
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }
  
    .hero-content p {
      font-size: 1rem;
    }
  
    .promo-details h3 {
      font-size: 1.2rem;
    }
  
    .promo-details p {
      font-size: 0.9rem;
    }
  }
  </style>