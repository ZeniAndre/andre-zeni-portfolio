import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Linkedin, Github, MapPin, Phone, ExternalLink, Download, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import dashboardExample from './assets/dashboard-example.jpg'
import dataVisualization from './assets/data-visualization.png'
import techBackground from './assets/tech-background.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const skills = [
    'SQL', 'SAS', 'Salesforce', 'Big Query', 'Excel', 'Power BI', 
    'Python', 'Data Analysis', 'ETL Design', 'Dashboard Development',
    'KPI Analysis', 'Project Management', 'Business Intelligence'
  ]

  const projects = [
    {
      title: 'SME Sales Pipeline Optimization',
      description: 'Developed comprehensive ETL processes and interactive dashboards for a $200M annual revenue SME segment, implementing segmentation models and forecasting analytics.',
      technologies: ['SQL', 'SAS', 'Power BI', 'CRM Analytics'],
      image: dashboardExample,
      achievements: ['Optimized sales pipeline management', 'Implemented customer retention models', 'Created profitability analysis frameworks']
    },
    {
      title: 'Cloud Computing Performance Analytics',
      description: 'Designed advanced dashboards for key client portfolios, measuring segmented sales campaigns performance and conversion rates to guide commercial strategies.',
      technologies: ['Big Query', 'Data Visualization', 'Campaign Analytics'],
      image: dataVisualization,
      achievements: ['Monitored KPIs including sales and conversion rates', 'Developed weekly action plans', 'Improved customer satisfaction (NPS) tracking']
    },
    {
      title: 'Retail Performance Management System',
      description: 'Led strategic sales campaigns implementation with structured training programs, delivering comprehensive performance analysis and team coordination.',
      technologies: ['Excel', 'KPI Dashboards', 'Performance Analytics'],
      image: techBackground,
      achievements: ['Achieved sales targets through data-driven strategies', 'Implemented continuous operational improvements', 'Enhanced team performance tracking']
    }
  ]

  const experience = [
    {
      title: 'Business Development',
      company: 'KOFE Advertising',
      period: 'Jun 2023 - Mar 2024',
      location: 'Sydney, Australia',
      type: 'Self-Employed',
      responsibilities: [
        'Pipeline Management to achieve growth targets and market trend analysis',
        'Multi-channel prospecting including cold emailing, calls, LinkedIn and Social Ads',
        'Proposal creation and tailored solutions per client needs with post-sales support'
      ]
    },
    {
      title: 'Retail Manager',
      company: 'Oakley - Flagship George Street',
      period: 'May 2021 - Jul 2023',
      location: 'Sydney, Australia',
      responsibilities: [
        'Performance Analysis: Monitoring KPIs such as sales, conversion rates, customer satisfaction (NPS)',
        'Team Coordination & Project Management: Leading strategic sales campaigns and structured trainings',
        'Process Management & Optimisation: Implementing continuous operational improvements driven by data insights'
      ]
    },
    {
      title: 'Business Analyst Sr | Planning DA',
      company: 'Serasa Experian',
      period: 'Nov 2013 - Jan 2018',
      location: 'São Paulo, Brazil',
      responsibilities: [
        'SME Strategy Planning: Optimisation & management of sales pipeline for $200M annual revenue segment',
        'Reports & Dashboards Development: ETL process development using MS SQL and SAS',
        'Process Management & Optimisation: Cross-functional coordination with multiple departments'
      ]
    },
    {
      title: 'Data Analyst II | Cloud Computing',
      company: 'A5 Solutions',
      period: 'Dec 2011 - Oct 2013',
      location: 'São Paulo, Brazil',
      responsibilities: [
        'Cloud Contact Center (CCaaS) Management: Designing advanced dashboards for key client portfolios',
        'Data analysis to measure segmented sales campaigns performance and evaluate conversion rates',
        'Commercial strategies guidance through comprehensive data insights'
      ]
    }
  ]

  const education = [
    {
      degree: 'Google Data Analytics Professional Certificate',
      institution: 'Google',
      period: 'In Progress – March 2025',
      status: 'current'
    },
    {
      degree: 'Diploma in Community Services & Counselling',
      institution: 'Australian Learning Group',
      period: '2021/2024',
      location: 'Australia'
    },
    {
      degree: 'Diploma in Project Management',
      institution: 'Australian Pacific College',
      period: '2019/2021',
      location: 'Australia'
    },
    {
      degree: 'MBA – Executive Finance',
      institution: 'FIPE',
      period: '2016/2017',
      location: 'Brazil'
    },
    {
      degree: 'Diploma in Marketing',
      institution: 'UNINOVE',
      period: '2007/2011',
      location: 'Brazil'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-slate-900 dark:text-white"
            >
              Andre Zeni
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Andre Zeni
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8 font-semibold">
              Data Analyst & Business Intelligence Specialist
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              9+ years of experience in Sales & Strategy with expertise in ETL design, dashboard development, 
              and data-driven decision making. Specialized in transforming complex data into actionable business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                  Transforming Data into Strategic Insights
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  With over 9 years of experience in sales and strategy, I've developed a unique perspective on how data drives business success. 
                  My journey has taken me from Brazil to Australia, working with diverse teams and adapting to international environments.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  I specialize in ETL design, dashboard development, and turning complex datasets into actionable business intelligence. 
                  My approach combines technical expertise with strategic thinking to deliver solutions that drive real business value.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Sydney, Australia
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    +61 7 44 42 06 62
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={techBackground} 
                  alt="Data Analytics Visualization" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Data Management & ETL</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'SAS', 'Big Query', 'Salesforce'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Reporting & Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Power BI', 'Excel', 'Dashboard Development', 'KPI Analysis'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Business & Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Project Management', 'Business Intelligence', 'Data Analysis', 'Process Optimization'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Featured Projects</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl text-slate-900 dark:text-white mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="mb-4">
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-blue-600 text-blue-600">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Achievements:</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                              {project.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <CardTitle className="text-xl text-slate-900 dark:text-white">
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {job.company} {job.type && `(${job.type})`}
                          </CardDescription>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            {job.period}
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            {job.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start">
                            <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`border-0 shadow-lg ${edu.status === 'current' ? 'ring-2 ring-blue-500' : ''}`}>
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {edu.degree}
                        {edu.status === 'current' && (
                          <Badge className="ml-2 bg-blue-600 text-white">In Progress</Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">{edu.period}</span>
                        {edu.location && (
                          <span className="text-sm text-slate-500 dark:text-slate-400">{edu.location}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Get In Touch</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
                I'm always interested in new opportunities and collaborations. 
                Let's discuss how we can work together to turn data into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => window.open('mailto:afszeni@gmail.com')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3"
                  onClick={() => window.open('https://www.linkedin.com/in/andre-zeni-fs1991', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
              <div className="mt-8 flex justify-center space-x-8 text-slate-600 dark:text-slate-300">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  afszeni@gmail.com
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  +61 7 44 42 06 62
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 Andre Zeni. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

