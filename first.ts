let myMoney = 50;    //$ npm install -g  typescript global install korar jonno
myMoney = 10; 


// /29-5:: set function parameter type and function ..
function add (num1:number, num2:number){   // typescript er khetre number ,string boolean likhtei hobe.

    return num1 + num2;
    }
    add(3,3);

function fullName (firstName:string, lastName:string):string{           // ei function ta porotai string
    return firstName + ' '+lastName;
}
const user:string = fullName('Martin','Rock');


// /29-5:: set function parameter type and function ..
//  / 29-6 :: function void return and arrow function type ..
// / 29-7:: Set type of array and see the s....
// / 29-8:: TypeScript interface and use complex perameter::
// / 29-9:: Use type in class and explore private readonly...
function doubleItAndConsole (num: number):void{ // ts er khetre khali eita void diye korte hoeb.
const result = num * 2;
//console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);                 // output ::  undefined


// /arrow function diye ts code kora holow::

const multiply = (x:number, y:number):number => x * y;
console.log(multiply(25,5));

// /29-7:: Set type of array and see the set type of object....
///Set type of array::::::::::::
const number: number[] = [1,2,3,4,5,6];
number.push(66);

const friends: string[] = ['sunny','punny','funky','lucky'];
let megaName:string = '';
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if (friend.length>megaName.length) {
        megaName = friend;
    }
    
}
console.log('Friend with the largest name', megaName);

// /set type of object:
let player:{    // / object 
club:string,
salary:number
}={             // / oi object er type..
club:'Real Madrid',
salary:24445
}


// / 29-8:: TypeScript interface and use complex perameter::
// / interface:: interface is like object/data model....
interface Player{
    name:string, 
    club:string,
    salary:number,
    wife?:string,             // eita hote pare na o hote pare ...
    isPlaying:boolean
}

const messy:Player = {
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4000000,
    wife: 'some name',
    isPlaying: true
}
const lucky: Player ={
    name:'Lucky',
    club:'Liverpool',
    salary:400400,
    isPlaying: true         
    // wife name nei ei jonno interface ? eita dewa hoise..jate error na hoi..
} 

//  /oporer interface er vetor function dokonor system..
function getBonus(player:{salary:number}) {  // eikhane interface Player doreo declear  kora jabe 
    return player.salary * 0.1;   /// and new player add kora jabe age add kora jabe etc..
}
getBonus(messy);     // just oporer function declear korte hobe..

// / 29-9:: Use type in class and explore private readonly...

class Person {
    name:string;
  readonly  fatherName:string  /// typeScript er jonno..readonly dekhte parbo but 


    constructor(name:string,father:string) {
       this.name = name;
       this.fatherName = father;
    }
    getName():string{
        return this.name;
    }
}


const sam = new Person('Samuel', 'sunny')
console.log('name',sam.name);       // output :name Samuel
const samName:string = sam.getName();         // class ke call kora hoyese
sam.name = 'Ben';
