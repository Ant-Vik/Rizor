import React from 'react';
import Header from './Header';
import Main from './Main';
import Design from './Design';
import Mode from './Mode';
import Footer from './Footer';
import '../App.scss';
const App = ()=>{
    return(
        <div>
            <Header/>
            <Main/>
            <Design/>
            <Mode/>
            <Footer/>
        </div>
    )
};
// https://github.com/Ant-Vik/Rizor.git
export default App;