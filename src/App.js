import React from 'react';
import Day from './components/Day';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Day dayName='thursday' dayNumber='9' monthName='July' />
        <Day dayName='Friday' dayNumber='8' monthName='July' />
        <Day dayName='saturday' dayNumber='10' monthName='July' />
        {/* Si on ne donne pas des valuers il prend ses valeurs par defauls  */}
        <Day />
      </div>
    );
  }
}
export default App;
