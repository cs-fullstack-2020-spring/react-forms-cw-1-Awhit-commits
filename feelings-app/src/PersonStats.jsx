import React, { Component } from 'react'

export default class PersonStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            age:"",
            feeling:""
        }
        
    }
    personSubmit = (event) =>{
        this.setState({
            name:event.target.value,
            age:event.target.value,
            feeling:event.target.value
        })
        event.preventDefault(this);
    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Person Stats</legend>
                        <p>
                        <label htmlFor="name">Name: </label>
                        <input onChange = {(event) =>this.setState({name:event.target.value})} type="text" name ="name" id="name" value ={this.state.name} placeholder = "Name"/>
                        </p>
                        
                        <p>
                            <label htmlFor="age">Age: </label>
                            <input onChange = {(event) => this.setState({age:event.target.value})} type="number" name="age" id="age" value = {this.state.age} placeholder="Age"/>
                        </p>

                        <p>
                            <label htmlFor="feeling"></label>
                            <select onChange = {(event) => this.setState({feeling:event.target.value})} name="feeling" id="feeling" value = {this.state.feeling}>
                                <option value="">Please Select A Feeling</option>
                                <option value="Great">Great</option>
                                <option value="Good">Good</option>
                                <option value="Bad">Bad</option>
                                <option value="Terrible">Terrible</option>
                            </select>
                        </p>

                        <button onClick = {this.personSubmit}>Submit</button>

                        
                        
                    </fieldset>
                </form>
                <div className="personInfo">
                    <p>My name is {this.state.name}</p>
                    <p>My age is {this.state.age}</p>
                    <p>I am feeling {this.state.feeling}</p>
                </div>
            </div>
        )
    }
}
