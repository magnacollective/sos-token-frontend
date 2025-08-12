import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Heart, Share2, BookOpen, Calendar, MapPin, Video, MoreHorizontal, Edit, Trash2, Flag, Reply } from 'lucide-react'

const Community = () => {
  const [showComments, setShowComments] = useState<{[key: number]: boolean}>({})
  const [showPostMenu, setShowPostMenu] = useState<{[key: number]: boolean}>({})
  const [newComment, setNewComment] = useState<{[key: number]: string}>({})

  const toggleComments = (postIndex: number) => {
    setShowComments(prev => ({ ...prev, [postIndex]: !prev[postIndex] }))
  }

  const togglePostMenu = (postIndex: number) => {
    setShowPostMenu(prev => ({ ...prev, [postIndex]: !prev[postIndex] }))
  }

  const handleCommentChange = (postIndex: number, value: string) => {
    setNewComment(prev => ({ ...prev, [postIndex]: value }))
  }

  const posts = [
    {
      author: 'Pastor James',
      avatar: '🙏',
      time: '2 hours ago',
      content: 'Just completed my 100th Faith Mode session! The journey of digital discipline has brought me closer to God than ever before. Remember: every moment away from distraction is a moment closer to Him.',
      likes: 234,
      comments: 45,
      shares: 12,
      verified: true,
      commentList: [
        { author: 'Sarah M.', content: 'This is so inspiring! Thank you for sharing your journey.', time: '1 hour ago' },
        { author: 'David K.', content: 'Amen! Digital discipline has changed my life too.', time: '45 min ago' },
      ]
    },
    {
      author: 'Sarah M.',
      avatar: '✝️',
      time: '5 hours ago',
      content: 'Day 30 of my Faith Mode journey! My family has noticed such a difference during dinner time. No more phones, just genuine conversation and prayer. BASE tokens are a bonus - the real reward is connection.',
      likes: 189,
      comments: 32,
      shares: 8,
      verified: false,
      commentList: [
        { author: 'Pastor James', content: 'Beautiful testimony! Family time is so precious.', time: '3 hours ago' },
      ]
    },
    {
      author: 'Youth Group Leader',
      avatar: '🕊️',
      time: '1 day ago',
      content: 'Our entire youth group started using SOS Token last month. The transformation has been incredible! Kids are reading scripture instead of scrolling. This is the future of faith-based technology.',
      likes: 567,
      comments: 89,
      shares: 34,
      verified: true,
      commentList: [
        { author: 'Parent Leader', content: 'This is exactly what our youth needed! Amazing results.', time: '18 hours ago' },
        { author: 'Teen Member', content: 'SOS changed my relationship with my phone and God!', time: '12 hours ago' },
      ]
    },
  ]

  const events = [
    {
      title: 'Global Faith Mode Hour',
      date: 'Feb 15, 2024',
      time: '7:00 PM EST',
      participants: 2341,
      type: 'virtual'
    },
    {
      title: 'Digital Sabbath Challenge',
      date: 'Every Sunday',
      time: 'All Day',
      participants: 5678,
      type: 'recurring'
    },
    {
      title: 'Scripture & BASE Rewards',
      date: 'Feb 20, 2024',
      time: '6:00 PM PST',
      participants: 892,
      type: 'virtual'
    },
  ]

  const churches = [
    { name: 'Grace Community Church', location: 'Austin, TX', members: 342 },
    { name: 'First Baptist', location: 'Nashville, TN', members: 287 },
    { name: 'Hillside Chapel', location: 'Los Angeles, CA', members: 198 },
    { name: 'Faith Assembly', location: 'Miami, FL', members: 156 },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Join the Faith Community</h2>
          <p className="text-xl text-white/60">Connect with believers transforming their digital lives</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Community Feed</h3>
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/10 last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-sos-orange-500/20 flex items-center justify-center text-2xl">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <p className="font-semibold">{post.author}</p>
                            {post.verified && (
                              <div className="w-4 h-4 rounded-full bg-sos-blue-500 flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}
                            <span className="text-xs text-white/40">• {post.time}</span>
                          </div>
                          <div className="relative">
                            <button
                              onClick={() => togglePostMenu(index)}
                              className="p-1 rounded hover:bg-white/10 transition-colors"
                            >
                              <MoreHorizontal className="w-4 h-4 text-white/60" />
                            </button>
                            {showPostMenu[index] && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute right-0 mt-1 w-40 glass-card rounded-lg border border-white/10 shadow-lg z-10"
                              >
                                <div className="p-1">
                                  <button className="w-full px-3 py-2 text-left rounded hover:bg-white/10 transition-colors flex items-center space-x-2">
                                    <Edit className="w-3 h-3" />
                                    <span className="text-sm">Edit</span>
                                  </button>
                                  <button className="w-full px-3 py-2 text-left rounded hover:bg-white/10 transition-colors flex items-center space-x-2 text-red-400">
                                    <Trash2 className="w-3 h-3" />
                                    <span className="text-sm">Delete</span>
                                  </button>
                                  <button className="w-full px-3 py-2 text-left rounded hover:bg-white/10 transition-colors flex items-center space-x-2">
                                    <Flag className="w-3 h-3" />
                                    <span className="text-sm">Report</span>
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                        <p className="text-white/80 mb-4">{post.content}</p>
                        <div className="flex items-center space-x-6 mb-4">
                          <button className="flex items-center space-x-2 text-white/60 hover:text-sos-orange-400 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button 
                            onClick={() => toggleComments(index)}
                            className="flex items-center space-x-2 text-white/60 hover:text-sos-blue-400 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-white/60 hover:text-sos-green-500 transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span className="text-sm">{post.shares}</span>
                          </button>
                        </div>
                        
                        {/* Comments Section */}
                        {showComments[index] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-3"
                          >
                            {post.commentList.map((comment, commentIndex) => (
                              <div key={commentIndex} className="flex items-start space-x-3 bg-white/5 p-3 rounded-lg">
                                <div className="w-8 h-8 rounded-full bg-sos-blue-500/20 flex items-center justify-center text-sm">
                                  {comment.author[0]}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <p className="font-medium text-sm">{comment.author}</p>
                                    <span className="text-xs text-white/40">{comment.time}</span>
                                  </div>
                                  <p className="text-sm text-white/70">{comment.content}</p>
                                  <button className="mt-1 flex items-center space-x-1 text-xs text-white/50 hover:text-sos-orange-400 transition-colors">
                                    <Reply className="w-3 h-3" />
                                    <span>Reply</span>
                                  </button>
                                </div>
                              </div>
                            ))}
                            
                            {/* Add Comment */}
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 rounded-full bg-sos-orange-500/20 flex items-center justify-center text-sm">
                                Y
                              </div>
                              <div className="flex-1">
                                <textarea
                                  value={newComment[index] || ''}
                                  onChange={(e) => handleCommentChange(index, e.target.value)}
                                  placeholder="Add a comment..."
                                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-sos-orange-500/50"
                                  rows={2}
                                />
                                <div className="flex justify-end mt-2">
                                  <button className="px-4 py-1 bg-sos-orange-500 rounded-lg text-white text-sm hover:bg-sos-orange-600 transition-colors">
                                    Comment
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                Load More Posts
              </button>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Participating Churches</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {churches.map((church, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{church.name}</h4>
                      <Users className="w-4 h-4 text-sos-orange-400" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {church.location}
                      </span>
                      <span className="text-sos-orange-400">{church.members}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 text-white font-semibold button-glow">
                Register Your Church
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">Active Users</span>
                  <span className="text-xl font-bold">12,543</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">Churches</span>
                  <span className="text-xl font-bold">287</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">Countries</span>
                  <span className="text-xl font-bold">42</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">BASE Staked</span>
                  <span className="text-xl font-bold">3.2M</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      {event.type === 'virtual' && <Video className="w-4 h-4 text-sos-blue-400" />}
                    </div>
                    <div className="space-y-1 text-xs text-white/60">
                      <p className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </p>
                      <p>{event.time}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-sos-green-500">{event.participants} joined</span>
                      <button className="text-xs text-sos-orange-400 hover:text-sos-orange-300">
                        Join →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Daily Verse</h3>
              <div className="p-4 rounded-lg bg-sos-blue-500/10 border border-sos-blue-500/20">
                <BookOpen className="w-6 h-6 text-sos-blue-400 mb-3" />
                <p className="text-sm italic mb-3">
                  "Therefore encourage one another and build each other up, just as in fact you are doing."
                </p>
                <p className="text-xs text-sos-blue-400">1 Thessalonians 5:11</p>
              </div>
              <button className="w-full mt-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
                Share Verse
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Community