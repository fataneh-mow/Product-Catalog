import './index.css';
import { useTranslation } from 'react-i18next';
import AppRoutes from './app-routes/AppRouter';
function App() {
  const {t} = useTranslation()

  return (
    <div>
      <AppRoutes></AppRoutes>
    </div>
  )
}

export default App
