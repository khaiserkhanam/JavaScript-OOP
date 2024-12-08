class User{
    constructor(username,password){
        this.username=username;
        this._password=password;
        this._wallet=[]; 
    }
    // Public Interface
    balance(amount){
        this._wallet.push(amount)
    }
    getWallet(){
        return this._wallet;
    }
    spent(amount){
        this.balance(-amount)
    }
    _login(val){
        return true;
    }
    loginUser(val){
        if(this._login(val)){
            this.balance(val);
            console.log(`Hello ${this.username}- You have successfully loggedin`);
            
        }
    }
}
const user1=new User('khanam',123);
console.log(user1._password);
user1.balance(100);
user1.spent(70)
// console.log(user1._wallet);
console.log(user1.getWallet());
user1.loginUser(67);



// user1.balance(100);
// user1.spent(70)
// console.log(user1.password);
// user1.loginUser(70);
// console.log(user1);

