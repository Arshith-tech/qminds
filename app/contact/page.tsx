'use client';

import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Send, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DarkVeil from '@/components/ui/DarkVeil';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    reason: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const offices = [
    {
      location: 'India',
      address: 'Bangalore, Karnataka',
      description: 'Our primary development and innovation hub',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-600 to-blue-800'
    },
    {
      location: 'United States',
      address: 'Silicon Valley, California',
      description: 'Strategic partnerships and enterprise solutions',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-600 to-purple-800'
    },
    {
      location: 'Mexico',
      address: 'Mexico City',
      description: 'Latin American operations and client services',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-600 to-indigo-800'
    }
  ];

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'lokchok.cl@gmail.com',
      href: 'mailto:lokchok.cl@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (469) 984-4414',
      href: 'tel:+14699844414'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with us',
      href: 'https://linkedin.com/company/qminds'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess('Message sent! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '', reason: '' });
      } else {
        const data = await res.json();
        setError(data?.error || 'Failed to send message. Please try again later.');
      }
    } catch (err: any) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 particle-bg overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <DarkVeil />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            Contact QMinds
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss your vision and explore 
            how QMinds can help you achieve measurable results.
          </p>
        </div>
      </section>

      {/* Contact Form and Options */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and our experts will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div>
                    <Select
                      value={formData.reason}
                      onValueChange={(value) => handleInputChange('reason', value)}
                      disabled={loading}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Reason for Contact" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="project">Project Discussion</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="training">Training & Workshops</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tell us about your AI goals and challenges..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                      required
                      disabled={loading}
                    />
                  </div>

                  {success && (
                    <div className="text-green-400 text-center">{success}</div>
                  )}
                  {error && (
                    <div className="text-red-400 text-center">{error}</div>
                  )}
                  
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white glow-effect hover:animate-pulse-glow transition-all duration-300"
                  >
                    {loading ? 'Sending...' : <>Send Message <Send className="ml-2 w-5 h-5" /></>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Options */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-glow">
                Connect With <span className="text-blue-400">Our Experts</span>
              </h2>
              
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.href}
                    target='_blank'
                    className="flex items-center space-x-4 p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:glow-effect group"
                  >
                    <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                      {option.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{option.label}</div>
                      <div className="text-gray-300">{option.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose QMinds?</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Response Time</span>
                      <span className="text-blue-400 font-semibold">&lt; 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Global Presence</span>
                      <span className="text-purple-400 font-semibold">3 Countries</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Experience</span>
                      <span className="text-blue-400 font-semibold">18+ Years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Our <span className="text-purple-400">Global Presence</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:glow-purple group text-center"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${office.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {office.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {office.location}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{office.address}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black particle-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Connect with the <span className="text-blue-400">QMinds Experts</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's shape the future together. Our AI consultants are ready to help you 
            transform your business and achieve measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full glow-effect hover:animate-pulse-glow transition-all duration-300"
            >
              <Link href="/contact">
              Start Your AI Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
