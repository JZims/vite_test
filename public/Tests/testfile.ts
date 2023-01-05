// function addTwo(num: number) {

//     console.log(num)

//     return num + 5
// }

// addTwo(5)

// const setUpUser = (name: string, email: string, isPaid?: boolean) => {}
// const logInUser = (name: string, email: string, isPaid: boolean = false) => {}

// setUpUser("Josh", "blank@no.com", true)

// function consoleError(errMsg: string): void{
//     console.log(errMsg)
// }


// never type represents values which are never observed. The function throws an excetion or terminates execution of the program

// function handleeError(message: string): never{
//     throw new Error(message)
// }

// Objects

// const User = {
//     name: "Josh", 
//     email: "some@guy.lol", 
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){

// }

// createUser({name: "Josh", isPaid: false})


// declaring a return type of an object means to literally provide the object's structure
// function createCourse():{name: string, price: number}{
//     return {name: "a thing", price: 6}
// }

type User = {
    name: string;
    email: string;
    isActive: boolean;
}


function createUser(user: User){
    console.log(user.email)
    return user.name
}


createUser({name: "", email: "", isActive: true})

export {}