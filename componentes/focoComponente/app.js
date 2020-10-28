const app = Vue.createApp({})
  
app.component('foco', {
  props: ['lugar'],
  data() {
    return {
      estatus: 0
    }
  },
  // template: `
  // <img :src="estatus ? 'images/focoOn.png' : 'images/focoOff.png'" 
  // @click="estatus = !estatus">
  // <p>Sala</p>
  // `
  template: `
  <img :src="estatus ? 'images/focoOn.png' : 'images/focoOff.png'" 
  @click="estatus = !estatus">
  <p>{{lugar}}</p>
  `
})

  const vm = app.mount('#app')