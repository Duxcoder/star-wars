import Content from './components/Content/Content';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import { Provider } from 'react-redux';
import { setupStore } from './redux';

const App = () => {
  return (
    <Provider store={setupStore()}>
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
