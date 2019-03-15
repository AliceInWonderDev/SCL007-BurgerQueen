import React, {Component} from 'react';
import {almuerzo} from '../JSON/almuerzo.json';

class Almuerzo extends Component{
    constructor(props){
        super(props);
        this.state={
            almuerzo,
            toShow: []
        }
        this.comida = this.comida.bind(this);
    }
    comida(){
        this.setState({
            ...this.state,
            toShow: this.state.almuerzo.map((food, i)=>{
                return(
                <div className= 'container'>
                    <div className="row">
                    <div className="col-4">
                        <div className="btn btn-warning">
                        {food.item} 
                        {food.price}
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
            <div>
            <button type="button" className="btn btn-secondary btn-lg btn-block">Almuerzo</button>
            {this.state.toShow}
            </div>
        )
    }
}

export default Almuerzo;