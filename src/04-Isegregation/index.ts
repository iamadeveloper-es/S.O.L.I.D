/**
 * 04 Segregación de interfaz
 * "Los clientes no deberían estar obligados a depender de interfaces que no utilizan"
 */
(() => {
    interface Bird{
        fly(): void
        eat(): void
        run(): void
    }

    class Tucan implements Bird{
        public fly(){}
        public eat(){}
        public run(){}
    }

    class Colibri implements Bird{
        public fly(){}
        public eat(){}
        public run(){}
    }

    class Avestruz implements Bird{
        public fly(){
            throw new Error('Este ave no vuela')
        }
        public eat(){}
        public run(){}
    }

    class Penguin implements Bird{
        public fly(){
            throw new Error('Este ave no vuela')
        }
        public eat(){}
        public run(){}
    }
})()