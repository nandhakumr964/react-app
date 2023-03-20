import React, { Component } from 'react';  
import ComponentUpdate from './ComponentUpdate';
import ForceUpdate from './ForceUpdate';

  
class App extends Component {  
 
  render() {  
    return (  
      <div className="App">  

<ComponentUpdate></ComponentUpdate>
<ForceUpdate></ForceUpdate>
      </div>  
    );  
  }  
}  
export default App;