import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const MyComponent = (props) => {
  const [count, setCount] = useState(0);
  
  useEffect(()=> {
    const interval = setInterval(()=> setCount(0), 5000);

    return () => clearInterval(interval);

  },[count])


  return  (
    <div>Count: {count}
      <br/><br/>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <br/><br/>
      <button onClick={()=> setCount(count = 0)}>Reset Count</button>
    </div>
  )
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>

        <MyComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
