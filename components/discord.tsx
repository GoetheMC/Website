"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Discord() {
  return (
    <section id="discord" className="py-20 px-4 bg-accent/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Trete unserer Community bei
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Trete unserer erstaunlichen Minecraft-Community bei und beginne
                dein Abenteuer noch heute!
              </p>
              <Button
                size="lg"
                className="bg-[#5865F2] hover:bg-[#4752C4]"
                asChild
              >
                <a
                  href="https://discord.gg/YkSVFZw9nv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Server joinen
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
