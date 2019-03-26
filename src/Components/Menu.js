import React, {Component} from 'react';
import {almuerzo} from '../JSON/almuerzo.json';
import {desayuno} from '../JSON/desayuno.json';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            desayuno,
            almuerzo,
            toShow:[]
        }
        this.comidaUno = this.comidaUno.bind(this);
        this.comidaDos = this.comidaDos.bind(this);
    }
    comidaUno(){
        this.setState({
            ...this.state,
            toShow: this.state.desayuno.map((food, i)=>{
                return(
                    <div className= 'container'>
                        <div className="row">
                        <div className="col-6">
                            <div className="btn btn-warning">
                            {food.item}      {""}
                            {food.price} {""}
                            <img src = {food.img}/>
                            </div> 
                        </div>
                        </div>
                    </div>)
            })
        })
    }
    comidaDos(){
        this.setState({
            ...this.state,
            toShow: this.state.almuerzo.map((foods, i)=>{
                return(
                    <div className="btn btn-warning">
                    {foods.item} {""}
                    {foods.price}
                    
                    </div> 
                )
            })
        })
    }
render(){
    return(
        <div>
            <div className= 'container'>
                <div className="row">
                    <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.comidaUno}>Desayuno</button>
                    {this.state.toShow}
                </div>
            </div>
            <div className= 'container'>
            <div className="row">
                    <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.comidaDos}>Almuerzo</button>
                    {this.state.toShow}
            </div>
            </div>
        </div>
    )
}




}

export default Menu;