import React from 'react';
import './App.css';
class App extends React.PureComponent {

  render() {
    console.log('this.props',this.props)
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

export default App;
