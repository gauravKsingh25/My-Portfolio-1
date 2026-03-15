import Marquee from "./Marquee";
import MagneticWrapper from "./ui/MagneticWrapper";

const RESUME_URL =
  "https://drive.google.com/file/d/1gX-sFTXAlej1V4WNeRfUiya4bJIznpxV/view?usp=sharing";

 

const About = () => {
    return (
      <section id="about" className="pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            <span className="section-number text-[10px] sm:text-xs md:text-sm whitespace-nowrap">01</span>
            <div className="h-px flex-1 bg-border min-w-0" />
            <span className="code-tag text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">about.json</span>
          </div>
  
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">About Me</h2>
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p className="break-words">
                  I'm a Full Stack Developer with hands-on experience building scalable web applications
                  and AI-powered systems. I specialize in crafting clean, efficient solutions across the
                  full stack — from RESTful APIs to interactive React frontends.
                </p>
                <p className="break-words">
                  Currently working as SDE I at Dr. Odin Healthcare, I architect multi-agent AI systems,
                  RAG pipelines, and microservices-based conversational engines that power real-time workflows.
                </p>
                <p className="break-words">
                  When I'm not coding, you'll find me solving algorithmic challenges, exploring new technologies,
                  or collaborating on projects that push boundaries.
                </p>
              </div>
              <MagneticWrapper strength={0.3} className="mt-4 sm:mt-5 md:mt-6 w-fit max-w-full">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="truncate">View Resume</span>
                </a>
              </MagneticWrapper>
            </div>
  
            <div className="min-w-0 mt-6 md:mt-0">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">Tech Stack</h3>
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <div>
                  <div className="code-tag mb-1.5 sm:mb-2 w-fit text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">Programming Languages</div>
                  <Marquee
                    items={[
                      "JavaScript",
                      "C++",
                      "Java",
                      "HTML5",
                      "CSS",
                    ]}
                    initialDuplicates={2}
                  />
                </div>
  
                <div>
                  <div className="code-tag mb-1.5 sm:mb-2 w-fit text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">Frameworks & Libraries</div>
                  <Marquee
                    items={[
                      "ReactJS",
                      "NextJS",
                      "ExpressJS",
                      "Redux",
                      "NodeJS",
                    ]}
                    initialDuplicates={2}
                  />
                </div>
  
                <div>
                  <div className="code-tag mb-1.5 sm:mb-2 w-fit text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">Databases</div>
                  <Marquee
                    items={[
                      "MongoDB",
                      "PostgreSQL",
                      "Pinecone",
                      "Neo4j",
                    ]}
                    initialDuplicates={2}
                  />
                </div>

                <div>
                  <div className="code-tag mb-1.5 sm:mb-2 w-fit text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">Software & Tools</div>
                  <Marquee
                    items={[
                      "Git",
                      "VS Code",
                      "IntelliJ IDEA",
                      "Postman",
                      "MongoDB Compass",
                    ]}
                    initialDuplicates={2}
                  />
                </div>

                <div>
                  <div className="code-tag mb-1.5 sm:mb-2 w-fit text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">Concepts & Expertise</div>
                  <Marquee
                    items={[
                      "DSA",
                      "OOP",
                      "DBMS",
                      "REST APIs",
                      "Networking",
                      "OS",
                    ]}
                    initialDuplicates={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  