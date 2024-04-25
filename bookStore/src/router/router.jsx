import {
    createBrowserRouter,
    Router,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home.jsx"
import Shop from "../components/Shop";
import About from "../components/About";
import SellYourBook from "../components/SellYourBook";
import SingleBook from "../Shop/SingleBook.jsx";
import DashboardLayout from "../Dashboard/DashboardLayout.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import UploadBooks from "../Dashboard/UploadBooks.jsx";
import ManageBooks from "../Dashboard/ManageBooks.jsx";
import EditBooks from "../Dashboard/EditBooks.jsx";
import MainBlog from "../Blog/MainBlog.jsx";
import ChatWithAi from "../AiChat/ChatWithAi.jsx";
import AiApp from "../AiChat/AiApp.jsx";
// import SignUp from "../components/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/sellyourbook",
                element: <SellYourBook/>
            },
            {
                path: "/blog",
                element: <MainBlog/>
            },
            {
                path:"/book/:id",
                element: <SingleBook/>,
                loader: ({params}) => fetch(`https://bookstore-bx08.onrender.com/book/${params.id}`)
            },
            {
                path:"/chatwithai",
                element: <ChatWithAi/>
            },
            {
                path:"/chatwithaidemo",
                element: <AiApp/>
            }

        ]
    },
    {
        path:"/admin/dashboard",    //for private routing
        element: <DashboardLayout/>,
        children: [
            {
                path:"/admin/dashboard",
                element: <Dashboard/>  
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBooks/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks/>
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBooks/>,
                loader: ({params}) => fetch(`https://bookstore-bx08.onrender.com/book/${params.id}`) // will give book id to edit a particular book
            }
        ]
    }
    // ,
    // {
    //     path:"sign-up",
    //     element: <SignUp/>
    // }
]);

export default router