import { useCallback, type MouseEvent } from "react";
import { NavLink } from "../components/NavLink";
import ThemeToggle from "./ui/ThemeToggle";
import MagneticWrapper from "./ui/MagneticWrapper";

const RESUME_URL =
  "https://drive.google.com/file/d/1gX-sFTXAlej1V4WNeRfUiya4bJIznpxV/view?usp=sharing";

const SECTIONS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const handleNavigate = useCallback((event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.replaceState(null, "", `${id}`);
  }, []);

  const handleHome = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        <MagneticWrapper strength={0.2}>
          <NavLink to="/" onClick={handleHome} className="font-mono text-base md:text-lg font-semibold">
            gaurav<span className="text-muted-foreground">()</span>
          </NavLink>
        </MagneticWrapper>
        
        <div className="hidden md:flex items-center gap-8">
          {SECTIONS.map((section) => (
            <MagneticWrapper key={section.id} strength={0.15}>
              <NavLink
                to={`/#${section.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
                onClick={(event) => handleNavigate(event, section.id)}
              >
                {section.label}
              </NavLink>
            </MagneticWrapper>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <MagneticWrapper strength={0.2}>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-sm text-foreground hover:underline cursor-pointer"
            >
              Resume
            </a>
          </MagneticWrapper>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
