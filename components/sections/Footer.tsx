import Logo from "@/components/ui/Logo";
import { company } from "@/content/company";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo variant="full" className="h-20 w-auto" priority={false} />

          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            Moderná zubná ambulancia poskytujúca kvalitnú stomatologickú
            starostlivosť pre deti aj dospelých v Nitre.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Navigácia</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-400">
            <a href="#" className="transition hover:text-cyan-500">
              Domov
            </a>

            <a href="#sluzby" className="transition hover:text-cyan-500">
              Služby
            </a>

            <a href="#o-nas" className="transition hover:text-cyan-500">
              O nás
            </a>

            <a href="#recenzie" className="transition hover:text-cyan-500">
              Recenzie
            </a>

            <a href="#faq" className="transition hover:text-cyan-500">
              FAQ
            </a>

            <a href="#kontakt" className="transition hover:text-cyan-500">
              Kontakt
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Kontakt</h3>

          <div className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
            <p>📍 {company.address}</p>
            <p>📞 {company.phone}</p>
            <p>✉️ {company.email}</p>
            <p>🕒 {company.openingHours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-6 py-4 text-center text-sm text-zinc-500">
        © 2026 {company.name}. Všetky práva vyhradené.
      </div>
    </footer>
  );
}