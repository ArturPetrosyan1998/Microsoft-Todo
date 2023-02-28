import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import rootReducer from './redux/reducers/rootReducer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
const store = configureStore({ reducer: rootReducer })
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
