export default {data(){
    return{
      api: null,
      loading: true
    }
  },
  methods: {
    fetchData(url){
      this.loading = true;
      this.api = '';
      fetch(`http://localhost:3000/${url}`)
      .then(r => r.json())
      .then(r => {
        // setTimeout utilizado para simular o loading da requisição da API
          setTimeout(()=>{
              this.api = r;
              this.loading = false;
          }, 1500);
        })
    }
  }
}