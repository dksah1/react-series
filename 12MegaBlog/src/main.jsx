import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:"/login",
        element:(
          <AuthLayout>
            <Login/>
          </AuthLayout>
        )
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
