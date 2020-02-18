// vscode配置自动编译
//     1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",  
//     2、第二步 任务 - 运行任务  监视tsconfig.json

// 类型校验：变量后加上：和类型 定义的变量就是某种类型
// let flag :boolean = true;
// // flag = 123;  错误//类型校验

//数据类型  
/*

    //布尔类型（boolean）   let isTrue: boolean = false

    //数字类型（number）    let num: number = 123

    //字符串类型(string)    let str: string = 'hello'

    //数组类型（array）
        //let arr: number[] = [1, 2, 3]
        //let arr1: Array<string> = ['zhangsan', 'lisi']

    //元组类型（tuple）     let tu:[number,string] = [123,'string'] 

    //枚举类型（enum）
        // enum color {
        //     red,yello,blue
        // }

        // console.log(color.blue)

    //任意类型（any）
        // let x: any = 1
        // x = 'string'

    //null 和 undefined
        //let n: null
        // n=1  //错误

        //let un: undefined
        // un=1 //错误

    //void类型 typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
        function get(): void {   //参数和返回类型
            console.log('void')
        }

    //never类型 是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明never的变量只能被never类型所赋值。
        // var a:never;
        // a=123; //错误的写法
*/



//函数
// 1、函数的定义
// 2、可选参数
// 3、默认参数
// 4、剩余参数
// 5、函数重载
// 6、箭头函数  es6

//类
// es5中类的定义
/*
    function Person(){
        this.name = 'zs'
        this.getName = function(){
            return this.name
        }
    }
    let p = new Person()
    console.log(p.getName())
*/

// 1 类的定义

/*
    class Person{
        name:string //属性  前面省略了public关键词  
        constructor (name:string) { //构造函数   实例化类的时候触发的方法
            this.name = name
        }
        getName():void{
            alert(this.name)
        }
        setName(name:string){
            this.name = name 
        }
    }

    let p = new Person('sjz')
    p.getName()
    p.setName('dashazi')
    p.getName()
*/



// 2 继承
/*

class Person{
    name:string //属性  前面省略了public关键词  
    constructor (name:string) { //构造函数   实例化类的时候触发的方法
        this.name = name
    }
    getName():void{
        alert(this.name)
    }
    setName(name:string){
        this.name = name 
    }
}

class Zhang extends Person{
    constructor (name:string){
        super(name) //初始化父类的构造函数
    }
}

let z = new Zhang('zhangsan')
z.getName()

*/

// 3 类里面的修饰符
/*
    public :公有          在当前类里面、 子类  、类外面都可以访问
    protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
    private ：私有         在当前类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符 默认就是 公有 （public）

    class Person{
        protected name:string //属性  前面省略了public关键词  
        constructor (name:string) { //构造函数   实例化类的时候触发的方法
            this.name = name
        }
        getName():void{
            alert(this.name)
        }
        setName(name:string){
            this.name = name 
        }
    }
    class Web extends Person{
        constructor(name:string){
            super(name)
        }
        getWeb(){
            alert(this.name)
        }
    }

    let w = new Web('aaaa')
    // w.name  //保护类型 不可在外部访问  错误
    w.getWeb()  //类中访问是可以的

    class Person{
        private name:string //属性  前面省略了public关键词  
        constructor (name:string) { //构造函数   实例化类的时候触发的方法
            this.name = name
        }
        getName():void{
            alert(this.name)
        }
        setName(name:string){
            this.name = name 
        }
    }

    let p = new Person('les')
    // p.name  //私有类型 不可在外部访问  错误
    p.getName()

*/



// 4 静态属性 静态方法
/*
    es5中静态属性和方法调用：类.属性/方法即可
    function Person(){
        this.run1=function(){

        }
    }
    Person.name='哈哈哈';

    Person.run2=function(){  静态方法

    }
    var p=new Person();

    Person.run2(); 静态方法的调用

    //es6
    class Person{
        name:string;   //实例属性
        static sex:string = "男" //静态属性
        constructor(name:string){
            this.name = name
        }
        getName(){  //实例方法
            alert(this.name)
        }
        static getSex(){ //静态方法  里面没法直接调用类里面的属性
            // this.name  // Property 'name' does not exist on type 'typeof Person'.ts(2339)
            return Person.sex
        }
    }

    let p = new Person('zhangsan')
    alert(p.name)  
    alert(Person.sex)  //调用静态属性
    alert(Person.getSex()) //调用静态方法

*/



// 5 抽象类 继承 多态
/*

//多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现 
    class Anima{
        name:string;
        constructor(name:string){
            this.name = name
        }
        eat(){
            alert(this.name+'在吃····')
        }
    }
    class Dog extends Anima{
        constructor(name:string){
            super(name)
        }
        eat(){
            alert(this.name+'在吃····')
        }
    }
    class Cat extends Anima{
        constructor(name:string){
            super(name)
        }
        eat(){
            alert(this.name+'在吃····')
        }
    }
    let dog =new Dog('小黑')
    let cat =new Cat('小花')
    dog.eat()
    cat.eat()

//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
//abstract抽象方法只能放在抽象类里面，抽象类和抽象方法用来定义标准。 
    abstract class Anima{
        abstract eat():any
    }
    class Dog extends Anima{
        eat(){
            alert('实现抽象方法')
        }
    }
    let dog = new Dog()
    dog.eat()
    
*/


//接口 
// 接口可以用来约束对象、函数以及类的结构和类型，这是一种代码协作的契约，调用该接口时必须遵守，不能改变
//1.对象类型接口

/*
    interface Obj {
        name: string;
        age: number;
        des?: string; // 可选属性
    }

    function getPerson(per: Obj) {
        alert(per.name)
        alert(per.age)
    }

    getPerson({ name: 'zhangsan', age: 12 })
*/

//2.函数类型接口
/*
    interface fun {
        (val: string): string //参数和返回值类型
    }

    let f: fun = (val: string): string => {
        return val
    }
    alert(f('zhangsan'))
*/


//3.类类型接口
/**/
interface Anima{
    name:string;
    eat():any;
}

class Pig implements Anima{
    name:string
    constructor(name:string){
        this.name = name
    }
    eat(){
        alert(this.name+'在吃。。。')
    }
}

//4.混合类型接口
/**/

//5.继承接口
/**/




//泛型
//1.泛型的定义

// 不预先确定的数据类型，具体的类型在使用的时候才能确定

// function getDate<T>(val: T): T {
//     return val
// }
// console.log(getDate<string>('name'))
// console.log(getDate('name')) //类型推断省略类型的参数
// console.log(getDate<string>(123)) //错误

//2.泛型函数类型


//3.泛型接口
//4.泛型类
//5.泛型扩展



