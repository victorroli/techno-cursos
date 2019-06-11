<template>
  <div>
    <div v-if="loading">
     <PageLoading/>
    </div>

    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
          <router-link tag="button" class="btn-cursos" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.id">
                <p><b>{{avaliacao.nome}}</b></p>
                <p><i>"{{avaliacao.descricao}}"</i></p>
              </li>
            </ul>
          </div>
        </div>
          <img src="@/assets/aprender.png" alt="Aprenda Web Design"/>
      </div>
    </transition>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData.js'

export default {
  name: 'home',
  mixins: [fetchData],
  created(){
    this.fetchData('home')
  }
}
</script>

<style scoped>

.btn-cursos{
  border: none;
  background: #4eb;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 10px 30px;
  box-shadow: 0 4px 2px rgba(0,0,0,0.1);
  font-size: 1rem;
  margin: 10px auto 40px auto;
  font-family: "Alvenir", Arial, Helvetica, sans-serif;
}

</style>
