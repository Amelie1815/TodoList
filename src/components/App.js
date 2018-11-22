import React from 'react';
import { hot } from 'react-hot-loader';
import Title from './Title';
import Footer from './Footer';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title title='Todos'/>
        <List />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App);