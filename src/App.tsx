import { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MyContent from './components/MyContent/MyContent';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MyContent />
      </ErrorBoundary>
    );
  }
}

export default App;
