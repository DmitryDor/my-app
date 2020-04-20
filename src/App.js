import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/content";
import Dialogs from "./components/Dialogs/Dialogs";



import classes from "./components/Content/content.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musec from "./components/Musec/Musec";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div class='app-wrapper-content'>
                    {/*<Route path ='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path ='/profile' component={Content}/>*/}
                    {/*<Route path ='/musec' component={Musec}/>*/}
                    {/*<Route path ='/news' component={News}/>*/}
                    {/*<Route path ='/settings' component={Settings}/>*/}
   {/*чтоб использовать props c более высоких файлов используем для route вариант ниже*/}
                    <Route path ='/dialogs' render={() => <Dialogs/>}/>
                    <Route path ='/profile'render={ () => <Content posts={props.posts}/> }/>
                    <Route path ='/musec' render={ () => <Musec/> }/>
                    <Route path ='/news' render={ () => <News/> }/>
                    <Route path ='/settings' render={ () => <Settings/>} />

                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;
