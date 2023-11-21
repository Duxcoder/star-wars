import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Content from './components/Content/Content';

const App = () => {
  return (
    <ErrorBoundary>
      <Content />
    </ErrorBoundary>
  );
};

export default App;
