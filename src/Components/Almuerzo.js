import React, {Component} from 'react';
import {almuerzo} from '../JSON/almuerzo.json';
import '../CSS/Almuerzo.css'

class Almuerzo extends Component{
    constructor(props){
        super(props);
        this.state={
            almuerzo,
            toShow: []
        }
        this.comidas = this.comidas.bind(this);
    }
    comidas(){
        this.setState({
            ...this.state,
            toShow: this.state.almuerzo.map((foods, i)=>{
                return(
                <div className= 'container btnAlmuerzo"'>
                    <div className="row-6">
                        <div className="col-6">
                                <div className="btn btn-warning">
                                {foods.item} {""}
                                {foods.price}
                            </div> 
                        </div>
                    </div>
                </div> 
                )
            })
        })
    }

    render(){
        return(
            <div className= 'container btnAlmuerzo'>
                    <div className="row-6">
                        <div className="col-6">
                            <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.comidas}>Almuerzo</button>
                            {this.state.toShow}
            </div>
            </div>
            </div>
        )
    }
}

export default Almuerzo;