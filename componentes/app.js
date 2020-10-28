const app = Vue.createApp({
    data() {
      return { count: 4 }
    }
  })
  
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})

  const vm = app.mount('#app')