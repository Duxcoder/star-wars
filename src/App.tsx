import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MyContent from './components/MyContent/MyContent';

const App = () => {
  return (
    <ErrorBoundary>
      <MyContent />
    </ErrorBoundary>
  );
};

export default App;
