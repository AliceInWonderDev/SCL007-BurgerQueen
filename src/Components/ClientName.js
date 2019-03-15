import React, { Component } from 'react';
import db from '../FirestoreConfig';


class ClientName extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            desayuno: [],
            almuerzo:[]
        };

        this.changeValue = this.changeValue.bind(this);
        this.action = this.action.bind(this); 
    }

///////////////////////////////
    render(){
        
    return(
        <div className= 'container'>
            <div className="row-6">
                <div className="col-6">         
            <label>
            <h5>Órden a nombre de:</h5>
            </label>
            <input type='text' value={this.state.name}  onChange={this.changeValue} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <input type='submit' className="btn btn-success" value='Guardar Nombre'  onClick={this.action}/>
            <h1>{this.state.name}</h1>
                </div>
            </div>
        </div>
    );
    }
    //////////////////////
    changeValue = (e) =>{
        this.setState({
            name:e.target.value
        })
    };

    action = (e) => {
        e.preventDefault();
        this.setState({
            name:'',
            desayuno: [],
            almuerzo:[]
        })
        db.collection('nuevosPedidos').add ({
            Cliente: this.state.name,
            Desayuno: this.state.desayuno,
            Almuerzo: this.state.almuerzo
        }).then(()=>{
            console.log('subido')
        }).catch((err)=>{
            console.log('err');
        })
    }

}

export default ClientName;

