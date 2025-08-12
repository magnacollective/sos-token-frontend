import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Cross, Clock, Smartphone, Lock, Unlock, AlertCircle, CheckCircle } from 'lucide-react'

const FaithMode = () => {
  const [isActive, setIsActive] = useState(false)
  const [selectedPreset, setSelectedPreset] = useState('quiet')
  const [sessionTime, setSessionTime] = useState(30)

  const presets = [
    { id: 'quiet', name: 'Quiet Time', desc: 'Morning devotion and prayer', blockedApps: 45, allowedApps: ['Bible', 'Notes', 'Music'] },
    { id: 'sabbath', name: 'Sabbath Mode', desc: 'Full day of rest and worship', blockedApps: 62, allowedApps: ['Bible', 'Phone', 'Messages'] },
    { id: 'church', name: 'Church Service', desc: 'Stay present during service', blockedApps: 58, allowedApps: ['Bible', 'Notes'] },
    { id: 'family', name: 'Family Time', desc: 'Quality time without distractions', blockedApps: 51, allowedApps: ['Camera', 'Phone', 'Messages'] },
  ]

  const blockedApps = [
    { name: 'Instagram', category: 'Social', icon: '📱', status: 'blocked' },
    { name: 'TikTok', category: 'Social', icon: '🎵', status: 'blocked' },
    { name: 'Twitter', category: 'Social', icon: '🐦', status: 'blocked' },
    { name: 'YouTube', category: 'Entertainment', icon: '📺', status: 'blocked' },
    { name: 'Netflix', category: 'Entertainment', icon: '🎬', status: 'blocked' },
    { name: 'Games', category: 'Gaming', icon: '🎮', status: 'blocked' },
  ]

  const handleActivate = () => {
    setIsActive(!isActive)
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Faith Mode Control Center</h2>
          <p className="text-xl text-white/60">Transform distraction into devotion</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    isActive ? 'bg-sos-green-500/20 animate-pulse-slow' : 'bg-sos-orange-500/20'
                  }`}>
                    <Shield className={`w-8 h-8 ${isActive ? 'text-sos-green-500' : 'text-sos-orange-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {isActive ? 'Faith Mode Active' : 'Faith Mode Inactive'}
                    </h3>
                    <p className="text-white/60">
                      {isActive ? 'Stay focused on your spiritual journey' : 'Tap to activate and block distractions'}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleActivate}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    isActive 
                      ? 'bg-sos-red-500/20 text-sos-red-500 border border-sos-red-500/30'
                      : 'bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 text-white button-glow'
                  }`}
                >
                  {isActive ? 'End Session' : 'Start Faith Mode'}
                </motion.button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <Clock className="w-6 h-6 text-sos-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">2h 15m</p>
                  <p className="text-xs text-white/60">Today's Focus</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <Lock className="w-6 h-6 text-sos-orange-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">47</p>
                  <p className="text-xs text-white/60">Apps Blocked</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <Cross className="w-6 h-6 text-sos-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-xs text-white/60">Day Streak</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Choose Preset</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {presets.map((preset) => (
                    <motion.button
                      key={preset.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPreset(preset.id)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        selectedPreset === preset.id
                          ? 'bg-sos-orange-500/20 border border-sos-orange-500/30'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <p className="font-semibold mb-1">{preset.name}</p>
                      <p className="text-sm text-white/60 mb-2">{preset.desc}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-sos-red-400">{preset.blockedApps} blocked</span>
                        <span className="text-sos-green-400">{preset.allowedApps.length} allowed</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Session Duration</h4>
                  <span className="text-sos-orange-400">{sessionTime} minutes</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="120"
                  value={sessionTime}
                  onChange={(e) => setSessionTime(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #FF8C00 0%, #FF8C00 ${(sessionTime - 15) / 105 * 100}%, rgba(255,255,255,0.1) ${(sessionTime - 15) / 105 * 100}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>15 min</span>
                  <span>60 min</span>
                  <span>120 min</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-semibold text-lg mb-4">Blocked Applications</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {blockedApps.map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-sos-red-500/10 border border-sos-red-500/20"
                  >
                    <span className="text-2xl">{app.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{app.name}</p>
                      <p className="text-xs text-white/50">{app.category}</p>
                    </div>
                    <Lock className="w-4 h-4 text-sos-red-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h4 className="font-semibold text-lg mb-4">Emergency Unlock</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-sos-yellow-500/10 border border-sos-yellow-500/20">
                  <div className="flex items-center space-x-3">
                    <Unlock className="w-5 h-5 text-sos-yellow-500" />
                    <div>
                      <p className="font-medium">Unlocks Available</p>
                      <p className="text-xs text-white/60">Resets monthly</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">3</span>
                </div>
                <button className="w-full py-3 rounded-lg bg-sos-yellow-500/20 text-sos-yellow-500 border border-sos-yellow-500/30 font-medium hover:bg-sos-yellow-500/30 transition-colors">
                  Use Emergency Unlock
                </button>
                <p className="text-xs text-white/50 text-center">
                  10-minute bypass for urgent situations
                </p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-semibold text-lg mb-4">Today's Scripture</h4>
              <div className="p-4 rounded-lg bg-sos-blue-500/10 border border-sos-blue-500/20">
                <p className="text-sm italic mb-3">
                  "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
                </p>
                <p className="text-xs text-sos-blue-400">Matthew 6:33</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-semibold text-lg mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Configure Apps</span>
                </button>
                <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Report Issue</span>
                </button>
                <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>View History</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FaithMode