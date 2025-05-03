<template>
  <div class="page-container">
    <Navbar />
    <Whatsapp />
    <section class="hero-section">
  <div class="hero-container">
    <div class="hero-text">
      <h1>BENGKEL KAMI,</h1>
    <h2 class="sub-heading">BENGKEL Cisarua</h2>


      <p>Kami menjual berbagai produk yang berkualitas dan siap melayani servis kendaraan</p>
      <a href="https://wa.me/085695401702" class="btn btn-primary">Hubungi Kami</a>

      <div class="google-rating">
        <img src="../assets/google.png" alt="Google Rating" width="30" />
        <span>Google Rating</span>
        <span class="stars">4.8/5 ★★★★☆ +34 Reviews</span>
      </div>
    </div>
    <div class="hero-image">
      <img src="../assets/Bengkel.png" alt="Hero Image" />
    </div>
  </div>
</section>


    <section class="card-section scale-up">
      <div class="card-text">
      <h1>Our Services</h1>
      <h2 class="card-heading">Layanan Terbaik untuk Kendaraan Anda</h2>
    </div>
  <div class="card-container">

    <div class="card">
      <img src="../assets/obeng.png" alt="Servis Berkala" />
      <h3>Servis Berkala</h3>
      <p>Perawatan rutin untuk menjaga performa kendaraan Anda.</p>
    </div>
    <div class="card">
      <img src="../assets/obeng.png" alt="Perbaikan Mesin" />
      <h3>Perbaikan Mesin</h3>
      <p>Perbaikan mesin dengan teknisi berpengalaman.</p>
    </div>
    <div class="card">
      <img src="../assets/obeng.png" alt="Penggantian Suku Cadang" />
      <h3>Penggantian Suku Cadang</h3>
      <p>Suku cadang asli untuk kendaraan Anda.</p>
    </div>
  </div>

  <div class="stats-container">
    <div class="stat">
      <h3>50+</h3>
      <p>Pelanggan Puas</p>
    </div>
    <div class="stat">
      <h3>10+</h3>
      <p>Servis Selesai</p>
    </div>
    <div class="stat">
      <h3>1+</h3>
      <p>Tahun Pengalaman</p>
    </div>
  </div>
</section>
<section class="new-section scale-up">
  <div class="new-section-content">
    <div class="single-large-card">
      <div class="large-card-text">
        <h3>Bengkel Kami Terpercaya Cisarua.</h3>
        <p>Produk lengkap dengan kualitas terbaik dan harga yang kompetitif. Dapatkan produk untuk mobil/motor Anda sekarang dan nikmati layanan profesional dari kami!</p>
        <a href="/produk" class="btn btn-whatsapp">Lihat Produk</a>
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
  name: "HomePage",
  components: {
    Navbar,
    Footer,
    Whatsapp,
  },
};
</script>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 70px;
  background: #025742;
  color: #ffffff;
}

.hero-container {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
}

.hero-text {
  max-width: 650px;
  text-align: left;
  margin-right: 20px;
}

.sub-heading {
  font-size: 2.2rem;
  margin-top: 0px;
  color: #ffc107;
  font-weight: 600;
}

.hero-text h1 {
  font-size: 2.5rem;
  margin-bottom: 0;
}

.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-left: 0;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  max-height: 300px;
}


.google-rating {
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #ffffff;
}

.google-rating img {
  margin-right: 10px;
  width: 70px;
  height: auto;
}

.google-rating .stars {
  margin-left: 10px;
  color: #ffc107;
}


.btn-primary {
  display: inline-block;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  margin-bottom: 12px;
}

.text-section .btn-warning {
  background-color: #025742;
}

.text-section .btn-primary:hover {
  background-color:rgb(255, 17, 0);
}

.text-section .btn-warning:hover {
  background-color: #007f5f;
}
.image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  max-width: 500px;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}


@media (max-width: 768px) {
  .hero-section {
    padding: 120px 20px 30px;
  }

  .image-container {
    width: 200px;
    height: 200px;
  }

  .main-image {
    width: 80px;
    height: 80px;
  }


  .features-container {
    flex-direction: column;
    gap: 20px;
  }

  .feature-item {
    max-width: 100%;
  }
}

.card-section {
  background-color: #ffffff;
  padding: 60px 40px;
  color: #333;
}

.card-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px;
}

.card-text {
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
}
.card-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #025742;
  margin-bottom: 10px;
}
.card-heading {
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
  margin-top: 8px;
  margin-bottom: 16px;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 12px;
  text-align: center;
  width: 260px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
}

.card img {
  width: 60px;
  margin-bottom: 12px;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.card p {
  font-size: 0.95rem;
  color: #666;
}

.card-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.card-text .card {
  display: inline-block;
}


.stats-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2rem;
  color: #025742;
  margin-bottom: 8px;
}

.stat p {
  font-size: 1rem;
  color: #555;
}


.new-section {
  background-color: #025742;
  padding: 60px 40px;
  color: white;
}

.new-section-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.single-large-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #fff;
  color: #333;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 1200px;
  width: 100%;
}

.large-card-text {
  flex: 1;
  padding-right: 24px;
}

.large-card-text h3 {
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: #025742;
}

.large-card-text p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.btn-whatsapp {
  display: inline-block;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

.large-card-image {
  width: 280px;
  height: auto;
  flex-shrink: 0;
}


@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .card-text .card {
    width: 90%;
  }

  .stats-container {
    flex-direction: column;
    gap: 20px;
  }

  .single-large-card {
    flex-direction: column;
    text-align: center;
  }

  .large-card-text {
    padding-right: 0;
    margin-bottom: 24px;
  }

  .large-card-image {
    width: 80%;
    margin: 0 auto;
  }
}


.fade-in {
  animation: fadeIn 1s ease-out;
}


.scale-up {
  animation: scaleUp 1s ease-out;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}




@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.btn-whatsapp {
  display: inline-block;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-whatsapp:hover {
  background-color: #1ebe57;
}

.new-section {
  background-color: #025742;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.new-section-content {
  max-width: 800px;
  margin: 0 auto;
}

.new-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.new-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.new-section ul {
  list-style-type: none;
}

</style>