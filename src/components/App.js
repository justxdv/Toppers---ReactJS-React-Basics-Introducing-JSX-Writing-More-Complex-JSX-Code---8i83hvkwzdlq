import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			list : [
				{
					name : "naman",
					percent : 60.0000
				},
				{
					name : "ritesh",
					percent : 99.9431
				},
				{
					name : "hitesh",
					percent : 65.3365
				},
				{
					name : "shreya",
					percent : 80.6400
				},
				{
					name : "ankur",
					percent : 78.8970
				},
				{
					name : "vanshu",
					percent : 78.9876
				},
				{
					name : "krupal",
					percent : 85.3214
				},
			],
		}
	};
    render() {
    	return(
    		<div id="main">
    			{
    				//Correct the percentage conditional for correct output
    				this.state.list.map(function(item,index){
				   		if(item.percent > 0)
				   		{
				   			return(
				   				//Conditional statement in the className of below div to give callName="bg-pink"
				   				//if the percent >= 90 else className = "" 
				   				<div key={index} className={}>
					   				<div className="name">
					   					 //Write code to display name
					   				</div>
					   				<div className="percent">
					   					 //Write code to display percentage upto 2 decimal places
					   				</div>
				   				</div>
				   				);
				   		}
			       })
			    }
    		</div>
    		);
    }
}


export default App;

