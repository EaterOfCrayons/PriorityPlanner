class storeData{
    users = [];
    
    constructor(users){
        this.users = users
    }

    getUsers(){
        return this.users
    }

    findUser(name){
        for(var i = 0; i < this.users.length; i++){
            if (this.users[i].username == name){
                return this.users[i]
            }
        }
        return null;
    }

    addUser(user){
        return this.users.push(user)
    }

    
    
}

class User{
    username;
    password;

    constructor(username, password){
        this.username = username
        this.password = password
    }

    login(password){
        return this.password == password
    }
}

store = new storeData(
    [new User("hi_ishan", "testing"),]
);