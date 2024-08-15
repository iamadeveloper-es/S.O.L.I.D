// 01 Single Responsability Refactor

(() => {
     interface Product{
        id: number,
        name: string,
        price: number
     }

     class ProductService{

        loadProduct(id: number){
            console.log(`Cargando producto con id ${id}`)
        }

        saveProduct(product: Product){
            console.log(`Guardando producto: ${product.name}`)
        }
     }

     class Mailer{
        send(){
            console.log(`Notificando a clientes`)
        }
     }

     class ProductBlock{

        constructor(
            private productService: ProductService,
            private mailer: Mailer
        ){}

        loadProduct(id: number){
            this.productService.loadProduct(id)
        }

        saveProduct(product: Product){
            this.productService.saveProduct(product)
        }

        notify(){
            this.mailer.send()
        }

        addToCart(product: Product){
            console.log(`Guardando en carrito el producto: ${product.name}`)
        }
     }


     const productService = new ProductService()
     const mailer = new Mailer()

     const laptop = {id: 9, name: 'Asus Laptop', price: 9.99}

     const productBloc = new ProductBlock(productService, mailer)

     productBloc.loadProduct(7)
     productBloc.saveProduct(laptop)
     productBloc.notify()
     productBloc.addToCart(laptop)
    
})()