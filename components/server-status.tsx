"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServerStatus() {
  const [serverStatus, setServerStatus] = useState({
    online: false,
    players: 0,
    maxPlayers: 0,
    tps: 20,
  });

  useEffect(() => {
    async function fetchServerStatus() {
      try {
        const response = await axios.get(
          "https://api.mcstatus.io/v2/status/java/b-sz-ggyl.logoip.de:25577"
        );
        const data = response.data;

        setServerStatus({
          online: data.online,
          players: data.players.online,
          maxPlayers: data.players.max,
          tps: data.tps || 20, // Assuming TPS is provided, otherwise default to 20
        });
      } catch (error) {
        console.error("Error fetching server status:", error);
      }
    }

    fetchServerStatus();
  }, []);

  return (
    <section id="status" className="py-20 px-4 bg-accent/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">Server Status</h2>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        serverStatus.online
                          ? "bg-green-500 animate-pulse"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span>{serverStatus.online ? "Online" : "Offline"}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="inline-block mr-2" />
                  <span>
                    {serverStatus.players}/{serverStatus.maxPlayers} Players
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">TPS:</span> {serverStatus.tps}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
