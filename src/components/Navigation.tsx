import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cross, Coins, BarChart3, Users, Building2, User, LogIn, Settings, LogOut, Menu, X } from 'lucide-react'

type Tab = 'home' | 'token-manager' | 'analytics' | 'churches' | 'community'

interface NavigationProps {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const tabs = [
    { id: 'home' as Tab, label: 'Home', icon: Cross },
    { id: 'token-manager' as Tab, label: 'Token Manager', icon: Coins },
    { id: 'analytics' as Tab, label: 'Analytics', icon: BarChart3 },
    { id: 'churches' as Tab, label: 'Churches', icon: Building2 },
    { id: 'community' as Tab, label: 'Community', icon: Users },
  ]

  const handleSignIn = () => {
    setIsSignedIn(true)
    setShowProfileMenu(false)
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    setShowProfileMenu(false)
  }

  const handleTabClick = (tabId: Tab) => {
    setActiveTab(tabId)
    setShowMobileMenu(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">SOS</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-2 lg:space-x-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 sm:px-6 lg:px-8 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-sos-orange-500/20 text-sos-orange-400'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              {!isSignedIn ? (
                <button
                  onClick={handleSignIn}
                  className="px-4 py-2 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-lg text-white font-semibold button-glow flex items-center space-x-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      showProfileMenu
                        ? 'bg-sos-orange-500/20 text-sos-orange-400'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <User className="w-5 h-5" />
                  </button>

                  {/* Profile Dropdown */}
                  <AnimatePresence>
                    {showProfileMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 glass-card rounded-xl border border-white/10 shadow-lg"
                      >
                        <div className="p-2">
                          <div className="px-4 py-3 border-b border-white/10">
                            <p className="font-semibold">John Believer</p>
                            <p className="text-xs text-white/60">john@example.com</p>
                          </div>
                          <button
                            onClick={() => setShowProfileMenu(false)}
                            className="w-full px-4 py-3 flex items-center space-x-3 rounded-lg hover:bg-white/10 transition-colors text-left"
                          >
                            <User className="w-4 h-4" />
                            <span>Profile</span>
                          </button>
                          <button
                            onClick={() => setShowProfileMenu(false)}
                            className="w-full px-4 py-3 flex items-center space-x-3 rounded-lg hover:bg-white/10 transition-colors text-left"
                          >
                            <Settings className="w-4 h-4" />
                            <span>Settings</span>
                          </button>
                          <button
                            onClick={handleSignOut}
                            className="w-full px-4 py-3 flex items-center space-x-3 rounded-lg hover:bg-white/10 transition-colors text-left text-red-400"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-3">
              {!isSignedIn ? (
                <button
                  onClick={handleSignIn}
                  className="px-3 py-2 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-lg text-white font-semibold text-sm button-glow"
                >
                  Sign In
                </button>
              ) : (
                <div className="w-8 h-8 rounded-full bg-sos-blue-500/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-sos-blue-400" />
                </div>
              )}
              
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
              >
                {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setShowMobileMenu(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 glass-card border-l border-white/10 z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 flex items-center justify-center">
                      <Cross className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold gradient-text">SOS</span>
                  </div>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`w-full px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 text-left ${
                          activeTab === tab.id
                            ? 'bg-sos-orange-500/20 text-sos-orange-400'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    )
                  })}
                </div>

                {isSignedIn && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-3 mb-4 px-4">
                      <div className="w-10 h-10 rounded-full bg-sos-blue-500/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-sos-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">John Believer</p>
                        <p className="text-xs text-white/60">john@example.com</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full px-4 py-3 rounded-lg flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors text-left">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full px-4 py-3 rounded-lg flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors text-left">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <button 
                        onClick={handleSignOut}
                        className="w-full px-4 py-3 rounded-lg flex items-center space-x-3 text-red-400 hover:bg-white/5 transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation