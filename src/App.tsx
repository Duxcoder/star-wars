import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./router/Router";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </Provider>
  );
}

export default App;
