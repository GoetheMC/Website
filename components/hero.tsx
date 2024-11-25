"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import GoetheLogo from "@/public/Goethe Logo.webp";

const images = [
  {
    url: "https://i.imgur.com/ZuoZsda.jpg",
    alt: "Muss noch was hinzugefügt werden",
  },
  {
    url: "https://i.imgur.com/ktjUqfq.jpg",
    alt: "Muss noch was hinzugefügt werden",
  },
  {
    url: "https://i.imgur.com/3iVgjHt.jpg",
    alt: "Muss noch was hinzugefügt werden",
  },
  {
    url: "https://i.imgur.com/KNrfl6T.jpg",
    alt: "Muss noch was hinzugefügt werden",
  },
  {
    url: "https://i.imgur.com/V5F6iGj.jpg",
    alt: "Muss noch was hinzugefügt werden",
  },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const serverIP = "b-sz-ggyl.logoip.de:25577";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast.success("Server IP copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Select a random image from the gallery
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative">
      <Image
        src={GoetheLogo}
        alt="GoetheMC Logo"
        width={100}
        height={100}
        className="absolute top-4 left-4 z-10"
      />
      <Image
        src={randomImage.url}
        alt={randomImage.alt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"></div>
      <div className="text-center space-y-8 max-w-4xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
        >
          Willkommen bei GoetheMC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Tritt uns noch heute bei!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <Button
              onClick={copyIP}
              variant="outline"
              size="lg"
              className="relative flex items-center gap-2 px-6 py-3 bg-background"
            >
              <span className="text-lg font-mono">{serverIP}</span>
              {copied ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Klicken Sie auf die Schaltfläche, um die Server-IP zu kopieren
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button size="lg" asChild>
            <a href="#features">Features erkunden</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#discord">Discord joinen</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
