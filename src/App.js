import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Content from "./components/Content/content";
import Dialogs from "./components/Dialogs/Dialogs";
import classes from "./components/Content/content.module.css";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div class='app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Content />*/}
        </div>
    )
}
export default App;
