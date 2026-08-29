import Reveal from "@/components/Reveal";
import type { Lang } from "@/lib/i18n";

type SroField = {
  step: string;
  title: string;
  text: string;
  fields: string;
};

const UI: Record<
  Lang,
  { eyebrow: string; title: string; elements: SroField[] }
> = {
  de: {
    eyebrow: "SRO als maschinenlesbarer Export",
    title: "Die Entscheidung als vollständiges, verlustfreies Objekt.",
    elements: [
      {
        step: "01",
        title: "Anforderungen",
        text: "Was gefordert ist, strukturiert und normalisiert.",
        fields:
          "Erfasste Felder: Use Case, Vin, Vout, Pout, Isolation, Ziel-Wirkungsgrad, Leistungsdichte, Kühlkonzept, Normen, Umgebung.",
      },
      {
        step: "02",
        title: "Kandidaten & Herleitung",
        text: "Die bewerteten Technologiepfade – jeder mit der Begründung, warum er wie abschneidet, zurückführbar auf Regeln und Modelle.",
        fields:
          "Je Kandidat: Technologiepfad, Bewertung pro Kriterium, Trade-offs, Verweis auf Regel und Modell.",
      },
      {
        step: "03",
        title: "Offene Entscheidungen",
        text: "Punkte, an denen mehrere Pfade zulässig bleiben – bewusst nicht aufgelöst, sondern dem Ingenieur vorgelegt.",
        fields:
          "Je Eintrag: konkurrierende Pfade, auslösendes Zielkonflikt-Paar, Grund der Nicht-Auflösung.",
      },
      {
        step: "04",
        title: "Eskalation an den Menschen",
        text: "Stellen, an denen Unsicherheit oder Konflikt eine Schwelle überschreiten und eine menschliche Entscheidung verlangen.",
        fields:
          "Je Eintrag: betroffenes Kriterium, Art der Unsicherheit, überschrittene Schwelle, geforderte Prüfung.",
      },
      {
        step: "05",
        title: "Annahmen",
        text: "Was angenommen wurde, wo Daten fehlten – explizit, nicht implizit.",
        fields:
          "Je Annahme: getroffene Annahme, betroffene Größe, Grund (fehlende Daten / Vereinfachung).",
      },
      {
        step: "06",
        title: "Provenance",
        text: "Woher jede Aussage stammt – Quelle, Regel, Modellversion, Zeitpunkt.",
        fields: "Je Aussage: Quelle, angewandte Regel, Modellversion, Stand/Zeitpunkt.",
      },
    ],
  },
  en: {
    eyebrow: "SRO as a machine-readable export",
    title: "The decision as a complete, lossless object.",
    elements: [
      {
        step: "01",
        title: "Requirements",
        text: "What is required, structured and normalized.",
        fields:
          "Captured fields: use case, Vin, Vout, Pout, isolation, target efficiency, power density, cooling concept, standards, environment.",
      },
      {
        step: "02",
        title: "Candidates & Derivation",
        text: "The assessed technology paths – each with the reasoning for how it performs, traceable to rules and models.",
        fields:
          "Per candidate: technology path, assessment per criterion, trade-offs, reference to rule and model.",
      },
      {
        step: "03",
        title: "Open Decisions",
        text: "Points where several paths remain valid – deliberately left unresolved and put to the engineer.",
        fields:
          "Per entry: competing paths, the conflicting objectives behind it, reason for non-resolution.",
      },
      {
        step: "04",
        title: "Escalation to the Human",
        text: "Points where uncertainty or conflict crosses a threshold and calls for a human decision.",
        fields:
          "Per entry: affected criterion, type of uncertainty, threshold crossed, review required.",
      },
      {
        step: "05",
        title: "Assumptions",
        text: "What was assumed where data was missing – made explicit, not left implicit.",
        fields:
          "Per assumption: the assumption made, the quantity affected, reason (missing data / simplification).",
      },
      {
        step: "06",
        title: "Provenance",
        text: "Where every statement comes from – source, rule, model version, point in time.",
        fields: "Per statement: source, rule applied, model version, timestamp.",
      },
    ],
  },
};



/**
 * Structured Requirement Object: sechs Bestandteile als abgerundete Karten.
 */
export default function SroObject({ lang }: { lang: Lang }) {
  const ui = UI[lang];

  return (
    <div className="rounded-3xl border border-brand-navy/8 bg-surface-light p-6 sm:p-10">
      <div className="mb-8 sm:mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
          {ui.eyebrow}
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
          {ui.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {ui.elements.map((el, i) => (
          <Reveal key={el.step} delay={i * 0.05}>
            <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center font-display text-sm font-bold text-brand-cyan shrink-0">
                  {el.step}
                </span>
                <h4 className="font-display text-base font-bold text-brand-navy leading-tight">
                  {el.title}
                </h4>
              </div>
              <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{el.text}</p>
              <p className="font-sans text-xs text-brand-navy/55 leading-relaxed mt-4 pt-4 border-t border-brand-navy/8">
                {el.fields}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
