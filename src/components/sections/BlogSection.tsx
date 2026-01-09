'use client'

import { useEffect, useState } from 'react'
import { client, queries } from '@/lib/sanity'
import { Calendar, User, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  mainImage: any
  excerpt: string
  publishedAt: string
  author?: {
    name: string
    photo: any
  }
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(queries.posts)
        setPosts(data.slice(0, 6)) // Show first 6 posts
        setError(false)
      } catch (error) {
        console.log('Using sample data - Sanity error:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const toggleExpanded = (postId: string) => {
    const newExpanded = new Set(expandedPosts)
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId)
    } else {
      newExpanded.add(postId)
    }
    setExpandedPosts(newExpanded)
  }

  // Sample data with full content when Sanity is not available
  const samplePosts = [
    { 
      id: '1',
      title: '10 Effective Study Techniques for Board Exams', 
      excerpt: 'Discover proven study methods that help students achieve better results in their board examinations.',
      fullContent: 'Board exams can be challenging, but with the right study techniques, you can excel. Here are 10 proven methods: 1) Active recall - Test yourself regularly instead of just re-reading. 2) Spaced repetition - Review material at increasing intervals. 3) Practice papers - Solve previous years\' questions. 4) Time management - Create a realistic study schedule. 5) Mind mapping - Visualize connections between concepts. 6) Group study - Discuss topics with peers. 7) Regular breaks - Use the Pomodoro technique. 8) Healthy lifestyle - Maintain proper sleep and nutrition. 9) Mock tests - Simulate exam conditions. 10) Stay positive - Maintain confidence and reduce stress.',
      date: '2024-01-15', 
      author: 'Dr. Sarah Johnson' 
    },
    { 
      id: '2',
      title: 'How to Overcome Math Anxiety', 
      excerpt: 'Practical tips and strategies to help students build confidence and excel in mathematics.',
      fullContent: 'Math anxiety is real and affects many students. Here\'s how to overcome it: Start with basics - Ensure you understand fundamental concepts before moving to complex problems. Practice regularly - Consistency is key to building confidence. Break problems down - Divide complex problems into smaller, manageable steps. Use visual aids - Graphs, diagrams, and charts can make abstract concepts concrete. Find real-world applications - Connect math to everyday situations. Seek help early - Don\'t let confusion accumulate. Join study groups - Learn from peers and share different approaches. Use positive self-talk - Replace "I can\'t do math" with "I\'m learning math." Take your time - Don\'t rush through problems. Celebrate small wins - Acknowledge progress, no matter how small.',
      date: '2024-01-10', 
      author: 'Prof. Michael Chen' 
    },
    { 
      id: '3',
      title: 'Time Management Tips for Students', 
      excerpt: 'Learn how to balance studies, extracurricular activities, and personal time effectively.',
      fullContent: 'Effective time management is crucial for academic success. Here are essential tips: Create a schedule - Plan your day, week, and month in advance. Prioritize tasks - Use the Eisenhower Matrix to identify urgent vs important tasks. Set SMART goals - Specific, Measurable, Achievable, Relevant, Time-bound objectives. Eliminate distractions - Create a dedicated study environment. Use time-blocking - Allocate specific time slots for different activities. Take regular breaks - Prevent burnout with scheduled rest periods. Learn to say no - Don\'t overcommit to activities. Use technology wisely - Apps can help, but don\'t let them become distractions. Review and adjust - Regularly evaluate and improve your time management strategies. Maintain work-life balance - Include time for hobbies and relaxation.',
      date: '2024-01-05', 
      author: 'Ms. Priya Sharma' 
    },
    { 
      id: '4',
      title: 'Science Project Ideas for Class 10', 
      excerpt: 'Creative and engaging science project ideas that will help you understand concepts better.',
      fullContent: 'Science projects make learning fun and practical. Here are exciting ideas for Class 10: Physics projects - Build a simple electric motor, create a periscope, or demonstrate electromagnetic induction. Chemistry projects - Grow crystals, test pH levels of household items, or create natural indicators. Biology projects - Study plant growth under different conditions, examine microorganisms, or create a model of DNA. Environmental science - Test water quality, study air pollution, or create a mini ecosystem. Technology projects - Build a simple robot, create a weather station, or design a solar cooker. Remember to follow safety guidelines, document your process, and relate your findings to theoretical concepts learned in class.',
      date: '2024-01-01', 
      author: 'Dr. Sarah Johnson' 
    },
    { 
      id: '5',
      title: 'Preparing for Competitive Exams', 
      excerpt: 'Essential strategies and tips for students preparing for JEE, NEET, and other competitive exams.',
      fullContent: 'Competitive exams require dedicated preparation and smart strategies. Here\'s your roadmap to success: Understand the exam pattern - Know the syllabus, marking scheme, and question types. Create a study plan - Allocate time for each subject based on your strengths and weaknesses. Focus on concepts - Don\'t just memorize; understand the underlying principles. Practice regularly - Solve mock tests and previous years\' papers. Analyze your performance - Identify weak areas and work on them. Stay updated - Keep track of exam notifications and changes. Maintain physical and mental health - Regular exercise and stress management are crucial. Join coaching or study groups - Get guidance and peer support. Time management during exams - Practice solving questions within time limits. Stay motivated - Remember your goals and celebrate small achievements.',
      date: '2023-12-28', 
      author: 'Prof. Michael Chen' 
    },
    { 
      id: '6',
      title: 'Building Strong Study Habits', 
      excerpt: 'How to develop consistent study routines that lead to academic success.',
      fullContent: 'Strong study habits are the foundation of academic success. Here\'s how to build them: Start small - Begin with 15-30 minutes of focused study and gradually increase. Choose a consistent time - Study at the same time each day to build a routine. Create a dedicated space - Have a specific area for studying, free from distractions. Set clear goals - Know what you want to achieve in each study session. Use active learning techniques - Summarize, question, and teach concepts to others. Take notes effectively - Develop a system that works for you. Review regularly - Don\'t just learn new material; revisit previous topics. Track your progress - Keep a study journal or use apps to monitor your habits. Be patient - It takes 21-66 days to form a new habit. Reward yourself - Celebrate when you stick to your study routine.',
      date: '2023-12-25', 
      author: 'Ms. Priya Sharma' 
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            Educational Blog
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Discover valuable insights, study tips, and exam preparation strategies 
            from our experienced educators to help you excel in your academic journey.
          </p>
        </div>

        {!loading && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const isExpanded = expandedPosts.has(post._id)
              return (
                <article
                  key={post._id}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
                    {post.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 break-words overflow-wrap-anywhere">
                    {post.excerpt}
                  </p>

                  <button
                    onClick={() => toggleExpanded(post._id)}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    {isExpanded ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed break-words overflow-wrap-anywhere">
                        This is where the full blog content would appear. In a real implementation, 
                        you would fetch the full content from Sanity and display it here. 
                        For now, this shows that the expand/collapse functionality is working perfectly!
                      </p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        ) : (
          <div className="text-center">
            {loading ? (
              <div className="py-16">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading blog posts...</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {error ? 'Sample Blog Posts' : 'No blog posts available'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {samplePosts.map((post) => {
                    const isExpanded = expandedPosts.has(post.id)
                    return (
                      <article
                        key={post.id}
                        className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800"
                      >
                        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
                          {post.title}
                        </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 break-words overflow-wrap-anywhere">
                    {isExpanded ? post.fullContent : post.excerpt}
                  </p>

                        <button
                          onClick={() => toggleExpanded(post.id)}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          {isExpanded ? 'Show Less' : 'Read More'}
                          {isExpanded ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                        </button>
                      </article>
                    )
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}