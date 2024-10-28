import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import styles from './App.module.scss'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.HomePage}>
        <LeftSide />
        <RightSide />
      </div>
    </QueryClientProvider>
  )
}

export default App

