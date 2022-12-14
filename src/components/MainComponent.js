import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponents';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  render() {
    const HomePage = () => {
        return (
          <div className="home">
            <Home />
            </div>
        );
    }
      return ( 
        <div>
        
                 <Header />
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Redirect to="/home" />
                        </Switch>
                <Footer />     
                   </div>
      )
  }
}

export default Main;