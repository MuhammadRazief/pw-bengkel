<template>
  <div class="kontak-page">
    <!-- Navbar -->
    <Navbar />
    <Whatsapp />

    <!-- Hero Section -->
    <section class="hero">
      <h1>Hubungi Kami</h1>
      <p>Kami siap membantu Anda dengan layanan terbaik.</p>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-container">
        <!-- Contact Form -->
        <div class="contact-form">
          <h2>Kirim Pesan</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nama</label>
              <input type="text" id="name" v-model="form.name" placeholder="Masukkan nama Anda" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="Masukkan email Anda" required />
            </div>
            <div class="form-group">
              <label for="message">Pesan</label>
              <textarea id="message" v-model="form.message" placeholder="Tulis pesan Anda" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Kirim</button>
          </form>
        </div>

        <!-- Contact Info -->
     <!-- Contact Info -->
    <div class="contact-info">
      <h2>Informasi Kontak</h2>
      <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <p><strong>Alamat:</strong> Jl. Raya Cisarua No.123, Bogor</p>
      </div>
      <div class="info-item">
        <i class="fas fa-envelope"></i>
        <p><strong>Email:</strong> info@bengkelkami.com</p>
      </div>
      <div class="info-item">
        <i class="fas fa-phone-alt"></i>
        <p><strong>Telepon:</strong> +62 812-3456-7890</p>
      </div>
      <div class="info-item">
        <i class="fas fa-clock"></i>
        <p><strong>Jam Operasional:</strong> Senin - Sabtu, 08:00 - 17:00</p>
      </div>
    </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <h2>Lokasi Kami</h2>
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.703035085514!2d106.9337311!3d-6.712163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b50079394413%3A0x75fe9efbe74c2880!2sCibeureum%2C%20Cisarua%2C%20Bogor!5e0!3m2!1sen!2sid!4v1714460000000" 
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Whatsapp from "@/components/Whatsapp.vue";


export default {
  name: "KontakPage",
  components: {
    Navbar,
    Footer,
    Whatsapp
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Pesan dari ${this.form.name} berhasil dikirim!`);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.kontak-page {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  padding-top: 40px;
}

/* Hero Section */
.hero {
  text-align: center;
  background: #025742;
  color: white;
  padding: 50px 20px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  padding-top: 20px;
}

.hero p {
  font-size: 1.2rem;
}

.contact-section {
  padding: 60px 20px;
  background-color: #f4f4f4;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  /* padding: 0 60px; */
}

.contact-form,
.contact-info {
  background-color: #ffffff;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.contact-form h2,
.contact-info h2 {
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #025742;
  border-bottom: 2px solid #025742;
  padding-bottom: 10px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
} 

.info-item i {
  font-size: 1.5rem;
  color: #025742;
}

.info-item p {
  font-size: 1rem;
  color: #333;
} 

.info-item strong {
  color: #025742;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
  max-width: 460px;
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-primary {
  background-color: #025742;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #038f66;
}

.contact-info p {
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.5;
}

.contact-info strong {
  display: inline-block;
  width: 120px;
  color: #025742;
}


.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  resize: none;
  height: 100px;
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

/* Map Section */
.map-section {
  padding: 50px 20px;
  text-align: center;
}

.map-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>