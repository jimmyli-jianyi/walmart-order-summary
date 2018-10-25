import React, { Component } from 'react';
import OrderSummaryContainer from '../containers/OrderSummaryContainer';
import OrdersContainer from '../containers/OrdersContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrdersContainer />
        <OrderSummaryContainer />
      </div>
    );
  }
}

export default App;
