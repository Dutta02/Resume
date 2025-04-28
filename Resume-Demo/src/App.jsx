import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mainlayout from './layout/Mainlayout'
import Front from './pages/Front'
import Designs from './pages/Designs'
import Form from './pages/Form'
import DownloadSection from './pages/DownloadSection'

function App() {
  const router = createBrowserRouter([
    {
     path:"/",
     element:<Mainlayout />,
     children:[
       {
         path:"/",
         element:<Front />
       },
       {
         path:"/design",
         element:<Designs />
       },
       {
         path:"/form",
         element:<Form />
       },
       {
         path:"/download",
         element:<DownloadSection />
       }
     ]
    }
  
  ])
   return <RouterProvider router={router} />
}

export default App