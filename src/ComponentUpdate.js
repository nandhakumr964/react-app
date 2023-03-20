import React, { Component } from 'react';  
import PropTypes from 'prop-types';  
class App extends React.Component {  
   constructor() {  
      super();        
      this.state = {  
          msg: "Welcome to JavaTpoint"  
      };      
      this.updateSetState = this.updateSetState.bind(this);  
   }  
   updateSetState() {  
       this.setState({  
          msg:"Its a best ReactJS tutorial"  
       });  
   }  
   render() {  
      return (  
         <div>  
             <h1>{this.state.msg}</h1>  
             <button onClick = {this.updateSetState}>SET STATE</button>  
         </div>  
      );  
   }  
}  
export default App;  