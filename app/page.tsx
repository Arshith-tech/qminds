'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Globe, TrendingUp, Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LightRays from "@/components/ui/LightRays"; // Adjust the path as needed


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const industries = [
    'Finance', 'Legal', 'HR', 'Manufacturing', 'Retail', 'Healthcare', 'Technology', 'Education'
  ];

  const solutions = [
    {
      title: 'AI-Enabled Compliance',
      description: 'Automated regulatory compliance monitoring and reporting with real-time risk assessment.',
      tech: 'LangChain + RAG'
    },
    {
      title: 'Predictive Finance Models',
      description: 'Advanced forecasting models for revenue prediction and financial planning.',
      tech: 'PyTorch + LSTM'
    },
    {
      title: 'GenAI for HR',
      description: 'Intelligent recruitment, employee engagement, and performance analysis systems.',
      tech: 'OpenAI + Custom Models'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'ML-powered supply chain analytics for inventory management and demand forecasting.',
      tech: 'XGBoost + Databricks'
    }
  ];

  const edges = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cost & ROI-Focused Consulting',
      description: 'Measurable impact with clear ROI metrics and cost-effective AI implementations.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'End-to-End Solutioning',
      description: 'From POC to production - complete AI lifecycle management and deployment.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Expert teams across India, US, and Mexico for round-the-clock support.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Tech Stack',
      description: 'AWS Bedrock, LangChain, OpenAI, PyTorch, Databricks - cutting-edge technologies.'
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#a855f7"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={8}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />

      {/* Foreground Content */}
      <div className="relative max-w-6xl mx-auto px-4 text-center z-20">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI-Driven Innovation
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Redefining how organizations harness AI and GenAI for measurable impact.
          Founded by an 18-year IT/AI veteran, driven by passion and expertise.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full glow-effect hover:animate-pulse-glow transition-all duration-300"
        >
          <Link href="/services">
            Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </div>
    </section>

      {/* Our Edge */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Our <span className="text-purple-400">Edge</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edges.map((edge, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {edge.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{edge.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{edge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Industries <span className="text-blue-400">Served</span>
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-8 py-4"
                >
                  <span className="text-lg font-semibold text-white whitespace-nowrap">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Problem-Driven Solutions */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Problem-Driven <span className="text-purple-400">Solutions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:glow-purple group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
                      {solution.tech}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 particle-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Let's Talk <span className="text-blue-400">AI</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's discuss how Qminds can help you 
            achieve measurable impact and sustainable growth.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full glow-purple hover:animate-pulse-glow transition-all duration-300"
          >
            <Link href="/contact">
              Start Your AI Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}