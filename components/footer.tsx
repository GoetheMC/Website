"use client";
import { useState } from "react";
import { Github } from "lucide-react";

export default function Footer() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const toggleHelpModal = () => {
    setIsHelpModalOpen(!isHelpModalOpen);
  };

  return (
    <footer className="bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GoetheMC</h3>
            <p className="text-muted-foreground">
              Trete unserer erstaunlichen Minecraft-Community bei und beginne
              dein Abenteuer noch heute!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Funktionen
                </a>
              </li>
              <li>
                <a
                  href="#rules"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Regeln
                </a>
              </li>
              <li>
                <button
                  onClick={toggleHelpModal}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt und Hilfe
                </button>
              </li>
              <li>
                <a
                  href="#discord"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Code ansehen</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/GoetheMC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} GoetheMC. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>

      {isHelpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleHelpModal}
          ></div>
          <div className="bg-black p-8 rounded-lg shadow-lg z-10">
            <h2 className="text-2xl font-bold mb-4">
              Mit was benötigst du Hilfe?
            </h2>
            <button
              onClick={toggleHelpModal}
              className="mt-4 px-4 py-2 bg-primary text-black rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
