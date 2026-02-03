import Link from "next/link";
import { Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Terminal className="h-3.5 w-3.5" />
              </span>
              <span>© {currentYear} Yakindario.</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a
                href="https://github.com/yakindario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/yakindario/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a
                href="https://x.com/yakindario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
