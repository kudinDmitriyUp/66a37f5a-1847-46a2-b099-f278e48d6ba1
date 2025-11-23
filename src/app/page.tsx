"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="AI Studio"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="AI STUDIO"
          description="Transform your business with intelligent automation. Harness the power of artificial intelligence to streamline workflows and unlock unprecedented growth."
          buttons={[
            { text: "Get Started Free", href: "contact" },
            { text: "View Demo", href: "https://www.youtube.com" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921691876-j2p4ave0.jpg",
              imageAlt: "AI technology neural networks"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921692639-6tk5feqx.jpg",
              imageAlt: "Machine learning automation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921693417-5h2p04n9.jpg",
              imageAlt: "AI innovation digital future"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About Us"
          title="Intelligent Solutions for Modern Businesses"
          description="We're pioneering the next generation of AI-powered tools designed to simplify complexity and amplify human potential. Our platform combines cutting-edge machine learning with intuitive design to deliver measurable results."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921697392-8viegdjz.jpg",
            imageAlt: "AI Studio dashboard interface"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921698203-qxgmal1x.jpg",
            imageAlt: "Mobile app user interface"
          }}
          buttons={[
            { text: "Learn More", href: "features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Powerful Features"
          description="Everything you need to automate, analyze, and optimize your business operations with AI."
          tag="Capabilities"
          features={[
            {
              id: "01",
              title: "Advanced Analytics",
              description: "Gain deep insights into your data with real-time dashboards and predictive analytics powered by machine learning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921694192-bp35re5v.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              id: "02",
              title: "Workflow Automation",
              description: "Automate repetitive tasks and streamline complex processes, freeing your team to focus on strategic work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921694991-wfujtdfm.jpg",
              imageAlt: "Automation workflow"
            },
            {
              id: "03",
              title: "Seamless Integration",
              description: "Connect with your favorite tools and platforms effortlessly. Works with your existing tech stack.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921695714-ign2z3gj.jpg",
              imageAlt: "Integration connections"
            },
            {
              id: "04",
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance with industry standards. Your data is protected with the highest security protocols.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921696483-9v7t5l8v.jpg",
              imageAlt: "Security protection"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Proven Impact"
          description="See the measurable difference AI Studio makes for businesses worldwide."
          tag="Results"
          metrics={[
            {
              id: "1",
              value: "10K+",
              description: "Active Users Worldwide"
            },
            {
              id: "2",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "42%",
              description: "Average Efficiency Increase"
            },
            {
              id: "4",
              value: "150+",
              description: "Enterprise Clients"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="scale-rotate"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Users Say"
          description="Real feedback from companies that transformed their business with AI Studio."
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahjohnson",
              testimonial: "AI Studio has been transformative for our operations. We've reduced manual data entry by 80% and our team can finally focus on strategic initiatives.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921698690-6s4pgcgg.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Marcus Chen",
              handle: "@marcuschen",
              testimonial: "The integration was seamless and the ROI was immediate. Within three months, we recovered our investment multiple times over.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921699462-zugsk7ti.png",
              imageAlt: "Marcus Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmanator",
              testimonial: "Best decision we made. The AI insights have completely changed how we approach customer engagement and personalization.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921699986-i03holkl.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidkim",
              testimonial: "Outstanding platform. The support team is responsive and the continuous improvements show they actually listen to user feedback.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921700647-qalsv9ta.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              handle: "@lisatech",
              testimonial: "Scaled our operations 3x without increasing headcount. AI Studio handles the complexity so we can focus on growth.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921701160-ywhk915j.jpg",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",
              name: "James Wilson",
              handle: "@jameswilson",
              testimonial: "The predictive analytics alone has saved us hundreds of thousands in operational costs. Incredible value proposition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921701864-ol4r6k7q.jpg",
              imageAlt: "James Wilson"
            }
          ]}
          textboxLayout="default"
          animationType="opacity"
          carouselMode="buttons"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your team. Always transparent, no hidden fees."
          tag="Plans"
          plans={[
            {
              id: "starter",
              badge: "Starter",
              price: "$99/month",
              subtitle: "Perfect for small teams getting started",
              buttons: [
                { text: "Start Free Trial", href: "contact" }
              ],
              features: [
                "Up to 5 projects",
                "Basic analytics",
                "Email support",
                "API access",
                "1 GB storage"
              ]
            },
            {
              id: "pro",
              badge: "Pro",
              price: "$299/month",
              subtitle: "For growing teams and businesses",
              badgeIcon: Sparkles,
              buttons: [
                { text: "Start Free Trial", href: "contact" }
              ],
              features: [
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "API access",
                "100 GB storage",
                "Team collaboration"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              price: "Custom",
              subtitle: "For large-scale operations",
              buttons: [
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Everything in Pro",
                "Dedicated support",
                "Custom integrations",
                "Advanced security",
                "Unlimited storage",
                "SLA guarantee"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about AI Studio."
          tag="Support"
          faqs={[
            {
              id: "1",
              title: "How quickly can I get started?",
              content: "You can be up and running in minutes. Simply sign up, connect your data sources, and our AI will begin analyzing and automating within the first hour. Most integrations take less than 30 minutes to complete."
            },
            {
              id: "2",
              title: "Is my data secure with AI Studio?",
              content: "Absolutely. We use enterprise-grade encryption, comply with GDPR and SOC 2 Type II standards, and never train our models on your data. Your information stays completely private and secure."
            },
            {
              id: "3",
              title: "What integrations do you support?",
              content: "We support 500+ integrations including Salesforce, HubSpot, Slack, Google Workspace, Microsoft Teams, and many more. If your tool isn't listed, we can create a custom integration for you."
            },
            {
              id: "4",
              title: "Can I try AI Studio for free?",
              content: "Yes! All plans come with a 14-day free trial. No credit card required. You get full access to all features so you can experience the full power of AI Studio before committing."
            },
            {
              id: "5",
              title: "What kind of support do you offer?",
              content: "We provide 24/7 support through email, chat, and phone (for Enterprise plans). Our average response time is under 2 hours, and we have dedicated success managers for Enterprise clients."
            },
            {
              id: "6",
              title: "Can I export my data anytime?",
              content: "Absolutely. Your data is yours. You can export everything in standard formats at any time, no questions asked. We make it easy to migrate away if needed."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763921705048-gaaxbrcw.jpg"
          imageAlt="Customer support"
          mediaPosition="left"
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with AI Innovations"
          description="Subscribe to our newsletter for the latest updates, industry insights, and exclusive tips on leveraging AI for your business."
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AI Studio"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Integrations", href: "features" }
              ]
            },
            {
              items: [
                { label: "About", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Docs", href: "#" },
                { label: "API", href: "#" },
                { label: "Support", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}