"use client";

import { motion } from "framer-motion";
import { Shield, Users, Sword, Map } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Anitcheat",
    description:
      "Ein unfehlbares Anticheat-System, das für ein faires Spielerlebnis sorgt",
  },
  {
    icon: Users,
    title: "Aktive Community",
    description: "Trete unserer freundlichen Community bei",
  },
  {
    icon: Sword,
    title: "Custom Plugins",
    description:
      "Eigen Programmierte Plugins, welche von Schülern entwickelt wurden",
  },
  {
    icon: Map,
    title: "Reguläre Events",
    description: "Regelmäßige Events, um das Spielerlebnis zu verbessern",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Server Features</h2>
          <p className="text-muted-foreground">
            Was macht unseren Server besonders?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-transform hover:-translate-y-1">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
