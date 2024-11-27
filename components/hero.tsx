"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
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
  {
    url: "https://i.imgur.com/2UFjaDm.jpg",
    alt: "Muss noch was hinzugefügt werden",
  },
  {
    url: "https://imgur.com/kMDjvCj.jpg",
    alt: "New Image 1",
  },
  {
    url: "https://imgur.com/cmK1cbN.jpg",
    alt: "New Image 2",
  },
  {
    url: "https://imgur.com/TNCNjDe.jpg",
    alt: "New Image 3",
  },
  {
    url: "https://imgur.com/QlQhmaY.jpg",
    alt: "New Image 4",
  },
  {
    url: "https://imgur.com/iCBuhg4.jpg",
    alt: "New Image 5",
  },
];

function useBackgroundColor() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkBackgroundColor = () => {
      const backgroundColor = getComputedStyle(document.body).backgroundColor;
      const rgb = backgroundColor.match(/\d+/g);
      if (rgb) {
        const brightness =
          (parseInt(rgb[0]) * 299 +
            parseInt(rgb[1]) * 587 +
            parseInt(rgb[2]) * 114) /
          1000;
        setIsDark(brightness < 128);
      }
    };

    checkBackgroundColor();
    window.addEventListener("resize", checkBackgroundColor);
    return () => window.removeEventListener("resize", checkBackgroundColor);
  }, []);

  return isDark;
}

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomImage, setRandomImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );
  const serverIP = "b-sz-ggyl.logoip.de:25577";
  const bedrockIP = "b-sz-ggyl.logoip.de";
  const bedrockPort = "25577";
  const isDark = useBackgroundColor();

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast.success("Server IP copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const copyBedrockIP = () => {
    navigator.clipboard.writeText(`${bedrockIP}:${bedrockPort}`);
    setCopied(true);
    toast.success("Bedrock IP and port copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative">
      <Image
        src={GoetheLogo}
        alt="GoetheMC Logo"
        width={100}
        height={100}
        className={`absolute top-4 left-4 z-10 ${isDark ? "invert" : ""}`}
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
          <div className="flex space-x-4">
            <Button onClick={toggleModal} size="lg" variant="outline">
              Ich nutze Bedrock
            </Button>
            <Button size="lg" asChild>
              <a href="#features">Features erkunden</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#discord">Discord joinen</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="bg-black p-8 rounded-lg shadow-lg z-10">
            <h2 className="text-2xl font-bold mb-4">Bedrock Server Info</h2>
            <p className="mb-2">
              <strong>IP:</strong> {bedrockIP}
            </p>
            <p className="mb-4">
              <strong>Port:</strong> {bedrockPort}
            </p>
            <Button onClick={copyBedrockIP} variant="outline" size="lg">
              IP und Port kopieren
            </Button>
            <Button
              onClick={toggleModal}
              variant="outline"
              size="lg"
              className="mt-4 ml-4"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
