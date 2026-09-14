import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTY_TYPES } from "@/lib/constants";

async function getFeatured() {
  return prisma.property.findMany({
    where: { featured: true },
    include: { images: { orderBy: { position: "asc" }, take: 1 } },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
}

async function getLatestPosts() {
  return prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 3,
  });
}

export default async function HomePage() {
  const [featured, posts] = await Promise.all([getFeatured(), getLatestPosts()]);

  return (
    <div>
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Un_aper%C3%A7u_de_la_ville_de_conakry.jpg"
            alt="Vue aérienne de Conakry, capitale de la Guinée"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/40" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container-page relative z-10 flex flex-col gap-6 py-20 md:py-28">
          <span className="w-fit rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            Pensé pour la diaspora guinéenne en Europe
          </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            Investissez au pays, en toute confiance
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Terrains, maisons, appartements et boutiques vérifiés en Guinée.
            Kalil Immo vous accompagne à distance, de la sélection du bien
            jusqu&apos;à la signature.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/showroom"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dark hover:text-white"
            >
              Voir le showroom
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Publier une annonce
            </Link>
          </div>
        </div>

        <a
          href="https://commons.wikimedia.org/wiki/File:Un_aper%C3%A7u_de_la_ville_de_conakry.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-3 z-10 text-[10px] text-white/40 transition hover:text-white/70"
        >
          Photo : Alpha hmd / Wikimedia Commons (CC BY-SA 4.0)
        </a>
      </section>

      <section className="border-b border-border bg-white py-10">
        <div className="container-page grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PROPERTY_TYPES.slice(0, 4).map((t) => (
            <Link
              key={t.value}
              href={`/showroom?type=${t.value}`}
              className="rounded-lg border border-border p-4 text-center transition hover:border-primary hover:bg-primary-soft"
            >
              <span className="text-sm font-semibold text-ink">{t.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink">Biens à la une</h2>
            <p className="mt-1 text-ink-soft">
              Une sélection de biens vérifiés, prêts pour votre projet.
            </p>
          </div>
          <Link href="/showroom" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            Voir tout le showroom →
          </Link>
        </div>

        {featured.length === 0 ? (
          <p className="mt-8 text-ink-soft">Aucun bien à la une pour le moment.</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <div className="mt-8 sm:hidden">
          <Link href="/showroom" className="text-sm font-semibold text-primary hover:underline">
            Voir tout le showroom →
          </Link>
        </div>
      </section>

      <section className="bg-primary-soft py-16">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-ink">Biens vérifiés</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Chaque annonce est contrôlée : titre foncier, photos récentes et
              informations vérifiées avant publication.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">Accompagnement à distance</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Visites filmées, suivi de dossier et mise en relation avec des
              notaires de confiance, où que vous soyez en Europe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">Un seul contact</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Un formulaire simple par annonce pour être recontacté rapidement
              par notre équipe basée à Conakry.
            </p>
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="container-page py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-ink">Conseils &amp; actualités</h2>
            <Link href="/blog" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
              Voir le blog →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:shadow-md"
              >
                {post.coverImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="aspect-[16/10] w-full object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-semibold text-ink group-hover:text-primary">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="line-clamp-3 text-sm text-ink-soft">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
