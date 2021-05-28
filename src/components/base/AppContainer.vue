<template>
  <Suspense>
    <template #default>
      <div class="wrapper">
        <div class="main">
          <Header></Header>         
          <main>
               <MainContent></MainContent>
          </main>
        </div>
        <Footer></Footer>      
      </div>
    </template>
    <template #fallback> Aguarde.... </template>
  </Suspense>
</template>

<script>
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./footer"
export default {
  components:{
    Header, MainContent, Footer
  }
}
</script>