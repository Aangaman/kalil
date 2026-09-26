export const metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales d'Afrique Business Global : éditeur du site, hébergement, contact et propriété intellectuelle.",
};

const sections = [
  {
    title: "Éditeur du site",
    body: [
      "Le site afriquebusinessglobal.com est édité par Afrique Business Global.",
      "Siège social : Conakry, République de Guinée.",
      "Directeur de la publication : Kalil Camara, Directeur Général (CEO).",
      "Email de contact : contact@afriquebusinessglobal.com",
    ],
  },
  {
    title: "Hébergement",
    body: [
      "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
      "Site web de l'hébergeur : vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    body: [
      "L'ensemble des contenus présents sur ce site (textes, photographies, logos, mises en page) est la propriété d'Afrique Business Global ou de ses partenaires, sauf mention contraire, et est protégé par le droit de la propriété intellectuelle.",
      "Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
    ],
  },
  {
    title: "Données personnelles",
    body: [
      "Les informations transmises via les formulaires de contact du site (nom, email, téléphone, message) sont collectées uniquement dans le but de répondre à votre demande et ne sont ni cédées ni partagées avec des tiers.",
      "Pour toute question ou demande de suppression de vos données, contactez-nous à l'adresse ci-dessus.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-ink">Mentions légales</h1>
        <p className="mt-2 text-ink-soft">
          Informations légales relatives à l&apos;édition et l&apos;hébergement de ce site.
        </p>
      </div>

      <div className="mt-10 flex max-w-2xl flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold text-ink">{section.title}</h2>
            <div className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-ink-soft">
              {section.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
