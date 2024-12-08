class User{
    constructor(username,password,wallet){
        this.username=username;
        this.password=password;
        this.wallet=[]; 
    }
    // Public Interface
    balance(amount){
        this.wallet.push(amount)
    }
    spent(amount){
        this.balance(-amount)
    }
    login(val){
        return true;
    }
    loginUser(val){
        if(this.login(val)){
            this.balance(val);
            console.log(`Hello ${this.username}- You have successfully loggedin`);
            
        }
    }
}
const user1=new User('khanam',123);
// user1.wallet.push(30)
// user1.wallet.push(-10)
user1.balance(100);
user1.spent(70)
console.log(user1.password);
user1.loginUser(70);
console.log(user1);


