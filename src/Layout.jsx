import { ToolBar } from "./Components/Toolbar"
import { Outlet } from "react-router-dom"

//will work as a parent route to all the pages so that things included
//in this page will appear on all pages
export function Layout(){
    return(
        <>
            <ToolBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )

}