import Card from "../components/Card";

// eslint-disable-next-line react/prop-types
export default function Sample() {
  const cards = [
    {
      heading: "Mechanical Electrical & Plumbing (MEP)",
      description:
        "Comprehensive MEP solutions ensuring optimal performance and safety in all projects.",
    },
    {
      heading: "Structured Cabling (Telecommunication)",
      description:
        "High-quality cabling services to support robust communication infrastructure.",
    },
    {
      heading: "Security System",
      description:
        "Advanced security systems designed to safeguard your premises and personnel.",
    },
    {
      heading: "Audio & Visual System",
      description:
        "Top-tier AV systems that provide a seamless experience for presentations and events.",
    },
    {
      heading: "Fire Alarm System",
      description:
        "Reliable fire alarm installations to ensure safety and compliance with regulations.",
    },
    {
      heading: "HVAC, Demolition, Lighting Protection",
      description:
        "Comprehensive HVAC, demolition, and lightning protection services for various projects.",
    },
  ];

  return (
    <section id="services" className="pt-20 bg-slate-100 flex flex-col gap-8">
      <h1 className="text-center text-headerBlue text-4xl font-bold mb-6">
        These Are Our Services
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* eslint-disable-next-line react/prop-types */}
        {cards.map((card, index) => (
          <Card
            key={index}
            cardHeading={card.heading}
            cardDescription={card.description}
          />
        ))}
      </div>
    </section>
  );
}
