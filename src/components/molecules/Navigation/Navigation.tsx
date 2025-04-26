'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button/Button';

interface NavItem {
  label: string;
  href: string;
}

const services: NavItem[] = [
  { label: 'AI Model Automation', href: '/services/ai-automation' },
  { label: 'Cloud Computing (AWS)', href: '/services/cloud-aws' },
  { label: 'Cloud Computing (Azure)', href: '/services/cloud-azure' },
  { label: 'Python Development', href: '/services/python' },
  { label: 'React + TypeScript', href: '/services/react-typescript' },
  { label: 'Node.js Development', href: '/services/nodejs' },
  { label: 'NestJS Development', href: '/services/nestjs' },
  { label: 'Gemini AI Integration', href: '/services/gemini-ai' },
  { label: 'ChatGPT API Solutions', href: '/services/chatgpt-api' },
];

export const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">CodeBridge</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="relative">
                <button
                  className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div
                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {service.label}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                About
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link href="/schedule">
              <Button variant="primary">Schedule a Call</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 