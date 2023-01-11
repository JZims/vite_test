type cardDetails = (string | number)[]

type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    cCDetails?: cardDetails
}

let myUser: User = {
    _id: '1234', 
    name: 'Me', 
    email: 'me@you.them', 
    isActive: false, 
    cCDetails: ["hah", "hah", 1]
}

const superHeros = []

// myUser._id = "ahh"
myUser.email = "nope"

