import './App.css';

import AppProvider from './hooks';
import Home from './screens/Home';

function App() {
  return (
        <AppProvider>
          <Home />
        </AppProvider>
  );
}

export default App;
