import { motion } from 'framer-motion'
import { Cross, Coins, BarChart3, Users, Building2 } from 'lucide-react'

type Tab = 'home' | 'token-manager' | 'analytics' | 'churches' | 'community'

interface NavigationProps {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const tabs = [
    { id: 'home' as Tab, label: 'Home', icon: Cross },
    { id: 'token-manager' as Tab, label: 'Token Manager', icon: Coins },
    { id: 'analytics' as Tab, label: 'Analytics', icon: BarChart3 },
    { id: 'churches' as Tab, label: 'Churches', icon: Building2 },
    { id: 'community' as Tab, label: 'Community', icon: Users },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 flex items-center justify-center"
            >
              <Cross className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">SOS Token</span>
          </div>
          
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-sos-orange-500/20 text-sos-orange-400'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>
          
          <button className="px-4 py-2 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-lg text-white font-semibold button-glow">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation