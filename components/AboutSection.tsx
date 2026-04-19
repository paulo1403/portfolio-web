"use client";

import { Award, Code, Users, Zap } from "lucide-react";

interface AboutDictionary {
  title: string;
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3?: string;
  technologies?: string[];
  highlights?: {
    exp: string;
    expDesc: string;
    modern: string;
    modernDesc: string;
    lead: string;
    leadDesc: string;
    pub: string;
    pubDesc: string;
  };
  highlightTitle?: string;
  highlightDesc?: string;
}

interface AboutSectionProps {
  dict: {
    about: AboutDictionary;
    navigation?: { about?: string };
  };
  lang: string;
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const isSpanish = dict.about?.title === "Sobre Mí";

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: dict.about?.highlights?.exp || "5+ Years Experience",
      description:
        dict.about?.highlights?.expDesc || "Frontend and Backend Development",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: dict.about?.highlights?.modern || "Modern Technologies",
      description:
        dict.about?.highlights?.modernDesc || "React, Next.js, Node.js, Python",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: dict.about?.highlights?.lead || "Technical Leadership",
      description:
        dict.about?.highlights?.leadDesc ||
        "Complex migrations and optimization",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: dict.about?.highlights?.pub || "Q2 Publication",
      description:
        dict.about?.highlights?.pubDesc || "Research in Blockchain & FHIR HL7",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="eyebrow mb-4 text-center">
            {isSpanish
              ? "Contexto y forma de trabajo"
              : "Context and working style"}
          </p>
          <h2 className="mx-auto max-w-4xl text-center text-4xl text-foreground md:text-5xl">
            {dict.about?.title || "About Me"}
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="retro-panel space-y-6 p-6 sm:p-8 lg:p-9">
            <p className="eyebrow">{isSpanish ? "Quién soy" : "Who I am"}</p>
            <h3 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              {dict.about?.subtitle || "Full Stack Software Developer"}
            </h3>
            <p className="text-lg leading-relaxed text-surface-foreground">
              {dict.about?.paragraph1}
            </p>
            {dict.about?.paragraph3 && (
              <p className="text-lg leading-relaxed text-surface-foreground">
                {dict.about?.paragraph3}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {(
                dict.about?.technologies || [
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "TypeScript",
                  "AWS",
                ]
              )
                .slice(0, 6)
                .map((tech: string) => (
                  <span
                    key={tech}
                    className="retro-chip px-4 py-2 text-sm font-bold"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="retro-panel h-full p-6">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 rounded-lg bg-primary/12 p-2 text-primary">
                      {highlight.icon}
                    </div>
                    <h4 className="text-sm font-bold text-foreground">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-sm text-surface-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="retro-panel bg-gradient-accent p-8 text-foreground">
              <p className="eyebrow text-foreground/70">
                {isSpanish ? "Punto diferenciador" : "Differentiator"}
              </p>
              <h4 className="mt-3 text-2xl font-bold text-foreground">
                {dict.about?.highlightTitle || "Key Achievement"}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-surface-foreground sm:text-lg">
                {dict.about?.highlightDesc ||
                  "My research in Blockchain and FHIR HL7 for electronic medical record interoperability was published in a Q2 international journal, demonstrating my ability to combine technology and innovation in real-impact solutions."}
              </p>
              <div className="mt-6 inline-flex rounded-full border border-foreground/20 bg-foreground/10 px-5 py-2 text-sm font-semibold text-foreground">
                DOI: 10.3991/ijoe.v20i03.44507
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
