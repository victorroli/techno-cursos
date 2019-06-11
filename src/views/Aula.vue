<template>
    <div>
        <div v-if="loading">
            <PageLoading/>
        </div>

        <transition>
            <div v-if="api">
                <h2>{{api.id}}</h2>
                <div class="video">
                    <iframe width="560" height="315" 
                    :src="`https://www.youtube.com/embed/${api.youtube}`" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                    </iframe>
                </div>

            </div>
        </transition>

    </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
    name: 'aula',
    props:['aula'],
    mixins: [fetchData],
    created(){
        this.fetchData(`aula/${this.aula}`);
    },
    beforeRouteUpdate(to, from, next){
        this.fetchData(`aula/${to.params.aula}`);
        next();
    }
}
</script>

<style scoped>
h2{
    text-transform: capitalize;
}

.video{
    position: relative;
    padding-bottom: 56.25%;
}

.video iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>
