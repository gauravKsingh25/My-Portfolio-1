import { Github, Mail, Linkedin } from "lucide-react";
import MagneticWrapper from "./ui/MagneticWrapper";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-number">04</span>
          <div className="h-px flex-1 bg-border" />
          <span className="code-tag">contact.json</span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out if you want to connect!
          </p>

          <div className="space-y-4">
            <MagneticWrapper strength={0.25}>
              <a
                href="mailto:gauravsingh10.vns@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">gauravsingh10.vns@gmail.com</div>
                </div>
              </a>
            </MagneticWrapper>

            <div className="flex gap-4 pt-4">
              <MagneticWrapper strength={0.5}>
                <a
                  href="https://github.com/gauravKsingh25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </MagneticWrapper>
              <MagneticWrapper strength={0.5}>
                <a
                  href="https://linkedin.com/in/gs2107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border">
          <div className="flex justify-end text-sm text-muted-foreground">
            <div className="font-mono">© 2026 Gaurav Kumar Singh. All rights reserved.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
