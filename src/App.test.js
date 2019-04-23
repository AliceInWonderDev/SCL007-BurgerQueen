import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import Menu from './Components/Menu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('debe retornar nombre', () => {  
  const createComponent = Enzyme.mount(<Create/>); //Create es el nombre de mi componente donde esta mi funcion
  const inputComponent = Menu.find('input') //con find indico que busco un input en mi componente
  const buttonComponent = Create.find('button'); //aqui indico que busco el boton que hace click y cambia el estado donde guardo el nombre
  inputComponent.simulate('change', { target: {value: 'name'} });
  buttonComponent.filter('.btn-success').simulate('click'); //'.click_data' es el nombre de la clase de mi boton
  expect(createComponent.state().name).toEqual('name'); //name, es el estado donde guardo el nombre
});

//hay que escribir target: value: para enviar los datos
//filter ayuda a filtrar solo el componente que nos interesa que tiene esa clase en particular
