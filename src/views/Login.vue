<!-- filepath: c:\xampp\htdocs\Bengkel\frontend\src\views\Login.vue -->
<template>
    <div class="login-page">
      <div class="login-container">
        <h1 class="login-title">Login</h1>
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Masukkan password Anda"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <p class="register-link">
          Belum punya akun? <router-link to="/register">Daftar di sini</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post("http://localhost:8000/api/login", {
            email: this.email,
            password: this.password,
          });
          // Simpan token atau data pengguna ke localStorage atau Vuex
          localStorage.setItem("token", response.data.token);
          alert("Login berhasil!");
          this.$router.push("/"); // Arahkan ke halaman dashboard
        } catch (error) {
          console.error(error);
          alert("Login gagal. Periksa email dan password Anda.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1026%26quot%3b)' fill='none'%3e%3ccircle r='46.666666666666664' cx='242.66' cy='462.29' stroke='%23037b0b' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3crect width='124.6' height='124.6' clip-path='url(%26quot%3b%23SvgjsClipPath1027%26quot%3b)' x='66.78' y='238.12' fill='url(%26quot%3b%23SvgjsPattern1028%26quot%3b)' transform='rotate(257.57%2c 129.08%2c 300.42)'%3e%3c/rect%3e%3crect width='157.6' height='157.6' clip-path='url(%26quot%3b%23SvgjsClipPath1029%26quot%3b)' x='1100.19' y='-26.48' fill='url(%26quot%3b%23SvgjsPattern1030%26quot%3b)' transform='rotate(125.08%2c 1178.99%2c 52.32)'%3e%3c/rect%3e%3crect width='84' height='84' clip-path='url(%26quot%3b%23SvgjsClipPath1031%26quot%3b)' x='1269.2' y='77.26' fill='url(%26quot%3b%23SvgjsPattern1032%26quot%3b)' transform='rotate(73.29%2c 1311.2%2c 119.26)'%3e%3c/rect%3e%3cpath d='M1008.44 393.49a5.6 5.6 0 1 0-10.57 3.71 5.6 5.6 0 1 0 10.57-3.71zM993.34 398.79a5.6 5.6 0 1 0-10.57 3.7 5.6 5.6 0 1 0 10.57-3.7zM978.24 404.08a5.6 5.6 0 1 0-10.57 3.71 5.6 5.6 0 1 0 10.57-3.71zM963.14 409.38a5.6 5.6 0 1 0-10.57 3.71 5.6 5.6 0 1 0 10.57-3.71z' fill='%23d3b714'%3e%3c/path%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath1033%26quot%3b)' x='580.42' y='151.17' fill='url(%26quot%3b%23SvgjsPattern1034%26quot%3b)' transform='rotate(111.7%2c 610.42%2c 181.17)'%3e%3c/rect%3e%3crect width='84' height='84' clip-path='url(%26quot%3b%23SvgjsClipPath1035%26quot%3b)' x='433.48' y='-7.2' fill='url(%26quot%3b%23SvgjsPattern1036%26quot%3b)' transform='rotate(228.42%2c 475.48%2c 34.8)'%3e%3c/rect%3e%3cpath d='M1229.85 8.72a5.6 5.6 0 1 0 9.42-6.06 5.6 5.6 0 1 0-9.42 6.06zM1243.31 0.06a5.6 5.6 0 1 0 9.42-6.06 5.6 5.6 0 1 0-9.42 6.06zM1256.77-8.6a5.6 5.6 0 1 0 9.42-6.05 5.6 5.6 0 1 0-9.42 6.05zM1270.22-17.25a5.6 5.6 0 1 0 9.42-6.06 5.6 5.6 0 1 0-9.42 6.06zM1211.6 39.48a5.6 5.6 0 1 0 9.42-6.06 5.6 5.6 0 1 0-9.42 6.06zM1225.05 30.83a5.6 5.6 0 1 0 9.42-6.06 5.6 5.6 0 1 0-9.42 6.06zM1238.51 22.17a5.6 5.6 0 1 0 9.42-6.06 5.6 5.6 0 1 0-9.42 6.06zM1251.97 13.52a5.6 5.6 0 1 0 9.42-6.06 5.6 5.6 0 1 0-9.42 6.06z' stroke='%23037b0b' stroke-width='1'%3e%3c/path%3e%3cpath d='M67.56 208.51999999999998 L165.55 246.87L180.11428031693055 164.13571968306945z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M692.28 451.27L679.84 454.29 674.16 442.82 661.72 445.84 656.04 434.36 643.59 437.38 637.91 425.9M695.67 444.02L683.22 447.04 677.54 435.57 665.1 438.59 659.42 427.11 646.97 430.13 641.29 418.65M699.05 436.77L686.6 439.79 680.92 428.32 668.48 431.34 662.8 419.86 650.36 422.88 644.68 411.4' stroke='%23e73635' stroke-width='2.06' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3crect width='110.88' height='110.88' clip-path='url(%26quot%3b%23SvgjsClipPath1037%26quot%3b)' x='230.06' y='308.35' fill='url(%26quot%3b%23SvgjsPattern1038%26quot%3b)' transform='rotate(321.26%2c 285.5%2c 363.79)'%3e%3c/rect%3e%3cpath d='M424.8 487.14000000000004 L507.57000000000005 462.76000000000005L515.8082810401381 524.5732810401381z' fill='%23037b0b'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1026'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='12.46' height='12.46' patternUnits='userSpaceOnUse' id='SvgjsPattern1028'%3e%3cpath d='M6.23 1L6.23 11.46M1 6.23L11.46 6.23' stroke='%23e73635' fill='none' stroke-width='3.77'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1027'%3e%3ccircle r='31.15' cx='129.08' cy='300.42'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='157.6' height='7.88' patternUnits='userSpaceOnUse' id='SvgjsPattern1030'%3e%3crect width='157.6' height='3.94' x='0' y='0' fill='%23d3b714'%3e%3c/rect%3e%3crect width='157.6' height='3.94' x='0' y='3.94' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1029'%3e%3ccircle r='39.4' cx='1178.99' cy='52.32'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1032'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='%23d3b714' fill='none' stroke-width='1.15'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1031'%3e%3ccircle r='21' cx='1311.2' cy='119.26'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='60' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1034'%3e%3crect width='60' height='3' x='0' y='0' fill='%23037b0b'%3e%3c/rect%3e%3crect width='60' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1033'%3e%3ccircle r='15' cx='610.42' cy='181.17'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='84' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1036'%3e%3crect width='84' height='3' x='0' y='0' fill='%23d3b714'%3e%3c/rect%3crect width='84' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1035'%3e%3ccircle r='21' cx='475.48' cy='34.8'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6.16' height='6.16' patternUnits='userSpaceOnUse' id='SvgjsPattern1038'%3e%3cpath d='M0 6.16L3.08 0L6.16 6.16' stroke='%23037b0b' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1037'%3e%3ccircle r='27.72' cx='285.5' cy='363.79'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    color: white;
  }
  
  .login-container {
    background: white;
    color: #333;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .login-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .btn-primary {
    background-color: #025742;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #007f5f;
  }
  
  .register-link {
    margin-top: 15px;
    font-size: 0.9rem;
  }
  
  .register-link a {
    color: #025742;
    text-decoration: none;
    font-weight: bold;
  }
  
  .register-link a:hover {
    text-decoration: underline;
  }
  </style>