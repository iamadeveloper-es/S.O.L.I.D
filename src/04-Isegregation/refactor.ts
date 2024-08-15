/**
 * 04 Segregación de interfaz
 * "Los clientes no deberían estar obligados a depender de interfaces que no utilizan"
 */
(() => {
    interface Bird{
        eat(): void
        run(): void
    }

    interface FyingBird{
        fly(): void
    }

    interface SwimmingBird{
        swimming(): void
    }

    class Tucan implements Bird, FyingBird{
        public fly(){}
        public eat(){}
        public run(){}
    }

    class Colibri implements Bird, FyingBird{
        public fly(){}
        public eat(){}
        public run(){}
    }

    class Avestruz implements Bird{
        public eat(){}
        public run(){}
    }

    class Penguin implements Bird, SwimmingBird{
        public eat(){}
        public run(){}
        public swimming(){}
    }
})()