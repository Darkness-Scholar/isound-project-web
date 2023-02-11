import { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";


function DefaultLayout({...props}) {
    return ( 
        <>
        <NavBar/>
        <SideBar/>
        {props.children}
        </>
     );
}

export default DefaultLayout;