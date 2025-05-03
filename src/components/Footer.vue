<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <h4>Informasi</h4>
          <ul>
            <li><router-link to="/" class="footer-link">Beranda</router-link></li>
            <li><router-link to="/produk" class="footer-link">Produk</router-link></li>
            <li><router-link to="/tentang-kami" class="footer-link">Tentang Kami</router-link></li>
            <li><router-link to="/promo" class="footer-link">Promo</router-link></li>
            <li><router-link to="/kontak" class="footer-link">Kontak</router-link></li>
          </ul>
        </div>
  
        <div class="footer-column">
  <h4>Kontak</h4>
  <ul>
    <li><i class="fas fa-map-marker-alt"></i> Cisarua, Bogor</li>
    <li><i class="fas fa-phone-alt"></i> 0856-9540-1702</li>
    <li><i class="fas fa-envelope"></i> info@bengkel.com</li>
  </ul>
</div>


            <div class="footer-column">
              <h2>Lokasi Kami</h2>
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.703035085514!2d106.9337311!3d-6.712163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b50079394413%3A0x75fe9efbe74c2880!2sCibeureum%2C%20Cisarua%2C%20Bogor!5e0!3m2!1sen!2sid!4v1714460000000" 
  width="100%" 
  height="200" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
            </div>
      </div>
    </footer>
    <div class="footer-bawah">
    <p class="footer-copyright">
      &copy; Copyright - 2025 Bengkel Cisarua. Semua Hak Dilindungi.
    </p>
  </div>
  </template>
  
  <script>
  export default {
    name: "FooterPage",
    computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
  };
  </script>
  
  <style scoped>

.social-media-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-media-icons a {
  color: #555;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-media-icons a:hover {
  color: #007f5f;
  transform: scale(1.2);
}
.footer {
  background: #f4f4f4;
  color: #333;
  padding: 40px 20px;
  font-size: 0.9rem;
  margin: 0;
}

.footer-bawah {
  background: #025742;
  color: white;
  text-align: center;
  padding: 20px;
  margin: 0;
}
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-column {
    flex: 1 1 300px;
    min-width: 200px;
  }
  
  .footer-column h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: bold;
    color: #2c3e50;
  }


.router-link-active {
  color: #007f5f; 
  font-weight: bold; 
}
  
  
  .footer-column ul {
    list-style: none;
    font-size: 1rem;
    line-height: 1.6;
    padding: 0;
    margin: 0;
  }
  
  .footer-column ul li {
    margin-bottom: 10px;
  }
  
  .footer-column ul li a {
    text-decoration: none;
    color:rgb(27, 27, 27);
    transition: color 0.3s ease;
  }
  
  
  .footer-column ul li a:hover {
  text-decoration: underline;
}
  
  .subscribe-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .subscribe-form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .subscribe-form button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .subscribe-form button:hover {
    background-color: #555;
  }
  
  .footer-copyright {
    text-align: center;
    margin-top: 20px;
    font-size: 1rem;
    color:rgb(255, 255, 255);
  }
  </style>