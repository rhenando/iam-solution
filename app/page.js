"use client";

import {
  Shield,
  Users,
  Lock,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    xl: "h-14 px-12 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children, className = "" }) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
  >
    {children}
  </div>
);

export default function IAMLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Multi-layered security with WAF, DDoS protection, and enterprise-grade encryption",
    },
    {
      icon: Users,
      title: "User Management",
      description:
        "Comprehensive user lifecycle management with role-based access controls",
    },
    {
      icon: Lock,
      title: "OAuth & SSO",
      description:
        "Seamless single sign-on with OAuth 2.0 and SAML integration",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Auto-scaling infrastructure with global CDN for optimal performance",
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description:
        "Support for web, mobile, and API clients with unified experience",
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description:
        "Built-in compliance features for GDPR, SOC 2, and enterprise standards",
    },
  ];

  const benefits = [
    "Reduce security incidents by 90%",
    "Streamline user onboarding",
    "Centralized access management",
    "Real-time monitoring & analytics",
    "Seamless third-party integrations",
    "Enterprise-grade scalability",
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted'>
      {/* Navigation */}
      <nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
        <div className='container mx-auto px-4'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Shield className='h-8 w-8 text-primary' />
              <span className='text-xl font-bold text-foreground'>
                SecureIAM
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              <a
                href='#features'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Features
              </a>
              <a
                href='#benefits'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Benefits
              </a>
              <a
                href='#pricing'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Pricing
              </a>
              <Button variant='outline' size='sm'>
                Sign In
              </Button>
              <Button size='sm'>Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className='md:hidden py-4 border-t'>
              <div className='flex flex-col space-y-4'>
                <a
                  href='#features'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Features
                </a>
                <a
                  href='#benefits'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Benefits
                </a>
                <a
                  href='#pricing'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Pricing
                </a>
                <div className='flex flex-col space-y-2 pt-4'>
                  <Button variant='outline' size='sm'>
                    Sign In
                  </Button>
                  <Button size='sm'>Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
            🚀 Next-Generation IAM Solution
          </Badge>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight'>
            Secure Your Enterprise with{" "}
            <span className='text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
              Smart IAM
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed'>
            Comprehensive Identity and Access Management solution that scales
            with your business. Secure, fast, and built for the modern
            enterprise.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button size='xl' className='group'>
              Start Free Trial
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button variant='outline' size='xl'>
              Schedule Demo
            </Button>
          </div>

          <div className='mt-12 text-sm text-muted-foreground'>
            Trusted by 10,000+ enterprises worldwide
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='container mx-auto px-4 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Everything You Need for Enterprise IAM
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Built on modern architecture with security-first principles and
            enterprise scalability in mind
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50'
            >
              <div className='mb-4'>
                <feature.icon className='h-12 w-12 text-primary mb-4' />
                <h3 className='text-xl font-semibold text-foreground mb-2'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id='benefits' className='bg-muted/30 py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Why Choose SecureIAM?
              </h2>
              <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
                Join thousands of enterprises who have transformed their
                security posture with our comprehensive IAM solution.
              </p>

              <div className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <CheckCircle className='h-6 w-6 text-primary flex-shrink-0' />
                    <span className='text-foreground font-medium'>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <Card className='p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    99.99%
                  </div>
                  <div className='text-muted-foreground mb-6'>
                    Uptime Guarantee
                  </div>

                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-foreground'>
                        10K+
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Active Users
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-foreground'>
                        50ms
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Avg Response
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-foreground'>
                        24/7
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Support
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-foreground'>
                        ISO 27001
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Certified
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-20 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Ready to Secure Your Enterprise?
          </h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Join industry leaders who trust SecureIAM for their identity and
            access management needs.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='xl' className='group'>
              Start Your Free Trial
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button variant='outline' size='xl'>
              Talk to Sales
            </Button>
          </div>

          <div className='mt-8 text-sm text-muted-foreground'>
            No credit card required • 30-day free trial • Setup in minutes
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t bg-muted/20'>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <Shield className='h-6 w-6 text-primary' />
                <span className='font-bold text-foreground'>SecureIAM</span>
              </div>
              <p className='text-muted-foreground'>
                Enterprise-grade identity and access management for the modern
                world.
              </p>
            </div>

            <div>
              <h4 className='font-semibold text-foreground mb-4'>Product</h4>
              <div className='space-y-2'>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Features
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Security
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Integrations
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  API
                </a>
              </div>
            </div>

            <div>
              <h4 className='font-semibold text-foreground mb-4'>Company</h4>
              <div className='space-y-2'>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  About
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Blog
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Careers
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className='font-semibold text-foreground mb-4'>Support</h4>
              <div className='space-y-2'>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Documentation
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Help Center
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Community
                </a>
                <a
                  href='#'
                  className='block text-muted-foreground hover:text-foreground transition-colors'
                >
                  Status
                </a>
              </div>
            </div>
          </div>

          <div className='border-t mt-12 pt-8 text-center text-muted-foreground'>
            <p>&copy; 2025 SecureIAM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
