const app = Vue.createApp({
     data: () => ({
         texto: "Paradigmas de programación",
         nombre: "Roberto",
         productos: [
            {nombre: "cerveza", cantidad: 10},
            {nombre: "Vino", cantidad: 2},
            {nombre: "Agua", cantidad: 0},
         ],
         productoNuevo: "",
         total: 0,
     }),
     methods: {
        agregarProducto() {
            this.productos.push(
                {nombre: this.productoNuevo, cantidad: 0},
            )
            this.productoNuevo = "";
        }
     },
     computed: {
         sumarCantidad(){
            this.total = 0;
            for(producto of this.productos) {
                this.total = this.total + producto.cantidad;
            }
            return this.total;
         },
         voltearTexto(){
             return this.productoNuevo.split("").reverse().join("")
         }
     }
})

const vm = app.mount('#app')