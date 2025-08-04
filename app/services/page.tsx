'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Database, Users, Cloud, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI Strategy Consulting',
      description: 'Comprehensive roadmaps tailored to your business objectives, with readiness assessments and ROI analysis.',
      features: ['Custom AI Roadmaps', 'ROI Assessments', 'Technology Planning', 'Risk Analysis'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Generative AI Solutions',
      description: 'Advanced GenAI applications including agentic RAG systems, custom models, and content automation.',
      features: ['Agentic RAG Applications', 'Custom GenAI Models', 'Content Automation', 'LLM Integration'],
      color: 'from-purple-600 to-purple-800'
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Machine Learning & Data Science',
      description: 'Scalable ML pipelines using XGBoost, LSTM, TFT with robust data engineering and analytics.',
      features: ['ML Pipeline Development', 'Predictive Analytics', 'Data Engineering', 'Model Optimization'],
      color: 'from-indigo-600 to-indigo-800'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'AI Training & Capability Building',
      description: 'Customized workshops and hands-on training programs across India, US, and Mexico.',
      features: ['Hands-on Workshops', 'GenAI Training', 'ML Bootcamps', 'Executive Briefings'],
      color: 'from-cyan-600 to-cyan-800'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'AI Deployment & Support',
      description: 'Complete cloud infrastructure setup, productionization, and 24/7 support services.',
      features: ['Cloud Infrastructure', 'Production Deployment', '24/7 Support', 'Performance Monitoring'],
      color: 'from-teal-600 to-teal-800'
    }
  ];

  const differentiators = [
    'Proven Technology Stack (AWS Bedrock, LangChain, OpenAI, PyTorch)',
    'ROI-Focused Approach with Measurable Outcomes',
    'Global Presence with Local Insights (India, US, Mexico)',
    'Ethical AI Development and Responsible Innovation',
    '18+ Years of Combined Industry Experience',
    'End-to-End Solution Delivery from POC to Production'
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 particle-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI and GenAI solutions designed to transform your business operations 
            and drive measurable growth through cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Core <span className="text-blue-400">Offerings</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {services.slice(0, 4).map((service, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Service */}
          <div className="flex justify-center">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:glow-purple group max-w-2xl">
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${services[4].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {services[4].icon}
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors duration-300">
                  {services[4].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {services[4].description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {services[4].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Qminds */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Why Choose <span className="text-purple-400">Qminds?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((differentiator, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 leading-relaxed">{differentiator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-black particle-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Ready to <span className="text-blue-400">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Book a consultation with our AI experts and discover how Qminds can help you 
            achieve measurable ROI through strategic AI implementation.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full glow-effect hover:animate-pulse-glow transition-all duration-300"
          >
            <Link href="/contact">
              Book Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}