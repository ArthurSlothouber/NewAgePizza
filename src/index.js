import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
import { BaseForm } from './components/base';
import { SauceForm } from './components/sauce';
import { ToppingForm } from './components/topping';



ReactDOM.render(
    <Provider store={store}>
    <div>
        <App />
        <BaseForm />
        <SauceForm />
        <ToppingForm />
    </div>
    </Provider>,
    document.getElementById('root')
)
