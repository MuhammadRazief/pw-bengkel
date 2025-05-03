<template>
  <div class="page-container">
    <Navbar />
    <Whatsapp />

    <div class="cart-icon" @click="toggleCart">
      <i class="fas fa-shopping-cart"></i>
      <span class="cart-count" v-if="cart.length > 0">{{ cart.length }}</span>
    </div>

    <section class="produk-section">
  <h2 class="produk-title">PRODUK KAMI</h2>
  <div class="produk-container">
    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/olimobil1.png" alt="Oli Mobil" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Oli Mobil', price: '150.000', image: '../assets/oli-mobil.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Oli Mobil</h3>
      <p class="produk-description">Rp 150.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/ban.jpg" alt="Ban Mobil" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Ban Mobil', price: '800.000', image: '../assets/ban-mobil.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Ban Mobil</h3>
      <p class="produk-description">Rp 800.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/aki.jpg" alt="Aki Mobil" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Aki Mobil', price: '1.200.000', image: '../assets/aki-mobil.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Aki Mobil</h3>
      <p class="produk-description">Rp 1.250.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/filter.jpeg" alt="Filter Udara" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Filter Udara', price: '250.000', image: '../assets/filter-udara.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Filter Udara</h3>
      <p class="produk-description">Rp 250.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/busi.jpeg" alt="Busi" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Busi', price: '75.000', image: '../assets/busi.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Busi</h3>
      <p class="produk-description">Rp 75.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/nyak.jpg" alt="Minyak Rem" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Minyak Rem', price: '60.000', image: '../assets/minyak-rem.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Minyak Rem</h3>
      <p class="produk-description">Rp 60.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/wiper.jpeg" alt="Wiper" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Wiper', price: '100.000', image: '../assets/wiper.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Wiper</h3>
      <p class="produk-description">Rp 100.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/saringan.jpg" alt="Saringan Bensin" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Saringan Bensin', price: '90.000', image: '../assets/saringan-bensin.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Saringan Bensin</h3>
      <p class="produk-description">Rp 100.000</p>
    </div>

    <div class="produk-item">
      <div class="produk-image-wrapper">
        <img src="../assets/kampas.jpg" alt="Kampas Rem" class="produk-image" />
        <button class="btn-add" @click="addToCart({ name: 'Kampas Rem', price: '300.000', image: '../assets/kampas-rem.jpg' })">+</button>
      </div>
      <h3 class="produk-name">Kampas Rem</h3>
      <p class="produk-description">Rp 300.000</p>
    </div>


  </div>
</section>

    <section class="checkout-section" v-if="showCart">
      <h2 class="checkout-title">Keranjang Belanja</h2>
      <div class="checkout-container">
        <div class="checkout-item" v-for="(item, index) in cart" :key="index">
          <div class="checkout-details">
            <h3 class="checkout-name">{{ item.name }}</h3>
            <p class="checkout-price">Rp {{ item.price }}</p>
            <button class="btn-remove" @click="removeFromCart(index)">Hapus</button>
          </div>
        </div>
      </div>
      <div class="checkout-summary">
        <h3>Total: Rp {{ totalPrice }}</h3>
        <button class="btn-checkout" @click="checkout">Checkout via WhatsApp</button>
      </div>
    </section>

    <section class="testimoni-section">
    <h2 class="section-title">Apa Kata Pelanggan?</h2>
    <div class="testimoni-container">
      <div class="testimoni-item">
        <p>"Pelayanan cepat dan ramah. Produk berkualitas!"</p>
        <span>- Budi, Bogor</span>
      </div>
      <div class="testimoni-item">
        <p>"Saya selalu beli oli dan ban di sini, recomended banget."</p>
        <span>- Rina, Cibubur</span>
      </div>
    </div>
  </section>


    <div v-if="showNotification" class="notification">
      {{ notificationMessage }}
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Whatsapp from "@/components/Whatsapp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ProdukPage",
  components: {
    Navbar,
    Whatsapp,
    Footer,
  },
  data() {
    return {
      cart: [],
      showCart: false,
      showNotification: false,
      notificationMessage: "",
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => {
        return total + parseInt(item.price.replace(/\./g, ""));
      }, 0).toLocaleString("id-ID");
    },
  },
  methods: {
    addToCart(produk) {
      this.cart.push(produk);

      this.notificationMessage = `Produk ${produk.name} berhasil ditambahkan ke keranjang!`;
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    checkout() {
      if (this.cart.length === 0) {
        alert("Keranjang belanja kosong!");
        return;
      }

      let message = "Halo, saya ingin memesan produk berikut:\n\n";
      this.cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - Rp ${item.price}\n`;
      });
      message += `\nTotal: Rp ${this.totalPrice}`;

      const encodedMessage = encodeURIComponent(message);

      const whatsappNumber = "6285695401702";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

      this.cart = [];
      this.showCart = false;
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>

.btn-remove {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.btn-remove:hover {
  background-color: #ff5252;
  transform: scale(1.05);
}
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: bold;
  z-index: 1000;
  animation: fadeInOut 3s ease;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
.cart-icon {
  position: fixed;
  top: 120px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.cart-icon i {
  font-size: 1.5rem;
  color: #2c3e50;
}
.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff6b6b;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkout-section {
  padding: 50px 20px;
  background-color: #ffffff;
  position: fixed;
  top: 80px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 999;
}

.checkout-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #2c3e50;
}

.checkout-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.checkout-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.checkout-summary {
  margin-top: 20px;
  text-align: center;
}


.btn-checkout {
  background-color: #25d366;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-checkout:hover {
  background-color: #1ebe57;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.produk-section {
  padding: 100px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.produk-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
  color: #2c3e50;
}

.produk-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.produk-item {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produk-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.produk-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.produk-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.produk-image-wrapper:hover .produk-image {
  transform: scale(1.1);
}

.btn-add {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-add:hover {
  background-color: #ff5252;
  transform: scale(1.1);
}

.produk-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 15px 10px 5px 10px;
  color: #2c3e50;
  text-align: left;
}

.produk-description {
  font-size: 1rem;
  color: #7f8c8d;
  margin: 0 10px 15px 10px;
  text-align: left;
}

@media (max-width: 768px) {
  .produk-title {
    font-size: 2rem;
  }

  .produk-container {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .produk-item {
    max-width: 100%;
  }
}

.testimoni-section {
  background-color: #f8f9fa;
  padding: 40px 20px;
  text-align: center;
}

.section-title {
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
}

.testimoni-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.testimoni-item {
  background-color: #ffffff;
  border-left: 5px solid #007bff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.testimoni-item p {
  font-style: italic;
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

.testimoni-item span {
  display: block;
  font-weight: bold;
  color: #333;
}

</style>