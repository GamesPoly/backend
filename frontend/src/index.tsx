import './index.scss'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './store/store'


document.documentElement.setAttribute("data-theme", "dark");
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)