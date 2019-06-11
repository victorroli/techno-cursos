<template>
  <div id="app">
    <Header/>
    <router-view class="container"></router-view>
  </div>
</template>


<script>

import Header from '@/components/TheHeader.vue'

export default {
  components:{
    Header
  }  
}

</script>

<style>

body{
  margin: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}

ul{
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a{
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a:hover{
  color: #4eb;
  text-decoration: underline;
}

img{
  max-width: 100%;
}

.container{
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.conteudo{
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

.v-enter{
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active{
  transition: all .3s;
}

@media screen and (max-width: 400px){
  .conteudo{
    display: block;
  }
}

.content-curso h2{
  text-transform: uppercase;
}

</style>
