// 01 Single Responsability

(() => {
     interface Product{
        id: number,
        name: string,
        price: number
     }

     class ProductBlock{

        loadProduct(id: number){
            console.log(`Cargando producto con id ${id}`)
        }

        saveProduct(product: Product){
            console.log(`Guardando producto: ${product.name}`)
        }

        notify(){
            console.log(`Notificando a clientes`)
        }

        addToCart(product: Product){
            console.log(`Guardando en carrito el producto: ${product.name}`)
        }
     }

     const laptop = {id: 9, name: 'Asus Laptop', price: 9.99}

     const productBloc = new ProductBlock()

     productBloc.loadProduct(7)
     productBloc.saveProduct(laptop)
     productBloc.notify()
     productBloc.addToCart(laptop)
    
})()