import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Bot, Phone, MessageCircleCode} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Node.js', level: 100 },
    { name: 'Google ADK', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'LangChain', level: 75 },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'AI Chat Interface',
      description: 'Modern chat interface with AI integration and beautiful animations',
      tech: ['React', 'TypeScript', 'Tailwind', 'OpenAI API'],
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Code className="w-16 h-16 text-purple-400" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-20 animate-ping"></div>
            </div> */}
            <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 p-1">
                    <img
                        src="ANUJ-3.JPG" 
                        alt="Your Name"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-20 animate-ping"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Anuj Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Backend & AI Engineer
            </p>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
              Crafting beautiful, functional web applications with modern technologies and thoughtful design.
            </p>
            
            <div className="flex gap-4 justify-center mb-12">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300">
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>

            <div className="flex gap-6 justify-center">
              <a href="https://github.com/anujkumar-5" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/anuj-kumar-a1214a167/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:anujkumarniranjan.ak@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Code, title: 'Development', desc: 'Full-stack web development with modern frameworks' },
                { icon: Bot, title: 'AI', desc: 'Multi AI Agents using Google ADK & LangChain' },
                { icon: Zap, title: 'Performance', desc: 'Optimized, fast, and scalable applications' }
              ].map((item, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:animate-pulse">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">Technical Skills</h3>
              <div className="max-w-2xl mx-auto space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                        <Code className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
            </p>
            
            <div className="space-y-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 text-lg px-8 py-4"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
              
              <div className="flex gap-8 justify-center pt-8 border-t border-white/10">
                <a 
                  href="https://github.com/anujkumar-5" 
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>Github</span>
                </a>
                <a 
                  href="mailto:anujkumarniranjan.ak@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Gmail</span>
                </a>

                <a 
                  href="https://wa.me/917860872523"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircleCode className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>

                <a 
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91-7860872523</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>&copy; 2025 Anuj Kumar. Built with React, TypeScript & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
