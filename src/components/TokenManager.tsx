import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, ArrowUpDown, Download, Upload, Settings, PieChart, Clock, TrendingUp } from 'lucide-react'
import { LineChart, Line, PieChart as PieChartRecharts, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const TokenManager = () => {
  const [walletConnected, setWalletConnected] = useState(false)
  const [splitSettings, setSplitSettings] = useState({
    church: 50,
    user: 30,
    sos: 20
  })

  const priceData = [
    { time: '00:00', price: 0.0215 },
    { time: '04:00', price: 0.0218 },
    { time: '08:00', price: 0.0221 },
    { time: '12:00', price: 0.0224 },
    { time: '16:00', price: 0.0219 },
    { time: '20:00', price: 0.0226 },
    { time: '24:00', price: 0.0228 },
  ]

  const distributionData = [
    { name: 'Church', value: splitSettings.church, color: '#528AF3' },
    { name: 'Your Wallet', value: splitSettings.user, color: '#FF8C00' },
    { name: 'SOS Platform', value: splitSettings.sos, color: '#33BF66' },
  ]

  const transactions = [
    { type: 'Weekly Reward', amount: '+125.50 SOSF', time: '2 hours ago', status: 'completed' },
    { type: 'Church Donation', amount: '-62.75 SOSF', time: '2 hours ago', status: 'completed' },
    { type: 'Weekly Reward', amount: '+118.25 SOSF', time: '1 week ago', status: 'completed' },
    { type: 'Swap to USDC', amount: '-250.00 SOSF', time: '2 weeks ago', status: 'completed' },
    { type: 'Stake Deposit', amount: '-500.00 SOSF', time: '3 weeks ago', status: 'completed' },
  ]

  const handleSplitChange = (type: 'church' | 'user' | 'sos', value: number) => {
    const newSplit = { ...splitSettings, [type]: value }
    const total = newSplit.church + newSplit.user + newSplit.sos
    
    if (total === 100) {
      setSplitSettings(newSplit)
    }
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">SOSF Token Manager</h2>
          <p className="text-xl text-white/60">Full control of your faith rewards and giving</p>
        </motion.div>

        {!walletConnected ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass-card p-12">
              <Wallet className="w-16 h-16 text-sos-orange-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Connect Your Wallet</h3>
              <p className="text-white/60 mb-8">
                Connect your self-custody wallet to manage your SOSF tokens, adjust giving splits, 
                and access advanced features. SOS never holds your funds.
              </p>
              <div className="space-y-4">
                <button 
                  onClick={() => setWalletConnected(true)}
                  className="w-full py-3 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-xl text-white font-semibold button-glow"
                >
                  Connect MetaMask
                </button>
                <button className="w-full py-3 glass-card rounded-xl text-white font-semibold hover:bg-white/10 transition-colors">
                  Connect WalletConnect
                </button>
                <button className="w-full py-3 glass-card rounded-xl text-white font-semibold hover:bg-white/10 transition-colors">
                  Connect Coinbase Wallet
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Balance & Price */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Portfolio Overview</h3>
                  <div className="flex items-center space-x-2 text-sos-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+4.38%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">SOSF Balance</p>
                    <p className="text-3xl font-bold">1,247.83</p>
                    <p className="text-white/40 text-sm">$28.64</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">Current Price</p>
                    <p className="text-3xl font-bold">$0.0228</p>
                    <p className="text-sos-green-500 text-sm">+4.38% (24h)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">Next Payout</p>
                    <p className="text-3xl font-bold">5.53</p>
                    <p className="text-white/40 text-sm">SOSF in 3 days</p>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={priceData}>
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#FF8C00" 
                      strokeWidth={2}
                      dot={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1A1F38', 
                        border: '1px solid #ffffff20',
                        borderRadius: '8px'
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Contribution Split Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChartRecharts>
                        <PieChartRecharts
                          data={distributionData}
                          cx={100}
                          cy={100}
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {distributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </PieChartRecharts>
                        <Tooltip />
                      </PieChartRecharts>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Church: {splitSettings.church}%</span>
                        <span className="text-xs text-sos-blue-400">St. Peter's Church</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="80"
                        value={splitSettings.church}
                        onChange={(e) => handleSplitChange('church', Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Your Wallet: {splitSettings.user}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="80"
                        value={splitSettings.user}
                        onChange={(e) => handleSplitChange('user', Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">SOS Platform: {splitSettings.sos}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-lg">
                        <div 
                          className="h-2 bg-sos-green-500 rounded-lg"
                          style={{ width: `${splitSettings.sos}%` }}
                        />
                      </div>
                      <p className="text-xs text-white/40 mt-1">Platform fee (fixed at 20%)</p>
                    </div>
                    <button className="w-full py-3 bg-sos-blue-500 rounded-lg text-white font-semibold hover:bg-sos-blue-600 transition-colors">
                      Update Split (Effective Next Epoch)
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Transaction History</h3>
                <div className="space-y-4">
                  {transactions.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${tx.status === 'completed' ? 'bg-sos-green-500' : 'bg-sos-yellow-500'}`} />
                        <div>
                          <p className="font-semibold">{tx.type}</p>
                          <p className="text-xs text-white/60">{tx.time}</p>
                        </div>
                      </div>
                      <span className={`font-semibold ${tx.amount.startsWith('+') ? 'text-sos-green-500' : 'text-white'}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 glass-card rounded-lg text-white hover:bg-white/10 transition-colors">
                  View All Transactions
                </button>
              </div>
            </motion.div>

            {/* Actions Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-lg text-white font-semibold button-glow flex items-center justify-center space-x-2">
                    <ArrowUpDown className="w-4 h-4" />
                    <span>Swap SOSF</span>
                  </button>
                  <button className="w-full py-3 bg-sos-blue-500 rounded-lg text-white font-semibold hover:bg-sos-blue-600 transition-colors flex items-center justify-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Stake Tokens</span>
                  </button>
                  <button className="w-full py-3 bg-sos-green-500 rounded-lg text-white font-semibold hover:bg-sos-green-600 transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Donate Now</span>
                  </button>
                  <button className="w-full py-3 glass-card rounded-lg text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Weekly Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-white/60">Focus Minutes</span>
                    <span className="font-semibold">287</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-white/60">SOSF Earned</span>
                    <span className="font-semibold text-sos-green-500">125.50</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-white/60">Church Share</span>
                    <span className="font-semibold text-sos-blue-400">62.75</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-white/60">Your Share</span>
                    <span className="font-semibold text-sos-orange-400">37.65</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Claims Center</h3>
                <p className="text-sm text-white/60 mb-4">
                  No pending claims. All payouts have been successfully distributed.
                </p>
                <button className="w-full py-2 glass-card rounded-lg text-white text-sm hover:bg-white/10 transition-colors">
                  Check for Failed Payouts
                </button>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Export Data</h3>
                <div className="space-y-3">
                  <button className="w-full py-2 glass-card rounded-lg text-white text-sm hover:bg-white/10 transition-colors">
                    Download CSV Report
                  </button>
                  <button className="w-full py-2 glass-card rounded-lg text-white text-sm hover:bg-white/10 transition-colors">
                    Generate Tax Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TokenManager