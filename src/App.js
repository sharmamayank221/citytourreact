import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Tourlist from './components/TourList';

class App extends React.Component {
  render() {
  return ( 
    <main>
    <Navbar />
    <Tourlist />
    </main>
    );
}
}

export default App;
