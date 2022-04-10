class Account{

    private _accountId:number;
    private _name:string;
    private _initialBalance:number;
    private static account_count:number=0;
    
    constructor(_accountId:number=112233, _name:string="Jhon Cena", _initialBalance:number=5000)
    {
        this._accountId=_accountId;
        this._name=_name;
        this._initialBalance=_initialBalance;

        Account.account_count++;
        console.log("Account id  :"+_accountId + ", _name :"+ _name + ", Initial Balance  :"+ _initialBalance);
    }

    public set accountId(_accountId:number)
    {
        this._accountId=_accountId;
    }
    public get accountId()
    {
        return this._accountId;
    }

    public set name(_name:string)
    {
        this._name=_name;
    }
    public get name()
    {
        return this._name;
    }

    public set initialBalance(_initialBalance:number)
    {
        this._initialBalance=_initialBalance;
    }
    public get initialBalance()
    {
        return this._accountId;
    }

    


    private log(msg:string):string
    {
       
        return msg;
    }

    public withdraw(amount:number):number
    {
        console.log(this.log(amount + "  is debited from your account"));
       return this._initialBalance= this._initialBalance-amount;
    }

    public deposite(amount:number)
    {
        console.log(this.log(amount + "  is  credited in your account"));
        return this._initialBalance= this._initialBalance+amount;
    }

    

    static countAccounts():number
    {

        return this.account_count;
    }
}



 let acc = new Account(2222,'Vishakha',15000);
console.log(acc.deposite(23000));
console.log(acc.withdraw(22000));

let acc2 = new Account();


const arr = new Array(3);
arr[0]= new Account(335577, "Sankalp", 7000);
arr[1]= new Account(775533, "Sachi", 9000);
arr[2]= new Account();

// console.log(arr[0].deposite(5000));

for(let index:number=0; index<arr.length; index++)
{
   
    console.log(arr[index].deposite(5000));
    console.log(arr[index].withdraw(3000));
    
}

console.log(Account.countAccounts()+ ":  getting account count");