import './App.css'
import Todos from './components/Todos'
import store from './redux/store'
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Todos></Todos>
    </Provider>
  )
}

export default App
