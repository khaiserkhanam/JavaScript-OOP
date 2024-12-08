
const numbers=[2,4,2,2,1,8,10];
const result= numbers
.filter(num=>num%2===0)
.map(num=>num*num)
.reduce((sum,num)=>sum+num,0);
console.log(result);


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
        this.#wallet.push(amount);
        return this;
    }
    getWallet(){
        return this.#wallet;
        return this;
    }
    spent(amount){
        this.balance(-amount)
        return this;
    }
    // Private method
    #login(val){
        return true;
        return this;
    }
    loginUser(val){
        if(this.#login(val)){
            this.balance(val);
            console.log(`Hello ${this.username}- You have successfully loggedin`);
            return this;
            
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
console.log(user1);
user1.balance(900).spent(800).spent(500).balance(500)
console.log(user1.getWallet());



