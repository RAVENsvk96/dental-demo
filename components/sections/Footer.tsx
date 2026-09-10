import Logo from "@/components/ui/Logo";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo className="h-16 w-auto" priority={false} />

          <p className="mt-5 max-w-xl text-sm leading-6 text-muted">
            Ukážkový webový koncept vytvorený Samuelom Zelískom. Nejde o
            skutočnú zubnú ambulanciu ani ponuku zdravotnej starostlivosti.
          </p>
        </div>

        <a
          href="https://www.samuelzeliska.sk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-cyan-300"
        >
          www.samuelzeliska.sk
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="border-t border-border px-6 py-5 text-center text-sm text-muted">
        © {new Date().getFullYear()} Samuel Zelíska · Portfolio demo projekt
      </div>
    </footer>
  );
}
