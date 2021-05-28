import { RouterView } from "vue-router";
const About = () =>
    import ("@/views/About.vue")

const AboutViews = {
    path: "about",
    name: "About",
    component: RouterView,
    children: [{
        path: "/about",
        nome: "About",
        component: About,
    }]
}

export default AboutViews;