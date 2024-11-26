import Head from "next/head";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Gallery from "@/components/gallery";
import ServerStatus from "@/components/server-status";
import Rules from "@/components/rules";
import Discord from "@/components/discord";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>GoetheMC - Minecraft Server</title>
        <meta name="description" content="Trete noch heute dem GoetheMC bei!" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="GoetheMC - Minecraft Server" />
        <meta
          property="og:description"
          content="Trete noch heute dem GoetheMC bei!"
        />
        <meta property="og:image" content="https://i.imgur.com/hZxR842.png" />
        <meta property="og:url" content="https://goethemc.zacklack.de" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GoetheMC - Minecraft Server" />
        <meta
          name="twitter:description"
          content="Trete noch heute dem GoetheMC bei!"
        />
        <meta name="twitter:image" content="https://i.imgur.com/hZxR842.png" />
        <meta name="twitter:url" content="https://goethemc.zacklack.de" />
      </Head>
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
    </>
  );
}
