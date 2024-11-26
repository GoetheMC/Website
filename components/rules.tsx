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
    title: "§1 Allgemein",
    content: `
1. Regeln unter dem Reiter „Allgemein“ sind auf alle Aspekte des Servers zu beziehen.
2. Mit dem Beitreten des Servers akzeptiert jeder Spieler / jede Spielerin die Regeln und verpflichtet sich diese zu befolgen. 
3. Jegliche Formen von Hacks oder Bug-Abusing sind untersagt.
    `,
  },
  {
    title: "§1.1 Chat-Regeln",
    content: `
1.	Jede*r hat das Recht im Chat teilzunehmen, solange folgende Kriterien befolgt werden.
2.	Beleidigungen sind unter keinen Umständen akzeptiert und werden nie als Spaß wahrgenommen.
3.	Jegliche Form von Diskriminierung wird nicht toleriert. (darunter bspw. Rassismus, Antisemitismus, Mobbing usw…)
4.	Das mehrfache Senden der gleichen oder ähnlicher Nachrichten in einem kurzen Zeitraum ist untersagt.
5.	Jeglicher Spam wird nicht geduldet.
6.	Nachrichten sollten keine Themen wie Drogen, Sex, Gewalt, Hass oder Politik beinhalten.
7.	Wenn ein Teammitglied (spricht Admin, Owner, Builder oder Dev) dich darum bittet die Themen deiner Chatbeiträge zu ändern, hast du dieser Bitte zu folgen. 
8.	Das Senden von Links die zu einer Seite führt die NSFW oder diskriminierende Inhalte zeigt oder anbietet oder die zum Scam ihrer Nutzer dient ist nicht gestattet.
9.	Jegliche Formen der Werbung sind verboten.
10.	Das Nötigen eines anderen Spielers etwas zu tun ist nicht erlaubt.
11.	Das Verbreiten von jeglichen Falschinformationen ist untersagt.
    `,
  },
  {
    title: "§1.2 Beitrittsberechtigung:",
    content: `
1.	Alle Schüler*innen und ehemalige Schüler*innen des Goethe-Gymnasium-Lichterfelde haben das Recht unter Einhaltung der Regeln auf dem GoetheMC Server zu spielen.
2.	Niemand hat das Recht die IP-Adresse des Goethe Schulservers an schulfremde Personen weiterzugeben. 
3.	Wenn ein Teammitglied (spricht Admin, Owner, Builder oder Dev) dir suspekt gegenüber ist, ob du ein (ehemaliger) Schüler oder eine (ehemalige) Schülerin des Goethe-Gymnasiums-Lichterfelde ist hat er das Recht dich nach einem Nachweis zu fragen, wie bspw. Schülerausweis, schul E-Mail, SchulCloud account usw… Ist man nicht in der Lage nachzuweisen das man der Schule angehört ist mit einem Ban zu rechnen. 
4.	Bei persönlicher Anfrage an das Serverteam kann über eine Spielberechtigung einer schulfremden Person nachgedacht werden.

    `,
  },
  {
    title: "§1.3 Konsequenzen",
    content: `
1.	Bei Missachtung einer oder mehreren Regeln hat das Serverteam ohne eine ausführliche Begründung jederzeit das Recht den Nutzern von dem kompletten Server zu bannen oder zu kicken.
2.	Die Dauer eines Bans ist vorher nicht festgelegt und kann individuell von dem Teammitglied basierend auf der Tat entschieden werden. 
3.	Jeder Spieler / jede Spielerin hat das Recht nach einem ausführlicheren Grund im Fall eines Bannes zu fragen. 
4.	Jeder Spieler / jede Spielerin hat das Recht im Fall eines Bannes einen Entbannungsantrag zu stellen. 
5.	Mitglieder des Serverteams dürfen sich kurzzeitig vorbehalten Spieler bei Verdacht eines Regelverstoßes oder bei einer individuellen Einschätzung der „Tat“ welche ggf. nicht im Regelwerk aufgeführt ist zu bannen oder zu kicken. 
6.	Bei einer nicht so gravierenden Missachtung der Chat-Regeln kann mit einem Chat Bann zu rechnen sein, ein Bann vom Netzwerk ist jedoch nicht auszuschließen. 
    `,
  },
  {
    title: "§2 Regeln für den Survival-Server",
    content: `
1.	Regeln unter dem Reiter „SMP“ sind auf alle Aspekte des Survival Bereichs des Servers zu beziehen. 
2.	Bei dem Beschriften von Schildern, Benennen von Gegenständen oder dem Bauen von Schriftzügen gelten die gleichen Regeln wie für den Chat. (dies gilt ebenfalls für den PVP-Sektor des Servers)
    `,
  },
  {
    title: "§2.1 Bauen",
    content: `
1.	Die Regeln unter dem Reiter „Bauen“ gelten ebenfalls für den PVP-Sektor des Servers.
2.	Kein Spieler darf Symbole, Orte oder Gebäude Bauen, welche als diskriminierend wahrgenommen werden können.
3.	Kein Spieler darf etwas bauen, was etwas mit Drogen, Sex, Gewalt, Hass oder Politik zu tun hat. 
4.	Das Bauen von tragischen Ereignissen der Geschichte ist untersagt. 
5.	Jedem Bauwerk sollte irgendwie ein Maß von Schönheit abgewonnen werden können (heißt es ist untersagt bspw. Riesige Netherrack Würfel zu bauen)
6.	Ein Bauwerk was den alleinigen Grund hat, anderen Spieler zu nerven, ist untersagt.
7.	Das Bauen von jeglichen Lags verursachenden Gebilden ist verboten.
8.	Eine Verunstaltung der Landschaft in der Nähe des Spawnes wird nicht geduldet.
9.	Das bebauen / abbauen oder verunstalten von anderen Grundstücken ist nicht erlaubt.
    `,
  },
  {
    title: "§2.2 PVP",
    content: `
1.	Man darf andere Spieler nur angreifen oder töten, wenn diese damit einverstanden sind.
2.	Falls man von einer anderen Person angegriffen wird, darf man diese ebenfalls angreifen, ohne die Erlaubnis dieser Person zu bekommen.
3.	Man darf keine Spieler indirekt töten, heißt bspw. über das Schupsen ins Void über das Platzieren von Lava usw…
4.	Jegliche Formen von tödlichen Spawn-Traps sind untersagt.
    `,
  },
  {
    title: "§2.3 Items",
    content: `
1.	Man darf unter keinen Umständen Items aus den Kisten / Öfen und anderen Behältnissen von anderen Spielern nehmen.
2.	Im Falle eines Todes darf man die gedroppten Items des gestorbenen nicht für sich beanspruchen. 
3.	Man darf keine aus Versehen gedroppte Items eines anderen Spielers behalten. Darunter zählen auch bspw. abgebaute Blöcke. 
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
          <h2 className="text-3xl font-bold mb-4">Server Rules</h2>
          <p className="text-muted-foreground">
            Folge diesen Regeln um ein angenehmes Spielerlebniss zu
            gewährleisten.
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
                <AccordionContent>
                  <div className="whitespace-pre-line">{rule.content}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
