import { store } from './app/store';
import { Provider } from 'react-redux';
import { Products } from './components/product/Products';
import { Header } from './components/header/Header';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className='super-wrapper'>
        <Header />
        <div className="wrapper">
          <Products />
        </div>
      </div>
    </Provider>
  );
}

export default App;
