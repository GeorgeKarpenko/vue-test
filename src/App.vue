<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="row">
          <router-link class="nav-link col-12" to="/"><img src="./assets/black.svg"></router-link>
        </div>
        <div class="row">
          <div class="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th class="bv-d-sm-down-none">РЫНОЧНАЯ КАПИТАЛИЗАЦИЯ</th>
                  <th class="bv-d-sm-down-none">ОБЪЕМ ОБМЕНА</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{bitcoins.price.toFixed(1)}}</td>
                  <td>{{bitcoins.maketCap.toFixed(1)}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </header>
      <router-view></router-view>
      
      
      <div class="row">
        <footer class="col-12">
          <p>Сopyright © 2019
          </p>
          <p>
            <a href="mailto:george@yandex.ru">george@yandex.ru</a>
          </p>
      </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  metaInfo: {
    title: 'Главная страница',
    titleTemplate: '%s | Информация о биткоинах',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  created() {
      this.chatBD();
  },
  data () {
    return {
      bitcoins:{},
    }
  },
  methods:{
    chatBD(){
      this.$http.get('http://localhost:3000/bitcoin/')
      .then(response => {
        return response.json()
      })
      .then( bitcoin => {
        var bitcoins = {}
        bitcoins.price = 0
        bitcoins.maketCap = 0
        bitcoin.forEach(bit => {
          bitcoins.price += bit.price
          bitcoins.maketCap += bit.maketCap
          console.log(bitcoins)
        });
        this.bitcoins = bitcoins
      })
    }
  }
}

</script>

<style>
@media (max-width: 767.98px) {
  h1 {
    font-size: 7vmin;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header, footer{
  height: 20vh;
}

img{
  width: 100px;
}

footer{
  justify-content: space-between;
  display: flex;
  align-items: flex-end;
}
</style>
