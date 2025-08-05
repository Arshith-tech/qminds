'use client';

import { useEffect, useState } from 'react';
import { Users, Target, Eye, Award, Heart, Shield, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const timeline = [
    {
      year: '2023',
      title: 'Qminds Founded',
      description: 'Established by a visionary with 18+ years in data and AI, driven by passion for transformative technology.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Extended operations across India, US, and Mexico, building world-class AI expertise.'
    },
    {
      year: '2025',
      title: 'Next-Gen Impact',
      description: 'Empowering businesses worldwide with cutting-edge AI solutions and measurable ROI.'
    }
  ];

  const values = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Strategic Impact',
    description: 'Empowering businesses to transform GenAI ideas into real, scalable value through actionable roadmaps and proven expertise.',
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Client Partnership',
    description: 'Your goals drive our mission. We collaborate closely to deliver measurable ROI and sustainable success in every engagement.',
    color: 'from-purple-600 to-purple-800'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Responsible Innovation',
    description: 'We champion ethical, transparent, and accountable AI solutions, building trust through fairness and integrity.',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Practical Innovation',
    description: 'Blending advanced GenAI research with pragmatic execution to accelerate adoption and democratize AI for all.',
    color: 'from-cyan-600 to-cyan-800'
  }
];

  const teamMembers = [
    {
      role: 'AI Strategy Leaders',
      description: 'Visionary strategists with deep industry knowledge and proven track records.',
      count: '5+'
    },
    {
      role: 'ML Engineers',
      description: 'Expert practitioners in PyTorch, TensorFlow, and advanced ML frameworks.',
      count: '8+'
    },
    {
      role: 'Data Scientists',
      description: 'Analytics experts specializing in predictive modeling and statistical analysis.',
      count: '6+'
    },
    {
      role: 'GenAI Specialists',
      description: 'Cutting-edge practitioners in LLMs, RAG systems, and generative AI applications.',
      count: '4+'
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 particle-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Qminds</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            We believe in quality over quantity. Our approach is anchored in bringing a select group of bright minds to the table—experts who excel in AI and GenAI skills and work hand-in-hand with business teams to address challenges and deliver innovative, practical solutions. This commitment to excellence ensures that every project we undertake is tailored, impactful, and drives measurable value for our clients.
          </p>
        </div>
      </section>

      {/* Brand Story Timeline */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Our <span className="text-blue-400">Journey</span>
          </h2>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-3xl font-bold text-blue-400">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower organizations worldwide with AI as a transformative mindset, 
                  delivering measurable impact through strategic innovation and ethical technology implementation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:glow-purple">
              <CardContent className="p-8 text-center">
                <Eye className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in AI consultancy, recognized for transforming businesses 
                  across India, US, and Mexico through next-generation artificial intelligence solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-glow">
            Our <span className="text-purple-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            A select group of world-class AI minds. Quality over quantity—each expert brings 
            deep specialization and proven track record in their domain.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect group text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{member.count}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{member.role}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Our <span className="text-blue-400">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect group"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-gray-900 particle-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Trusted by <span className="text-purple-400">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Our clients span across industries, from Fortune 500 companies to innovative startups, 
            all united by their vision to transform through AI.
          </p>
          
          <Card className="bg-gray-800/50 border-gray-700  transition-all duration-300 ">
            <CardContent className="p-8">
              <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <blockquote className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                "Quality over quantity—each project delivers measurable ROI and transformative impact. 
                Our partnerships are built on trust, expertise, and shared vision for the future."
              </blockquote>
              <div className="text-blue-400 font-semibold">— Qminds Leadership Team</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}