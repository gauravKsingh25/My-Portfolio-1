export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

interface RawProject {
  id: string;
  name: string;
  description: string;
  tools: string;
  website: string;
  github?: string;
}

const rawProjects: RawProject[] = [
  {
    id: "0",
    name: "Share Task",
    description:
      "Collaborative task-sharing platform with secure user access, view-only mode for anonymous viewers, and an analytics dashboard for productivity tracking and insights.",
    tools: "ReactJS, NodeJS, MongoDB, ExpressJS",
    website: "",
    github: "",
  },
  {
    id: "1",
    name: "Quiz Generator",
    description:
      "Full-stack quiz platform with secure user authentication, flexible quiz creation supporting 3 question formats, and shareable quiz links for enhanced accessibility.",
    tools: "NextJS, NodeJS, PostgreSQL, RESTful APIs",
    website: "",
    github: "",
  },
  {
    id: "2",
    name: "Medi-Connect",
    description:
      "Comprehensive appointment booking platform using the MERN stack, catering to both patients and doctors. Provides dedicated dashboards for patients to book, manage, and view appointments, and for doctors to manage schedules, view patient details, and track appointments.",
    tools: "ReactJS, NodeJS, ExpressJS, MongoDB, JWT, REST APIs",
    website: "",
    github: "https://github.com/gauravKsingh25/medi-connect",
  },
  {
    id: "3",
    name: "Multi-Tenant RAG Document Intelligence Platform",
    description:
      "Engineered a scalable AI-powered document intelligence system that performs document parsing, semantic search, and template automation using Retrieval-Augmented Generation (RAG). Built with multi-tenant architecture to support separate knowledge bases, contextual querying, and LLM-driven workflow automation.",
    tools:
      "Python, FastAPI, Next.js, React, Gemini 1.5 Flash, Vector Embeddings, ChromaDB/Pinecone, Retrieval-Augmented Generation (RAG), Multi-Tenant Architecture, Semantic Search, Document Parsing, Template Automation, Async Processing",
    website: "",
    github: "https://github.com/gauravKsingh25/my-own-rag",
  },
  {
    id: "4",
    name: "Travel Log",
    description:
      "Built a production-grade travel intelligence platform on the MERN stack with itinerary planning, geo-tagged trip journaling, collaborative sharing, and analytics dashboards. Implemented modular APIs, optimized document modeling for large activity feeds, and end-to-end state management for real-time travel timeline updates.",
    tools:
      "MongoDB, ExpressJS, ReactJS, NodeJS, JWT Authentication, REST APIs, Role-Based Access Control, Aggregation Pipelines",
    website: "",
    github: "https://github.com/gauravKsingh25/travel-log",
  },
];

const splitTools = (tools: string): string[] =>
  tools
    .split(",")
    .map((tool) => tool.trim().replace(/\.$/, ""))
    .filter(Boolean);

export const projects: Project[] = [...rawProjects]
  .sort((a, b) => Number.parseInt(b.id, 10) - Number.parseInt(a.id, 10))
  .map(({ tools, website, ...rest }) => ({
    name: rest.name,
    description: rest.description,
    tech: splitTools(tools),
    github: rest.github,
    demo: website,
  }));
