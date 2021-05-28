import { RouterView } from "vue-router";
const Home = () =>
    import ("@/views/Home.vue")

const HomeViews = {
    path: "home",
    name: "Home",
    component: RouterView,
    children: [{
        path: "/home",
        nome: "Home",
        component: Home,
    }]
}

export default HomeViews;