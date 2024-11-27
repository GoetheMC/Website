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

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const serverIP = "b-sz-ggyl.logoip.de:25577";
  const bedrockIP = "b-sz-ggyl.logoip.de";
  const bedrockPort = "25577";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast.success("Server IP copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const copyBedrockIP = () => {
    navigator.clipboard.writeText(`${bedrockIP}:${bedrockPort}`);
    toast.success("Bedrock IP and Port copied to clipboard!");
  };

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
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to GoetheMC</h1>
          <p className="text-lg mb-4">
            Join our amazing Minecraft community server!
          </p>
          <div className="relative inline-block">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button size="lg" asChild>
            <a href="#features">Features erkunden</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#discord">Discord joinen</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setIsModalOpen(true)}
          >
            Ich nutze Bedrock
          </Button>
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Bedrock Server Information
            </h2>
            <p className="mb-2">
              <strong>IP:</strong> {bedrockIP}
              <button
                onClick={copyBedrockIP}
                className="ml-2 text-blue-500 hover:underline"
              >
                <Copy className="inline h-5 w-5" />
              </button>
            </p>
            <p className="mb-4">
              <strong>Port:</strong> {bedrockPort}
            </p>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
