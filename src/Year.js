import React from "react";
import axios from "axios";

class Year extends React.Component{
    constructor(props){
        super(props);
        this.state={
            balance:0,
            income:0,
            expenses:0
        };
        this.changeIncome = this.changeIncome.bind(this)
        this.changeExpenses = this.changeExpenses.bind(this)
        this.changeBalance = this.changeBalance.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeIncome(event){
        this.setState({
            income: event.target.value
        })
    }

    changeExpenses(event){
        this.setState({
            expenses: event.target.value
        })
    }

    changeBalance(event){
        this.setstate({
            balance: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const expenditure={         
            balance: (this.state.balance + (this.state.income - this.state.expenses)),
            income:this.state.income,
            expenses:this.state.expenses       
        }


        axios.post('http://localhost:4000/app/signin', expenditure)
            .then(response => console.log(response.data))


        this.setState({
            balance: this.state.balance + (this.state.income - this.state.expenses),
            income:0,
            expenses:0
        })
    }

    render(){
        return(
            <div>  
             <h1 style ={{color:"red"}}> YEARLY MONEY MANAGER </h1>   
            <form style = {{ borderStyle:"solid"}}onSubmit = {this.onSubmit}>           
            <label> Enter Income: Rs.
            <input type = "number"
            onChange = {this.changeIncome}
            value = {this.state.income}/>
            </label> <br />
            <label> Enter Expenses: Rs.
            <input type = "number"
            onChange = {this.changeExpenses}
            value = {this.state.expenses}/>
            </label> <br />             
            <input type = "submit"
            value = "Submit"/>
            <h1>Balance: Rs. 
                 <input onchange = {this.changeBalance}
                        value = {this.state.balance} /> </h1>
                  <br />            
            </form>
           
            </div>
        )
        }
}


export default Year;