import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Activity from './components/home/activitiesCard/formActivity';
import reducer, { initialState } from './redux/reducer'
describe('Componente LandingPage', () => {
  it('Existe un boton de ingresar (ingresar)', async () => { 
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/ingresar/i);
    expect(linkElement).toBeInTheDocument();
  });
});


describe('Componente formulario Activity', () => {
  it('Tiene un campo para ingresar el nombre', async () =>{
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Activity />
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByText(/Actividad/ig)).toBeInTheDocument()
  });
})

describe('Initialstate', () => {
  it('Tiene una constante inicial', () => {
    expect(initialState).toBeDefined()
  });

  it('Tiene valores predefinidos el initialState', () => {
    expect(initialState).toEqual({
      countries: [],
      country: [],
      activity: {},
      formActivity:{},
      countriesOrder: [],
      activities:[]
    })
  });

  it('Tiene una funcion reducer', () => {
    expect(typeof reducer).toEqual('function')
  });
});