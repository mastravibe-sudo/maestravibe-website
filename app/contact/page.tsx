// app/contact/page.tsx
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';
import ContactSection from '@/components/site/ContactSection';

export default function ContactPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Get In Touch"
        title="Let's start your project"
        description="Tell us about your project and our team will get back to you within one business day."
      />

      <ContactSection />

      <Footer />
    </>
  );
}