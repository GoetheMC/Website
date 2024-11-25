import Hero from '@/components/hero';
import Features from '@/components/features';
import Gallery from '@/components/gallery';
import ServerStatus from '@/components/server-status';
import Rules from '@/components/rules';
import Discord from '@/components/discord';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent">
      <Navbar />
      <Hero />
      <Features />
      <ServerStatus />
      <Gallery />
      <Rules />
      <Discord />
      <Footer />
    </main>
  );
}