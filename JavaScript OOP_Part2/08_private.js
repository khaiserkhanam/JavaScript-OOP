class User{
    // Private Fields
    #wallet=[];
    #password;
    static #data="hello";
    static info="World";
    // Public field
    fullname="Saniya";
    constructor(username,password){
        this.username=username;
        this.#password=password; 
    }
    // Public Interface
    balance(amount){
        this.#wallet.push(amount)
    }
    getWallet(){
        return this.#wallet;
    }
    spent(amount){
        this.balance(-amount)
    }
    // Private method
    #login(val){
        return true;
    }
    loginUser(val){
        if(this.#login(val)){
            this.balance(val);
            console.log(`Hello ${this.username}- You have successfully loggedin`);
            
        }
    }
    // Static public method
    static newMethod(){
        console.log('Iam static public method');
        
    }
    // static private method
    static #newMethod1(){
        console.log('Iam static public method');
        
    }
}
const user1=new User('khanam',123);
// console.log(user1.#wallet);
user1.balance(700);
// user1.spend(600);
console.log(user1.getWallet());
// console.log(user1.#password);

// console.log(user1.#login());
user1.loginUser();
console.log(user1);
// user1.newMethod();
User.newMethod()

console.log(User.info);
// console.log(User.#data);

