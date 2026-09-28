import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/constants";

export const metadata = {
  title: "Maison préfabriquée — Afrique Business Global",
  description:
    "Un module fabriqué en atelier, posé sur votre terrain en Guinée en quelques semaines. Design contemporain, structure bois et acier, livrée clé en main.",
};

const FEATURES = [
  {
    image: "/images/AdobeStock_572213533.jpeg",
    title: "Vivre dehors comme dedans",
    text: "Larges baies vitrées, terrasse intégrée, matériaux nobles : chaque module est pensé comme un lieu de vie, pas comme un chantier temporaire.",
    reverse: false,
  },
  {
    image: "/images/maison-prefabriquee1.jpg",
    title: "Une enveloppe qui dure",
    text: "Façade vitrée haute performance, ossature acier et bois, isolation renforcée pour résister durablement au climat guinéen.",
    reverse: true,
  },
  {
    image: "/images/AdobeStock_572213490.jpeg",
    title: "Un design signé",
    text: "Lignes épurées, bois naturel, toiture affleurante : une architecture qui ne ressemble à rien d'autre sur le marché guinéen.",
    reverse: false,
  },
];

const STEPS = [
  {
    number: "01",
    title: "Conception",
    text: "Un plan adapté à votre terrain, vos besoins et votre budget.",
  },
  {
    number: "02",
    title: "Fabrication en atelier",
    text: "Chaque module est construit hors site, sous contrôle qualité strict.",
    image: "/images/construction2.jpeg",
  },
  {
    number: "03",
    title: "Transport & levage",
    text: "Acheminement et pose par grue, directement sur vos fondations.",
    image: "/images/construction1.jpeg",
  },
  {
    number: "04",
    title: "Finitions & remise des clés",
    text: "Raccordements, finitions et remise des clés, prête à habiter.",
  },
];

const SPECS = [
  { label: "Surface", value: "À partir de 60 m²" },
  { label: "Structure", value: "Ossature bois & acier" },
  { label: "Délai", value: "8 à 12 semaines" },
  { label: "Fondations", value: "Plots ou dalle légère" },
  { label: "Isolation", value: "Haute performance, climat tropical" },
  { label: "Finitions", value: "Livrée clé en main" },
];

export default function MaisonPrefabriqueePage() {
  return (
    <div className="bg-white">
      <section className="relative flex h-[92vh] min-h-[640px] items-end overflow-hidden bg-[#04101f] text-white">
        <Image
          src="/images/AdobeStock_572213490.jpeg"
          alt="Maison préfabriquée moderne en bois, posée face aux montagnes"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-[#04101f]/30 to-black/10" />

        <div className="container-page relative z-10 flex flex-col gap-6 pb-20 pt-10">
          <span className="w-fit rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-md">
            Nouveau
          </span>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            La maison préfabriquée.
          </h1>
          <p className="max-w-xl text-lg text-white/80 md:text-xl">
            Conçue en atelier. Assemblée en Guinée. Prête à vivre en quelques semaines.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dark hover:text-white"
            >
              Demander un devis
            </Link>
            <Link
              href="/showroom?type=prefabriquee"
              className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Voir les biens disponibles
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-28 md:py-36">
        <Reveal>
          <p className="max-w-4xl text-3xl font-semibold leading-snug tracking-tight text-ink md:text-5xl">
            Chaque module est fabriqué en atelier, contrôlé au millimètre,{" "}
            <span className="text-ink-soft">
              puis acheminé et posé sur votre terrain. Le résultat : une maison au design
              contemporain, livrée dans un temps record.
            </span>
          </p>
        </Reveal>
      </section>

      {FEATURES.map((feature) => (
        <section key={feature.title} className="border-t border-border">
          <div
            className={`container-page grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28 ${
              feature.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                {feature.title}
              </h2>
              <p className="mt-4 max-w-md text-lg text-ink-soft">{feature.text}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-primary-soft py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
              De l&apos;atelier à votre terrain.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <div className="flex flex-col gap-4">
                  {step.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(min-width: 768px) 25vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-primary-dark/5">
                      <span className="text-5xl font-bold text-primary/30">{step.number}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
                      {step.number}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Caractéristiques
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mt-12 grid gap-x-10 gap-y-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
              {SPECS.map((spec) => (
                <div key={spec.label} className="border-b border-border pb-6">
                  <dt className="text-sm text-ink-soft">{spec.label}</dt>
                  <dd className="mt-1 text-xl font-semibold text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#04101f] py-24 text-white md:py-32">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-[130px]" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-[130px]" />

        <div className="container-page relative z-10 flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Prête à construire votre projet ?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-lg text-lg text-white/75">
              Un échantillon, un devis, ou une visite filmée sur site : notre équipe à Conakry
              vous accompagne à chaque étape.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dark hover:text-white"
              >
                Demander un devis
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
