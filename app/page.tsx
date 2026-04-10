import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Stats from '@/components/Stats';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Coverage from '@/components/Coverage';
import CtaBanner from '@/components/CtaBanner';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatButton from '@/components/FloatButton';

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Stats />
        <Fleet />
        <Testimonials />
        <Coverage />
        <CtaBanner />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatButton />
    </>
  );
}
