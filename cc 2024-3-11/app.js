class God{
    /**
     * @returns Human[]
     */
      static create(){
        // code
        return [new Man(), new Woman]
      }
    }
    // code
    class Human extends God {
    }
    class Man extends Human {
    }
    class Woman extends Human {
    }



