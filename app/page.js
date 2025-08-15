"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Users,
  Lock,
  Eye,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  UserCheck,
  Database,
  Cloud,
  Smartphone,
} from "lucide-react";

const LandingPage = () => {
  const [activeDemo, setActiveDemo] = useState("dashboard");

  const features = [
    {
      icon: <Shield className='h-6 w-6' />,
      title: "Multi-Factor Authentication",
      description:
        "Hardware tokens, SMS, and authenticator app support for enhanced security",
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: "Advanced User Management",
      description:
        "Bulk operations, CSV imports, and comprehensive user lifecycle management",
    },
    {
      icon: <Lock className='h-6 w-6' />,
      title: "Role-Based Access Control",
      description:
        "Granular permissions with hierarchical role management and inheritance",
    },
    {
      icon: <Eye className='h-6 w-6' />,
      title: "Comprehensive Auditing",
      description:
        "Complete audit trails with real-time monitoring and compliance reporting",
    },
    {
      icon: <Zap className='h-6 w-6' />,
      title: "Single Sign-On (SSO)",
      description: "Seamless authentication across all enterprise applications",
    },
    {
      icon: <Globe className='h-6 w-6' />,
      title: "OAuth 2.0 Compliance",
      description: "Industry-standard protocols with OpenID Connect support",
    },
  ];

  const stats = [
    {
      label: "Users Supported",
      value: "1M+",
      icon: <Users className='h-5 w-5' />,
    },
    {
      label: "Security Events/Day",
      value: "10K+",
      icon: <Shield className='h-5 w-5' />,
    },
    {
      label: "Uptime Guarantee",
      value: "99.9%",
      icon: <CheckCircle className='h-5 w-5' />,
    },
    {
      label: "Integration Ready",
      value: "50+",
      icon: <Settings className='h-5 w-5' />,
    },
  ];

  const deploymentOptions = [
    {
      title: "AWS Cloud-Native",
      description: "Fully managed cloud solution with auto-scaling",
      price: "78,750 - 119,250 SAR/year",
      features: [
        "Auto-scaling",
        "Global CDN",
        "Managed backups",
        "24/7 monitoring",
      ],
      recommended: true,
    },
    {
      title: "VPS Deployment",
      description: "Cost-effective virtual private server solution",
      price: "40,950 - 62,325 SAR/year",
      features: [
        "Full control",
        "Custom configs",
        "Local hosting",
        "Budget-friendly",
      ],
    },
    {
      title: "On-Premises VM",
      description: "Complete data sovereignty with local infrastructure",
      price: "45,000 - 68,250 SAR/year*",
      features: [
        "Data sovereignty",
        "Full customization",
        "No subscriptions",
        "Long-term savings",
      ],
      note: "*After initial setup investment",
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted'>
      {/* Navigation */}
      <nav className='bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <Shield className='h-8 w-8 text-primary' />
              <span className='ml-2 text-xl font-bold text-foreground'>
                Enterprise IAM
              </span>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
              <a
                href='#features'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                Features
              </a>
              <a
                href='#demo'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                Demo
              </a>
              <a
                href='#pricing'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                Pricing
              </a>
              <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative py-20 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <Badge className='mb-4 bg-primary/10 text-primary border-primary/20'>
                Built for Saudi Arabia
              </Badge>
              <h1 className='text-4xl lg:text-6xl font-bold text-foreground mb-6'>
                Enterprise-Grade
                <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                  {" "}
                  Identity & Access Management
                </span>
              </h1>
              <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
                Custom-built IAM solution designed specifically for Saudi
                enterprises. Secure, scalable, and compliant with local
                regulations while reducing costs by 50-60%.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <Button
                  size='lg'
                  className='bg-primary text-primary-foreground hover:bg-primary/90'
                >
                  View Live Demo <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
                <Button size='lg' variant='outline' className='border-border'>
                  Download Proposal
                </Button>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='flex items-center justify-center mb-2 text-primary'>
                      {stat.icon}
                    </div>
                    <div className='text-2xl font-bold text-foreground'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='relative'>
              <div className='bg-card rounded-2xl shadow-2xl p-6 border border-border'>
                <div className='bg-primary rounded-lg p-4 mb-4'>
                  <div className='flex items-center justify-between text-primary-foreground'>
                    <span className='font-semibold'>IAM Dashboard</span>
                    <div className='flex space-x-1'>
                      <div className='w-3 h-3 bg-primary-foreground/30 rounded-full'></div>
                      <div className='w-3 h-3 bg-primary-foreground/30 rounded-full'></div>
                      <div className='w-3 h-3 bg-primary-foreground rounded-full'></div>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-3 bg-muted rounded-lg'>
                    <div className='flex items-center space-x-3'>
                      <UserCheck className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium text-foreground'>
                        Active Users
                      </span>
                    </div>
                    <span className='text-lg font-bold text-foreground'>
                      1,247
                    </span>
                  </div>
                  <div className='flex items-center justify-between p-3 bg-muted rounded-lg'>
                    <div className='flex items-center space-x-3'>
                      <Shield className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium text-foreground'>
                        Security Events
                      </span>
                    </div>
                    <span className='text-lg font-bold text-foreground'>
                      23
                    </span>
                  </div>
                  <div className='flex items-center justify-between p-3 bg-muted rounded-lg'>
                    <div className='flex items-center space-x-3'>
                      <BarChart3 className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium text-foreground'>
                        Login Success Rate
                      </span>
                    </div>
                    <span className='text-lg font-bold text-foreground'>
                      99.8%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 bg-card'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
              Enterprise Security Features
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Comprehensive identity and access management capabilities designed
              for modern enterprises
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='border border-border hover:shadow-lg transition-shadow'
              >
                <CardHeader>
                  <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4'>
                    {feature.icon}
                  </div>
                  <CardTitle className='text-lg text-card-foreground'>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-muted-foreground'>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section
        id='demo'
        className='py-20 bg-gradient-to-br from-background via-background to-muted'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
              See It In Action
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Experience the power and simplicity of our enterprise IAM solution
            </p>
          </div>

          <Tabs
            value={activeDemo}
            onValueChange={setActiveDemo}
            className='w-full'
          >
            <TabsList className='grid w-full grid-cols-4 mb-8'>
              <TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
              <TabsTrigger value='users'>User Management</TabsTrigger>
              <TabsTrigger value='security'>Security</TabsTrigger>
              <TabsTrigger value='analytics'>Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value='dashboard' className='mt-0'>
              <Card className='border border-border'>
                <CardHeader>
                  <CardTitle className='flex items-center text-card-foreground'>
                    <BarChart3 className='mr-2 h-5 w-5' />
                    Executive Dashboard
                  </CardTitle>
                  <CardDescription>
                    Real-time overview of your identity and access management
                    system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='bg-muted rounded-lg p-6 min-h-[400px] flex items-center justify-center'>
                    <div className='text-center'>
                      <BarChart3 className='h-16 w-16 text-muted-foreground mx-auto mb-4' />
                      <h3 className='text-lg font-semibold text-foreground mb-2'>
                        Interactive Dashboard
                      </h3>
                      <p className='text-muted-foreground'>
                        Real-time metrics, user activity, and system health
                        monitoring
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='users' className='mt-0'>
              <Card className='border border-border'>
                <CardHeader>
                  <CardTitle className='flex items-center text-card-foreground'>
                    <Users className='mr-2 h-5 w-5' />
                    Advanced User Management
                  </CardTitle>
                  <CardDescription>
                    Bulk operations, CSV imports, and comprehensive user
                    lifecycle management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='bg-muted rounded-lg p-6 min-h-[400px] flex items-center justify-center'>
                    <div className='text-center'>
                      <Users className='h-16 w-16 text-muted-foreground mx-auto mb-4' />
                      <h3 className='text-lg font-semibold text-foreground mb-2'>
                        Bulk User Operations
                      </h3>
                      <p className='text-muted-foreground'>
                        Import thousands of users, manage roles, and automate
                        workflows
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='security' className='mt-0'>
              <Card className='border border-border'>
                <CardHeader>
                  <CardTitle className='flex items-center text-card-foreground'>
                    <Shield className='mr-2 h-5 w-5' />
                    Security Monitoring
                  </CardTitle>
                  <CardDescription>
                    Real-time threat detection and comprehensive audit trails
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='bg-muted rounded-lg p-6 min-h-[400px] flex items-center justify-center'>
                    <div className='text-center'>
                      <Shield className='h-16 w-16 text-muted-foreground mx-auto mb-4' />
                      <h3 className='text-lg font-semibold text-foreground mb-2'>
                        Advanced Security
                      </h3>
                      <p className='text-muted-foreground'>
                        Multi-factor authentication, threat detection, and
                        compliance reporting
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='analytics' className='mt-0'>
              <Card className='border border-border'>
                <CardHeader>
                  <CardTitle className='flex items-center text-card-foreground'>
                    <BarChart3 className='mr-2 h-5 w-5' />
                    Analytics & Insights
                  </CardTitle>
                  <CardDescription>
                    Comprehensive reporting and business intelligence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='bg-muted rounded-lg p-6 min-h-[400px] flex items-center justify-center'>
                    <div className='text-center'>
                      <BarChart3 className='h-16 w-16 text-muted-foreground mx-auto mb-4' />
                      <h3 className='text-lg font-semibold text-foreground mb-2'>
                        Business Intelligence
                      </h3>
                      <p className='text-muted-foreground'>
                        Advanced analytics, compliance reports, and actionable
                        insights
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Deployment Options */}
      <section id='pricing' className='py-20 bg-card'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
              Flexible Deployment Options
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Choose the deployment model that best fits your organization's
              needs and budget
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {deploymentOptions.map((option, index) => (
              <Card
                key={index}
                className={`border ${
                  option.recommended
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border"
                } relative`}
              >
                {option.recommended && (
                  <Badge className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground'>
                    Recommended
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className='text-xl text-card-foreground'>
                    {option.title}
                  </CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <div className='text-2xl font-bold text-foreground mt-4'>
                    {option.price}
                    {option.note && (
                      <div className='text-sm font-normal text-muted-foreground mt-1'>
                        {option.note}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3 mb-6'>
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2' />
                        <span className='text-muted-foreground'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      option.recommended
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : ""
                    }`}
                    variant={option.recommended ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-primary-foreground mb-4'>
            Ready to Transform Your Security?
          </h2>
          <p className='text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto'>
            Join leading Saudi enterprises who trust our IAM solution for their
            identity and access management needs
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-background text-foreground hover:bg-background/90'
            >
              Schedule Demo
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary'
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-secondary text-secondary-foreground py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center mb-4'>
                <Shield className='h-8 w-8 text-primary' />
                <span className='ml-2 text-xl font-bold'>Enterprise IAM</span>
              </div>
              <p className='text-muted-foreground'>
                Leading enterprise identity and access management solution built
                for Saudi Arabia.
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Product</h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Company</h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Support</h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-foreground transition-colors'
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-border mt-8 pt-8 text-center text-muted-foreground'>
            <p>
              &copy; 2025 Enterprise IAM System. All rights reserved. Built for
              Saudi Arabia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
