import MyHeader from './components/MyHeader/MyHeader';
import MyContent from './components/MyContent/MyContent';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <>
        <MyHeader logo={'Star Wars'} />
        <MyContent />
      </>
    );
  }
}

export default App;
