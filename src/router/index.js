import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue";
import Kontak from "../views/Kontak.vue";
import Tentang from "../views/TentangKami.vue";
import Promo from "../views/Promo.vue";

const routes = [
    { path: "/login", component: Login },
    { path: "/beranda", component: Home },
    { path: "/produk", component: Produk },
    { path: "/kontak", component: Kontak },
    { path: "/tentang-kami", component: Tentang },
    { path: "/promo", component: Promo },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition; // Jika ada posisi yang disimpan (misalnya, tombol "kembali"), gunakan itu
        } else {
            return { top: 0 }; // Scroll ke atas
        }
    },
});

export default router;