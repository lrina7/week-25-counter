/*import React, {Component} from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}
 export default Counter;*/

 
 import React, { useState } from "react";

 export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=> setCount(count + 1)} >{count}</button>
    </div>
  );
 }