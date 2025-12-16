"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoBillboardSplitImage from '@/components/sections/hero/HeroLogoBillboardSplitImage';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="radialGradient"
      cardStyle="shadow-colored"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Models", id: "products" },
            { name: "About Us", id: "about" },
            { name: "Services", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885722587-xh9552ep.jpg"
          logoAlt="Dealership Logo"
          brandName="AutoElite"
          button={{ text: "Schedule Test Drive", href: "#contact" }}
          buttonClassName="text-sm font-semibold"
        />
      </div>

      <div id="hero" data-section="hero" className="relative overflow-hidden">
        <HeroLogoBillboardSplitImage
          logoText="AUTOELITE"
          description="Discover your perfect vehicle. Premium selection of luxury and performance cars with transparent pricing, flexible financing, and exceptional service. Drive home today."
          buttons={[
            { text: "View Inventory", href: "#products" },
            { text: "Get Financing", href: "#contact" }
          ]}
          layoutOrder="default"
          splitImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885724057-c52aabbi.jpg"
          splitImageAlt="Premium luxury vehicle showcase"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885725124-w0iic1h9.jpg"
          imageAlt="Modern automotive showroom"
          frameStyle="browser"
          className="w-full"
          containerClassName="px-6 py-16 md:py-24"
          descriptionClassName="text-lg md:text-3xl font-lora text-foreground"
          buttonClassName="font-semibold text-sm md:text-base"
          buttonTextClassName="font-bold"
        />
      </div>

      <div id="about" data-section="about" className="relative bg-gradient-to-r from-background to-background-accent/10">
        <TagAbout
          tag="Who We Are"
          description="AutoElite has been serving automotive enthusiasts for over 15 years. We believe in transparency, quality, and customer satisfaction. Every vehicle in our showroom is carefully inspected and certified, backed by our comprehensive warranty. We don't just sell cars; we build lasting relationships with our customers through honest pricing, expert guidance, and ongoing support."
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="px-6 py-16 md:py-20"
          tagClassName="font-semibold"
          descriptionClassName="font-lora text-foreground"
        />
      </div>

      <div id="features" data-section="features" className="relative">
        <FeatureCardSix
          title="Our Complete Service Promise"
          description="From initial selection to long-term ownership support"
          tag="Process"
          features={[
            {
              id: "1",
              title: "Expert Vehicle Inspection",
              description: "Every vehicle undergoes rigorous multi-point inspection and certification by our certified technicians to ensure premium quality and reliability.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885726411-09dau3x9.jpg"
            },
            {
              id: "2",
              title: "Flexible Financing Options",
              description: "Work with our financial specialists to find the perfect loan terms. We partner with multiple lenders to get you the best rates available.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885727466-vke2hv7z.jpg"
            },
            {
              id: "3",
              title: "White Glove Delivery",
              description: "Receive your new vehicle with comprehensive orientation. We ensure you're completely comfortable with all features and controls.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885728627-7bink4ds.jpg"
            },
            {
              id: "4",
              title: "Lifetime Support & Warranty",
              description: "Extended warranty coverage, free maintenance plans, and dedicated support throughout your ownership journey.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885730084-m76og6ul.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="px-6 py-16 md:py-24"
          textBoxTitleClassName="font-bold text-3xl md:text-4xl"
          textBoxDescriptionClassName="text-base md:text-lg text-foreground/80"
          cardTitleClassName="font-bold text-xl"
          cardDescriptionClassName="text-sm md:text-base text-foreground/75"
        />
      </div>

      <div id="products" data-section="products" className="relative bg-background">
        <ProductCardFour
          title="Featured Inventory"
          description="Premium selection of certified pre-owned and new vehicles"
          tag="Available Now"
          products={[
            {
              id: "1",
              name: "Luxury Sedan Pro",
              price: "$52,500",
              variant: "Pearl White | 2 Available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885731755-1aqnuirn.jpg",
              imageAlt: "Luxury sedan vehicle"
            },
            {
              id: "2",
              name: "Premium SUV Max",
              price: "$68,900",
              variant: "Midnight Black | 1 Available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885733190-ujl15jyk.jpg",
              imageAlt: "Premium SUV vehicle"
            },
            {
              id: "3",
              name: "Performance Sports",
              price: "$89,000",
              variant: "Racing Red | 3 Available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885734276-adspb67l.jpg",
              imageAlt: "Sports performance car"
            },
            {
              id: "4",
              name: "Ultra Luxury Edition",
              price: "$125,000",
              variant: "Silver Metallic | 1 Available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885735184-rvs3q06k.jpg",
              imageAlt: "Ultra luxury vehicle"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="px-6 py-16 md:py-24"
          textBoxTitleClassName="font-bold text-3xl md:text-4xl"
          textBoxDescriptionClassName="text-base md:text-lg text-foreground/80"
          cardNameClassName="font-semibold text-lg"
          cardPriceClassName="font-bold text-primary-cta text-xl"
          cardVariantClassName="text-sm text-foreground/60"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="relative bg-card">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885736590-tsuch6jd.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885737768-ypfqprem.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "3",
              name: "James Wilson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885738923-lck7kfwn.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885739799-7ssawf95.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "5",
              name: "David Kumar",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885740970-tuvbnqrg.jpg",
              imageAlt: "David Kumar"
            },
            {
              id: "6",
              name: "Lisa Anderson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885742142-95pdgrai.jpg",
              imageAlt: "Lisa Anderson"
            }
          ]}
          cardTitle="Over 5,000+ satisfied customers trust AutoElite for their automotive needs"
          cardTag="Customer Reviews"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="px-6 py-16 md:py-24"
          cardTitleClassName="font-lora font-bold text-2xl md:text-3xl"
          cardTagClassName="font-semibold text-sm"
        />
      </div>

      <div id="faq" data-section="faq" className="relative">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about purchasing, financing, and ownership"
          tag="Help & Support"
          faqs={[
            {
              id: "1",
              title: "What is your return or exchange policy?",
              content: "We offer a 30-day satisfaction guarantee on all certified pre-owned vehicles. If you're not completely satisfied, we'll exchange it for another vehicle or provide a full refund. New vehicles follow manufacturer guidelines."
            },
            {
              id: "2",
              title: "Do you offer financing options?",
              content: "Yes, we work with multiple lending partners to provide competitive financing rates. Our financial specialists can help you explore options for various credit profiles, including flexible terms and down payment alternatives."
            },
            {
              id: "3",
              title: "What warranty coverage is included?",
              content: "All certified pre-owned vehicles come with a 3-year/36,000-mile powertrain warranty plus 5-year free maintenance. New vehicles include manufacturer warranty plus our extended coverage options."
            },
            {
              id: "4",
              title: "How often should I service my vehicle?",
              content: "We recommend following the manufacturer's maintenance schedule. For most vehicles, that's every 6 months or 10,000 kilometers. Our service team can create a personalized maintenance plan for your specific vehicle."
            },
            {
              id: "5",
              title: "Can I trade in my current vehicle?",
              content: "Absolutely! We offer competitive trade-in valuations on any vehicle in any condition. Our team will assess your vehicle and provide a fair market value estimate within 24 hours."
            },
            {
              id: "6",
              title: "What documents do I need to purchase a vehicle?",
              content: "You'll need a valid driver's license, proof of insurance, and proof of income (for financed purchases). Our sales team will guide you through the entire documentation process to ensure everything is handled smoothly."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          className="w-full"
          containerClassName="px-6 py-16 md:py-24"
          textBoxTitleClassName="font-bold text-3xl md:text-4xl"
          textBoxDescriptionClassName="text-base md:text-lg text-foreground/80"
          accordionTitleClassName="font-semibold text-lg"
        />
      </div>

      <div id="contact" data-section="contact" className="relative bg-gradient-to-b from-background to-card">
        <ContactCenterForm
          title="Schedule Your Test Drive Today"
          description="Connect with our team to find your perfect vehicle. Fill out the form below and we'll contact you within 24 hours."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "preferredModel", type: "text", placeholder: "Preferred Vehicle Model", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your ideal vehicle or any questions...", rows: 5, required: true }}
          useInvertedBackground="noInvert"
          buttonText="Schedule Test Drive"
          className="w-full"
          containerClassName="px-6 py-16 md:py-24"
          titleClassName="font-bold text-3xl md:text-4xl font-lora"
          descriptionClassName="text-base md:text-lg text-foreground/80"
          buttonClassName="font-semibold text-base"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Explore",
              items: [
                { label: "New Inventory", href: "products" },
                { label: "Certified Pre-Owned", href: "products" },
                { label: "Financing", href: "contact" },
                { label: "Services", href: "features" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact Us", href: "contact" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Warranty Info", href: "#" },
                { label: "Maintenance Schedule", href: "#" },
                { label: "Contact Support", href: "contact" }
              ]
            }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765885722587-xh9552ep.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 AutoElite. All rights reserved. | Privacy Policy | Terms of Service"
          className="w-full"
          containerClassName="px-6 py-12"
          columnTitleClassName="font-bold text-base"
          columnItemClassName="text-sm text-foreground/70 hover:text-primary-cta"
          copyrightTextClassName="text-xs text-foreground/60"
        />
      </div>
    </ThemeProvider>
  );
}