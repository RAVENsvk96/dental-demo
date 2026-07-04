import Logo from "@/components/ui/Logo";
import { company } from "@/content/company";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo className="h-16 w-auto" priority={false} />

          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
            Moderná zubná ambulancia poskytujúca kvalitnú stomatologickú
            starostlivosť pre deti aj dospelých v Nitre.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Navigácia</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
            <a href="#" className="transition-colors hover:text-primary">
              Domov
            </a>

            <a
              href="#sluzby"
              className="transition-colors hover:text-primary"
            >
              Služby
            </a>

            <a
              href="#recenzie"
              className="transition-colors hover:text-primary"
            >
              Recenzie
            </a>

            <a
              href="#faq"
              className="transition-colors hover:text-primary"
            >
              FAQ
            </a>

            <a
              href="#kontakt"
              className="transition-colors hover:text-primary"
            >
              Kontakt
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Kontakt</h3>

          <div className="mt-4 space-y-2 text-sm leading-6 text-muted">
            <p>📍 {company.address}</p>
            <p>📞 {company.phone}</p>
            <p>✉️ {company.email}</p>
            <p>🕒 {company.openingHours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5 text-center text-sm text-muted">
        © {new Date().getFullYear()} {company.name}. Všetky práva vyhradené.
      </div>
    </footer>
  );
}