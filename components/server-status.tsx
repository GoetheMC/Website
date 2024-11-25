"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ServerStatus() {
  // Braucht fetching von API
  const serverStatus = {
    //Beispiel
    online: true,
    players: 2,
    maxPlayers: 100,
    tps: 20,
  };

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
                    />
                    <span className="text-muted-foreground">
                      {serverStatus.online ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-xl font-bold">
                        {serverStatus.players}/{serverStatus.maxPlayers}
                      </span>
                    </div>
                    <Progress
                      value={
                        (serverStatus.players / serverStatus.maxPlayers) * 100
                      }
                      className="w-32"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Spieler Online
                    </p>
                  </div>

                  <div className="text-center">
                    <span className="text-xl font-bold block mb-2">
                      {serverStatus.tps}
                    </span>
                    <p className="text-sm text-muted-foreground">TPS</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}