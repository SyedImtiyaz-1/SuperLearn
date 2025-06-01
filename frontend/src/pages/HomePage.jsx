'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiSearch, FiBook, FiUsers, FiAward, FiLinkedin } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const features = [
  {
    name: 'Remote Job Opportunities',
    description: 'Access curated remote job listings from top companies worldwide.',
    icon: FiSearch,
  },
  {
    name: 'Structured Learning Paths',
    description: 'Follow industry-recognized learning paths to build your skills.',
    icon: FiBook,
  },
  {
    name: 'Community Support',
    description: 'Join a community of learners and professionals for guidance and networking.',
    icon: FiUsers,
  },
  {
    name: 'Career Growth',
    description: 'Track your progress and earn certifications to boost your career.',
    icon: FiAward,
  },
];

const recentJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataFlow',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    tags: ['Node.js', 'Python', 'AWS'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $140k',
    tags: ['Kubernetes', 'Docker', 'Terraform'],
  },
];

export default function HomePage() {
  const [stats, setStats] = useState({
    linkedinFollowers: 0,
    whatsappCommunity: 0,
  })

  useEffect(() => {
    fetch('/api/community-stats')
      .then(res => res.json())
      .then(data => setStats(data))
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-content dark:text-content-dark">
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span>From </span>
            <span className="text-purple-500 dark:text-purple-400">Learning</span>
            <span> to </span>
            <span className="text-secondary-600 dark:text-yellow-400">Earning</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-content-dark-muted mb-8">
            Join thousands of freshers who landed tech jobs with our entry-level opportunities, proven learning paths, and supportive community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-card p-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <FiUsers className="w-7 h-7 text-green-500 dark:text-green-400" />
                <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">Active</span>
              </div>
              <div className="text-2xl font-bold text-green-500 dark:text-green-400 mb-1">{stats.whatsappCommunity.toLocaleString()}</div>
              <div className="text-gray-600 dark:text-content-dark-muted text-sm">Other Social Community Members</div>
            </div>
            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-card p-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <FiLinkedin className="w-7 h-7 text-blue-700 dark:text-white" />
                <span className="text-xs bg-blue-100 dark:bg-dark-700 text-blue-700 dark:text-white px-2 py-0.5 rounded-full">Popular</span>
              </div>
              <div className="text-2xl font-bold text-blue-700 dark:text-white mb-1">{stats.linkedinFollowers.toLocaleString()}</div>
              <div className="text-gray-600 dark:text-content-dark-muted text-sm">LinkedIn Followers</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/jobs" className="px-6 py-3 rounded-xl bg-accent dark:bg-accent-dark text-white font-bold shadow-card hover:bg-accent-dark dark:hover:bg-accent-dark-muted hover:scale-105 transition">
              Browse Fresher Jobs →
            </Link>
            <Link href="/community" className="px-6 py-3 rounded-xl bg-secondary-600 dark:bg-secondary-700 text-white font-bold shadow-card hover:bg-secondary-700 dark:hover:bg-secondary-800 hover:scale-105 transition">
              Join Community →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card Example */}
            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-card p-8 flex flex-col items-center hover:shadow-lg transition">
              <span className="bg-primary-100 dark:bg-dark-700 p-4 rounded-xl mb-4">
                <FiArrowRight className="w-8 h-8 text-primary-600 dark:text-cyan-600" />
              </span> 
              <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Explore Jobs</div>
              <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">Entry-level tech jobs</div>
              <Link href="/jobs" className="text-accent dark:text-cyan-600 font-semibold hover:underline">Explore Now</Link>
            </div>
            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-card p-8 flex flex-col items-center hover:shadow-lg transition">
              <span className="bg-secondary-100 dark:bg-dark-700 p-4 rounded-xl mb-4">
                <FiBook className="w-8 h-8 text-secondary-600 dark:text-yellow-400" />
              </span>
              <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Open Source</div>
              <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">Guidance and Resources</div>
              <Link href="/learning" className="text-secondary-600 dark:text-yellow-400 font-semibold hover:underline">Explore Now</Link>
            </div>
            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-card p-8 flex flex-col items-center hover:shadow-lg transition">
              <span className="bg-green-100 dark:bg-dark-700 p-4 rounded-xl mb-4">
                <FiUsers className="w-8 h-8 text-green-600 dark:text-green-400" />
              </span>
              <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Community</div>
              <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">50,000+ tech freshers</div>
              <Link href="/community" className="text-green-600 dark:text-green-400 font-semibold hover:underline">Explore Now</Link>
            </div>
            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-card p-8 flex flex-col items-center hover:shadow-lg transition">
              <span className="bg-pink-100 dark:bg-dark-700 p-4 rounded-xl mb-4">
                <FiAward className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </span>
              <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Tech Roadmaps</div>
              <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">Guided career paths</div>
              <Link href="/roadmaps" className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">Explore Now</Link>
            </div>
          </div>
        </div>

        {/* 1. Developed Exclusively for Tech Enthusiasts */}
        <section className="bg-gray-50 dark:bg-dark-800 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-white dark:bg-accent-dark dark:text-white text-sm font-semibold mb-2">Why SuperLearn?</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Developed Exclusively for Tech Enthusiasts</h2>
              <p className="text-gray-600 dark:text-content-dark-muted mb-8">Our platform is built for the unique needs of tech beginners and freshers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-card p-8 flex flex-col items-center">
                <span className="bg-yellow-100 dark:bg-dark-700 p-4 rounded-full mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FDE68A"/><path d="M12 8v4l3 2" stroke="#F59E42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Built for Freshers</h3>
                <p className="text-gray-500 dark:text-content-dark-muted">Resources tailored for tech beginners and students.</p>
              </div>
              <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-card p-8 flex flex-col items-center">
                <span className="bg-blue-100 dark:bg-dark-700 p-4 rounded-full mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#DBEAFE"/><path d="M12 8v4l3 2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Curated Opportunities</h3>
                <p className="text-gray-500 dark:text-content-dark-muted">Handpicked entry-level roles from top companies.</p>
              </div>
              <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-card p-8 flex flex-col items-center">
                <span className="bg-green-100 dark:bg-dark-700 p-4 rounded-full mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#D1FAE5"/><path d="M12 8v4l3 2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Supportive Network</h3>
                <p className="text-gray-500 dark:text-content-dark-muted">Connect with peers, mentors, and hiring managers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Featured Job Cards */}
        <section className="bg-white dark:bg-dark-900 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent dark:bg-accent-dark/20 dark:text-accent-dark text-sm font-semibold mb-2">Handpicked Opportunities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Featured Fresher Jobs</h2>
              <p className="text-gray-600 dark:text-content-dark-muted">Explore top jobs for freshers and tech enthusiasts.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Example job card */}
              <div className="bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700 rounded-2xl shadow-card p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-dark-700 rounded-full flex items-center justify-center mr-3">
                    {/* Placeholder logo */}
                    <span className="text-2xl font-bold text-accent">M</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">Meteorite Consulting Front-End Intern</h3>
                    <div className="text-xs text-gray-500 dark:text-content-dark-muted">Meteorite Consulting</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="inline-flex items-center rounded-md bg-green-600 px-2 py-1 text-xs font-medium text-white">Full-time</span>
                  <span className="bg-green-100 dark:bg-dark-700 text-green-700 dark:text-green-400 px-2 py-0.5 rounded text-xs font-medium">Remote</span>
                </div>
              </div>
              {/* Repeat for more job cards, or map over jobs array */}
              <div className="bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700 rounded-2xl shadow-card p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-dark-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl font-bold text-accent">R</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">Rubrik Software Engineer UI</h3>
                    <div className="text-xs text-gray-500 dark:text-content-dark-muted">Rubrik</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-purple-100 dark:bg-dark-700 text-purple-700 dark:text-purple-400 px-2 py-0.5 rounded text-xs font-medium">Fresher</span>
                  <span className="bg-green-100 dark:bg-dark-700 text-green-700 dark:text-green-400 px-2 py-0.5 rounded text-xs font-medium">Bangalore</span>
                </div>
              </div>
              {/* ...more job cards... */}
            </div>
          </div>
        </section>

        {/* 3. Connect With Our Community */}
        <section className="bg-gray-50 dark:bg-dark-800 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-dark-700 text-green-700 dark:text-green-400 text-sm font-semibold mb-2">Join 50,000+ Tech Freshers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Connect With Our Community</h2>
            <p className="text-gray-600 dark:text-content-dark-muted mb-8">Networking is crucial for freshers. Join our platforms to connect with peers and mentors.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-green-50 dark:bg-dark-900 border border-green-100 dark:border-dark-700 rounded-2xl p-6 flex flex-col items-start">
                <span className="text-green-600 dark:text-green-400 text-2xl mb-2">💬</span>
                <h3 className="font-bold text-lg text-green-700 dark:text-green-400 mb-1">WhatsApp Community</h3>
                <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">1,506 members</div>
                <a href="https://whatsapp.com/channel/0029VaCZjes9mrGc5zhJm72E" className="text-green-700 dark:text-green-400 font-semibold hover:underline">Join Now →</a>
              </div>
              <div className="bg-blue-50 dark:bg-dark-900 border border-blue-100 dark:border-dark-700 rounded-2xl p-6 flex flex-col items-start">
                <span className="text-blue-600 dark:text-white text-2xl mb-2">🔗</span>
                <h3 className="font-bold text-lg text-blue-700 dark:text-white mb-1">LinkedIn Profile</h3>
                <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">14,003 followers</div>
                <a href="https://www.linkedin.com/in/imtiyaz-sde/" className="text-blue-700 dark:text-white font-semibold hover:underline">Join Now →</a>
              </div>
              <div className="bg-blue-50 dark:bg-dark-900 border border-blue-100 dark:border-dark-700 rounded-2xl p-6 flex flex-col items-start">
                <span className="text-blue-500 dark:text-blue-400 text-2xl mb-2">📢</span>
                <h3 className="font-bold text-lg text-blue-700 dark:text-white mb-1">Telegram Channel</h3>
                <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">2,711 subscribers</div>
                <a href="https://t.me/Imtiyaz100xCoders" className="text-blue-700 dark:text-white font-semibold hover:underline">Join Now →</a>
              </div>
              <div className="bg-purple-50 dark:bg-dark-900 border border-purple-100 dark:border-dark-700 rounded-2xl p-6 flex flex-col items-start">
                <span className="text-purple-600 dark:text-purple-400 text-2xl mb-2">🎮</span>
                <h3 className="font-bold text-lg text-purple-700 dark:text-purple-400 mb-1">Discord Server</h3>
                <div className="text-gray-500 dark:text-content-dark-muted text-sm mb-2">Coming Soon..</div>
                <a href="#" className="text-purple-700 dark:text-purple-400 font-semibold hover:underline pointer-events-none opacity-50" aria-disabled="true">Join Now →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Testimonials */}
        <section className="bg-gradient-to-r from-accent via-purple-600 to-secondary-600 dark:from-accent-dark dark:via-purple-800 dark:to-secondary-700 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-2">Fresher Success Stories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Hear From Our Members</h2>
            <p className="text-white/80 mb-8">These freshers landed their dream jobs through SuperLearn</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-left flex flex-col justify-between">
                <p className="italic text-white mb-4">“SuperLearn gave me the confidence and resources I needed to land my role at Flipkart. The mock interviews were incredibly helpful!”</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-lg font-bold text-white">A</span>
                  <div>
                    <div className="font-bold text-white">Ayesha Khan</div>
                    <div className="text-white/80 text-xs">Frontend Engineer at Flipkart</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-left flex flex-col justify-between">
                <p className="italic text-white mb-4">“The DSA practice on SuperLearn helped me crack Paytm's technical rounds. The detailed explanations made complex algorithms much easier to understand.”</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-lg font-bold text-white">S</span>
                  <div>
                    <div className="font-bold text-white">Saurabh Mehta</div>
                    <div className="text-white/80 text-xs">Backend Developer at Paytm</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-left flex flex-col justify-between">
                <p className="italic text-white mb-4">“SuperLearn's community gave me a direct referral that fast-tracked my Swiggy application. The interview prep resources are gold for any fresher!”</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-lg font-bold text-white">R</span>
                  <div>
                    <div className="font-bold text-white">Riya Sen</div>
                    <div className="text-white/80 text-xs">Product Designer at Swiggy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Company Logos */}
        <section className="bg-gray-50 dark:bg-dark-800 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-white text-sm font-semibold mb-2">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Our Members Work At</h2>
            <p className="text-gray-600 dark:text-content-dark-muted mb-8">SuperLearn alumni have secured positions at these top tech companies</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center justify-center">
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/google.com" alt="Google" className="h-10 object-contain" />
              </div>
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" className="h-10 object-contain" />
              </div>
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" className="h-10 object-contain" />
              </div>
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/meta.com" alt="Meta" className="h-10 object-contain" />
              </div>
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/ibm.com" alt="IBM" className="h-10 object-contain" />
              </div>
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/infosys.com" alt="Infosys" className="h-10 object-contain" />
              </div>
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/tcs.com" alt="TCS" className="h-10 object-contain" />
              </div>
              <div className="bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 rounded-2xl p-6 flex items-center justify-center">
                <img src="https://logo.clearbit.com/wipro.com" alt="Wipro" className="h-10 object-contain" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 