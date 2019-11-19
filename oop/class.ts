// inheritance

class Mother {

    private name: string

    constructor(name: string) {
        this.name = name
    }

    // constructor(private name: string){}     this is short term

    public say():string {

        return "hello"

    }

}

class Children extends Mother {

    public say():string{
        return "wah wah"
    }

}

// polymophism
interface Flyable {

    fly():void

}

interface Eatable {

    consume():number

}

class Bird implements Flyable {
    
    fly(): void {

        console.log("fly");

    }
    
}

class Duck implements Flyable, Eatable{
    
    fly(): void {
        console.log("fly");
    }
    
    consume(): number {
        return 20
    }

}