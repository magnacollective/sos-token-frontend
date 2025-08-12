import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LandingPage from './components/LandingPage'
import TokenManager from './components/TokenManager'
import Analytics from './components/Stats'
import Churches from './components/Churches'
import Community from './components/Community'
import Footer from './components/Footer'

type Tab = 'home' | 'token-manager' | 'analytics' | 'churches' | 'community'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-sos-navy-900 via-sos-navy-800 to-sos-navy-700">
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'home' && (
            <>
              <Hero />
              <LandingPage />
            </>
          )}
          {activeTab === 'token-manager' && <TokenManager />}
          {activeTab === 'analytics' && <Analytics />}
          {activeTab === 'churches' && <Churches />}
          {activeTab === 'community' && <Community />}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App