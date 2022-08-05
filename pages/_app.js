import'../components/dashboard/dashboard.css'
import { AppContextProvider } from '../reducer';
import Home from '.';

export default function App() {
  return (
    <AppContextProvider>
        <Home/>
    </AppContextProvider>
  
    )
}
