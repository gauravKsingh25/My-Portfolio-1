interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Dr. Odin Healthcare, Panchkula",
    role: "SDE I (Full Time)",
    period: "December 2024 - Present",
    description: [
      "Engineered a robust multi-agent orchestration engine supporting diverse AI models and roles, achieving ultra-low latency (600–800ms) and high response accuracy.",
      "Architected various Retrieval-Augmented Generation (RAG) pipelines using graph-based (Neo4j) and vector-based (Pinecone) databases for contextual reasoning.",
      "Designed a scalable microservices-based AI conversational engine for seamless real-time agent communication.",
      "Established secure, role-based authentication and authorization mechanisms for access control.",
    ],
  },
  {
    company: "Brain Mentors, Ghaziabad, UP",
    role: "SDE Intern",
    period: "March 2024 - December 2024",
    description: [
      "Resolved 50+ bugs and added 10+ features, accelerating release cycles by 20%.",
      "Participated in code reviews, resolved bugs, and integrated features under agile mentorship.",
      "Researched and debugged complex issues to ensure high-quality, timely deliveries.",
      "Collaborated with cross-functional teams to ship stable, production-ready code.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-number">02</span>
          <div className="h-px flex-1 bg-border" />
          <span className="code-tag">experience.json</span>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-border pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent ring-2 ring-border" />

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>

                <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
