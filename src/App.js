import React from 'react';
import { Globalstyle } from './style.js' //引入全局样式
import { IconfontGlobalStyle} from './statics/iconfont/iconfont' //引入iconfont全局样式
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './common/header'

import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Write from './pages/write'

function App() {
  return (
    <div className="App">
     <Globalstyle/>
     <IconfontGlobalStyle/>
        <Router>
            <div>
                <Header />
                <Route path="/"  exact component={Home}/>
                <Route path="/login"  exact component={Login}/>
                <Route path="/detail/:id" exact component={Detail}/>
                <Route path="/write"  exact component={Write}/>
            </div>
        </Router>
    </div>
  );
}

export default App;
