class PointFirst {
    readonly x: number
    y: number
    // private y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    func() {
        //this.x = 10 // нельзя, т.к. readonly
    }

    private privateFunc() {
        return ''
    }
}

const pointFirst = new PointFirst(0, 0)
//pointFirst.x = 4

pointFirst.func() // функция не приватна и видна

// Extend Class
class D3PointFirst extends PointFirst {
    z: number
    constructor(x: number, y: number, z:number) {
        super(x,y);
        this.z = z
    }
}

const point = new D3PointFirst(1,1,1)
point.y

// Статичные свойства

class StaticTest {
    static c = 'qwe'
    static test(){

    }
}

const st = StaticTest.c // Имеем доступ через сам класс
const stm = StaticTest.test() // Имеем доступ через сам класс


// Абстрактные классы
abstract class Test2 {
    myMethod(){

    }
}

// const abs = new Test2() // не будет работать, т.к. Test2 абстрактный

class Test3 extends Test2{ // А экстендить абстрактный класс можно

}

const abs = new Test3() // будет работать


interface C {
    test: () => number
}

class D implements C {
    test(){
        return 3 // обязательно тот тип, который был задан в интерфейсе С
    }
}
