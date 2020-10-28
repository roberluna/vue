const app = Vue.createApp({

    data: () => ({
        users: [],
    }),
    created() {
        this.obtenerUsuarios()
    },
    methods: {
        obtenerUsuarios() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    this.users = json
                })
        }
    }

})

const vm = app.mount('#app')