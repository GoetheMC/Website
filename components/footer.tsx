import { Github } from "lucide-react";

export default function Footer() {
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
            <h3 className="text-lg font-semibold mb-4">Verbinden</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/your-repo"
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
    </footer>
  );
}
