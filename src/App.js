import { Provider } from 'react-redux';
import store from './redux/configStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Hi
      </div>
    </Provider>
  );
}

export default App;
