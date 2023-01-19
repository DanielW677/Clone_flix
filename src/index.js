import 'bootstrap/dist/css/bootstrap.css'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {SignUp} from './comps/index'
import './style.css'

const App = () => {

    return(
        <div>
            TEST
        </div>
    )
}

const route = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />,
        
        children:[
        ]
    }
])


const appElem = document.getElementById('app')
const root = createRoot(appElem)
root.render(<RouterProvider router={route}/>)