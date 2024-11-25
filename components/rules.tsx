"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const rules = [
  {
    title: "§1 Allgemeine Regeln",
    content: `
1. Regeln unter dem Reiter „Allgemein“ sind auf alle Aspekte des Servers zu beziehen.
2. Mit dem Beitreten des Servers akzeptiert jeder Spieler / jede Spielerin die Regeln und verpflichtet sich diese zu befolgen.
3. Jegliche Formen von Hacks oder Bug-Abusing sind untersagt.
    `,
  },
  {
    title: "§1.1 Chat-Regeln",
    content: `
1. Jeder hat das Recht, im Chat teilzunehmen, solange folgende Kriterien befolgt werden:
   - Beleidigungen sind unter keinen Umständen akzeptiert und werden nie als Spaß wahrgenommen.
   - Jegliche Form von Diskriminierung wird nicht toleriert (bspw. Rassismus, Antisemitismus, Mobbing usw.).
   - Mehrfaches Senden derselben oder ähnlicher Nachrichten in kurzer Zeit ist untersagt.
   - Spam wird nicht geduldet.
2. Nachrichten dürfen keine Themen wie Drogen, Sex, Gewalt, Hass oder Politik beinhalten.
3. Teammitglieder können verlangen, dass Chat-Themen geändert werden; diesen Anweisungen ist Folge zu leisten.
4. Links zu NSFW- oder diskriminierenden Inhalten sowie Scams sind verboten.
5. Werbung und Nötigung anderer Spieler sind nicht erlaubt.
6. Falschinformationen dürfen nicht verbreitet werden.
    `,
  },
  {
    title: "§1.2 Beitrittsberechtigung",
    content: `
1. Nur Schüler*innen und ehemalige Schüler*innen des Goethe-Gymnasium-Lichterfelde haben das Recht, den Server zu nutzen.
2. Die Weitergabe der Server-IP an schulfremde Personen ist strengstens untersagt.
3. Teammitglieder dürfen bei Verdacht Nachweise wie Schülerausweise verlangen. Wer dies nicht erbringen kann, riskiert einen Bann.
4. Auf Anfrage kann über die Spielberechtigung schulfremder Personen entschieden werden.
    `,
  },
  {
    title: "§1.3 Konsequenzen",
    content: `
1. Das Serverteam hat das Recht, Spieler bei Regelverstößen zu kicken oder zu bannen, auch ohne ausführliche Begründung.
2. Bann-Dauern sind individuell und basieren auf der Schwere des Verstoßes.
3. Spieler haben das Recht, nach einem Grund für einen Bann zu fragen und Entbannungsanträge zu stellen.
4. Bei kleineren Verstößen gegen Chat-Regeln kann ein Chat-Bann ausgesprochen werden.
    `,
  },
  {
    title: "§2 Regeln für den Survival-Server (SMP)",
    content: `
1. Die Regeln unter „SMP“ gelten für alle Aspekte des Survival-Bereichs des Servers.
2. Beim Beschriften von Schildern, Benennen von Gegenständen oder Erstellen von Schriftzügen gelten die Chat-Regeln.
    `,
  },
  {
    title: "§2.1 Bauen",
    content: `
1. Diskriminierende Symbole, Orte oder Gebäude sind untersagt.
2. Bauwerke dürfen keine Themen wie Drogen, Sex, Gewalt, Hass oder Politik darstellen.
3. Das Nachbilden tragischer Ereignisse der Geschichte ist verboten.
4. Bauwerke sollten optisch ansprechend sein; riesige Netherrack-Würfel o.Ä. sind nicht erlaubt.
5. Bauwerke, die andere Spieler stören sollen, sind untersagt.
6. Lags verursachende Gebilde sind verboten.
7. Die Landschaft in Spawn-Nähe darf nicht verunstaltet werden.
8. Andere Grundstücke dürfen nicht bebaut, abgebaut oder beschädigt werden.
    `,
  },
  {
    title: "§2.2 PVP",
    content: `
1. Spieler dürfen nur mit Zustimmung anderer angegriffen oder getötet werden.
2. Bei Angriffen darf man sich verteidigen, ohne Zustimmung einholen zu müssen.
3. Indirektes Töten (z. B. durch Lava oder Schubsen ins Void) ist untersagt.
4. Tödliche Spawn-Traps sind verboten.
    `,
  },
  {
    title: "§2.3 Items",
    content: `
1. Items aus Kisten oder anderen Behältnissen anderer Spieler dürfen nicht entnommen werden.
2. Gedroppte Items nach einem Tod dürfen nicht beansprucht werden.
3. Versehentlich gedroppte Items anderer Spieler müssen zurückgegeben werden.
    `,
  },
];

export default function Rules() {
  return (
    <section id="rules" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Server Regeln</h2>
          <p className="text-muted-foreground">
            Folge diesen Regeln, um ein angenehmes Spielerlebnis zu haben
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {rules.map((rule, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{rule.title}</AccordionTrigger>
                <AccordionContent>{rule.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
