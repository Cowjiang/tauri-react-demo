import './App.css'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { useZeroTierStore } from './store/zerotier'
import { useAppStore } from './store/app'
import { SERVICE_POLLING_INTERVAL } from '../constant'
import { useNotification } from './components/NotificationBar'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Dev from './pages/Dev'

function App() {
  const navigate = useNavigate()

  const {isLoading, isAdmin, setLoading, checkAdmin, restartAsAdmin} = useAppStore()
  const {getServiceState, getServiceStartType} = useZeroTierStore()

  const {setNotification} = useNotification()

  useEffect(() => {
    Promise.all([
      checkAdmin(),
      getServiceState(),
      getServiceStartType()
    ]).finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    !isAdmin && !isLoading && setNotification({
      type: 'warning',
      children: <div className="cursor-pointer" onClick={restartAsAdmin}>Please click here to relaunch with administrator privileges to access all functionalities</div>
    })
  }, [isAdmin, isLoading])

  const pollingInterval = () => setInterval(getServiceState, SERVICE_POLLING_INTERVAL)
  useEffect(() => {
    let pollingTimer: number
    if (isAdmin) {
      pollingTimer = pollingInterval()
    }
    const handleVisibilityChange = () => {
      clearInterval(pollingTimer)
      if (document.visibilityState === 'visible' && isAdmin) {
        pollingTimer = pollingInterval()
      }
    }
    window.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange)
      clearInterval(pollingTimer)
    }
  }, [isAdmin, getServiceState])

  return (
    <NextUIProvider navigate={navigate}>
      <div className="text-foreground">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          {import.meta.env.DEV && <Route path="/dev" element={<Dev />} />}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </NextUIProvider>
  )
}

export default App
