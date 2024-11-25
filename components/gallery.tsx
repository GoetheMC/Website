"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

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

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Gallerie</h2>
          <p className="text-muted-foreground">
            Schau dir unsere Serverbilder an
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
