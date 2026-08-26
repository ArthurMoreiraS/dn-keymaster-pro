import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import workshopBg from "@/assets/workshop-bg.jpg";
import premiumKey from "@/assets/premium-key.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DN Chaveiro Automotivo | Chaves Codificadas, Premium e Reset de Airbag" },
      {
        name: "description",
        content:
          "Chaveiro automotivo em Brasília (Taguatinga Sul). Chaves codificadas e cópias para Audi, BMW, Mercedes, Land Rover, GWM e BYD, além de reset de módulo de airbag. Atendimento 24h.",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "5561993787174";
const PHONE_DISPLAY = "(61) 99378-7174";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Vim pelo site da DN Chaveiro Automotivo e gostaria de um orçamento.",
)}`;

const brands = [
  "AUDI", "BMW", "MERCEDES", "LAND ROVER", "PORSCHE", "VOLVO",
  "JEEP", "TOYOTA", "HONDA", "VW", "FIAT", "JAC",
  "BYD", "GWM", "CHERY", "HYUNDAI",
];

const services = [
  {
    n: "01",
    t: "Chaves Codificadas",
    d: "Chaves simples, canivete, telecomandos e de presença. Programação para todo tipo de chaves veicular nacional e importado.",
    tags: ["VVDI", "AUTEL", "OBDSTAR"],
  },
  {
    n: "02",
    t: "Reset de Módulos de Airbag",
    d: "Reset de crash data pós-colisão em veículos de todas as marcas e modelos, incluindo automóveis elétricos como GWM (Haval, Ora) e BYD (Dolphin, Seal, Song).",
    tags: ["GWM", "BYD", "PÓS-COLISÃO"],
  },
  {
    n: "03",
    t: "Linha Premium & Smart Key",
    d: "Programação completa de chaves de presença para Audi, BMW, Mercedes-Benz, Land Rover, Porsche e Volvo. Recuperação total de chaves perdidas.",
    tags: ["CAS / FEM / BDC", "FBS4", "KVM"],
  },
];

const pillars = [
  {
    t: "Equipamento original",
    d: "Scanners e softwares homologados — os mesmos usados em concessionárias alemãs, garantindo a integridade dos módulos eletrônicos.",
  },
  {
    t: "Atendimento no local",
    d: "Equipe móvel pronta para abertura técnica sem danos e confecção de chaves em qualquer ponto de Brasília e entorno.",
  },
  {
    t: "Garantia técnica",
    d: "Toda codificação acompanha backup de dados e garantia formal de funcionamento da chave e do módulo.",
  },
];

const faqs = [
  {
    q: "Vocês fazem chaves para Audi, BMW e Mercedes?",
    a: "Sim. Trabalhamos com toda a linha premium — Audi (A/Q completa), BMW (CAS, FEM, BDC), Mercedes-Benz (IR e FBS4), Land Rover (KVM), Porsche e Volvo — com equipamentos homologados.",
  },
  {
    q: "Qual o prazo para uma cópia de chave?",
    a: "Chaves simples e pantográficas ficam prontas em cerca de 20 minutos. Chaves codificadas levam de 40 a 90 minutos, dependendo do modelo. Linha premium pode exigir agendamento da chave virgem.",
  },
  {
    q: "Perdi todas as chaves. E agora?",
    a: "Sem problema. Vamos até o veículo, fazemos a abertura técnica sem danos e confeccionamos uma chave nova do zero direto pelo módulo do carro.",
  },
  {
    q: "O que é o reset do módulo de airbag?",
    a: "Após uma colisão, o módulo trava com códigos de falha. Fazemos o reset do crash data deixando o módulo original pronto para uso — inclusive em GWM e BYD.",
  },
  {
    q: "Atendem em domicílio e em emergências?",
    a: "Sim. Atendemos emergências 24h pelo WhatsApp em toda Brasília e regiões próximas. Confirme a localização antes do deslocamento.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />
      <Hero />
      <BrandTicker />
      <Services />
      <Process />
      <Premium />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Mono({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
    >
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-lg font-black uppercase italic tracking-tight text-white">
            DN <span className="text-orange-500">Chaveiro</span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400 md:flex"
          style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
        >
          <a href="#servicos" className="hover:text-orange-500 transition">Serviços</a>
          <a href="#premium" className="hover:text-orange-500 transition">Premium</a>
          <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
          <a href="#contato" className="hover:text-orange-500 transition">Contato</a>
        </nav>
        <a
          href={`tel:+${WHATSAPP}`}
          className="hidden items-center gap-2 border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-orange-500 sm:inline-flex"
        >
          <Phone className="h-3.5 w-3.5 text-orange-500" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0">
        <img
          src={workshopBg}
          alt="Oficina de chaveiro automotivo DN — máquina de corte a laser"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,oklch(0.72_0.21_47/0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <div
            className="mb-8 inline-flex items-center gap-3 border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500"
            style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            Taguatinga Sul · Brasília · DF
          </div>

          <h1 className="font-display text-5xl font-black leading-[0.88] tracking-tight sm:text-6xl lg:text-7xl">
            CHAVES
            <br />
            <span className="italic text-orange-500">AUTOMOTIVAS</span>
            <br />
            <span className="text-white">CODIFICADAS.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium leading-snug text-zinc-400 sm:text-xl">
            Do Popular à linha Premium. Cópia, Confecção e Codificação de
            Chaves Simples, Canivete e de Presença.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-orange-400"
            >
              <MessageCircle className="h-4 w-4" /> FALE AGORA
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:border-orange-500 hover:text-orange-500"
            >
              Nossos serviços
            </a>
          </div>
        </div>

        <Mono className="absolute bottom-8 right-6 hidden text-right text-[10px] leading-relaxed tracking-widest text-zinc-600 md:block">
          LAT −15.8344
          <br />
          LON −48.0519
          <br />
          <span className="text-zinc-400">CSA 02 LOTE 07 LOJA 01</span>
        </Mono>
      </div>
    </section>
  );
}

function BrandTicker() {
  return (
    <div className="border-y border-white/10 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 opacity-50">
          {brands.slice(0, 8).map((b) => (
            <span
              key={b}
              className="font-display text-xl font-black italic tracking-tighter text-zinc-900 sm:text-2xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-b border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500">
              [ Serviços ]
            </Mono>
            <h2 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] tracking-tight sm:text-6xl">
              Nossas
              <br />
              <span className="text-orange-500">Soluções Técnicas</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p
              className="border-l border-orange-500 pl-6 text-sm leading-relaxed text-zinc-400"
              style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
            >
              Laboratório equipado com scanners originais e máquinas de corte
              computadorizado para máxima fidelidade em chaves codificadas.
            </p>
          </div>
        </div>

        <div className="grid gap-px border border-white/5 bg-white/5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-[#0a0a0a] p-10 transition-colors hover:bg-zinc-900/60"
            >
              <Mono className="text-sm text-orange-500">[ {s.n} ]</Mono>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase leading-tight tracking-tight">
                {s.t}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{s.d}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <Mono
                    key={t}
                    className="border border-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-zinc-500"
                  >
                    {t}
                  </Mono>
                ))}
              </div>
              <div className="mt-8 h-px w-10 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Diagnóstico", d: "Identificamos modelo, ano e tipo de chave/módulo via OBD." },
    { n: "02", t: "Execução", d: "Corte, programação ou reset realizado com equipamento original." },
    { n: "03", t: "Entrega & Garantia", d: "Teste presencial, backup dos dados e garantia formal." },
  ];
  return (
    <section className="border-b border-white/10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500">
          [ Como funciona ]
        </Mono>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-white/10 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl font-black italic text-orange-500">
                  {s.n}
                </span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                  {s.t}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Premium() {
  return (
    <section id="premium" className="relative overflow-hidden border-b border-white/10 bg-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div className="absolute -inset-4 translate-x-4 translate-y-4 border border-orange-500/30" />
            <img
              src={premiumKey}
              alt="Chave de presença premium sobre bancada de diagnóstico"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative z-10 aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-8 -left-8 z-20 bg-orange-500 p-8">
              <div className="font-display text-6xl font-black italic leading-none text-black">
                +10
              </div>
              <Mono className="mt-2 block text-[10px] font-bold uppercase tracking-widest text-black">
                Anos de experiência
              </Mono>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500">
              [ Linha Premium ]
            </Mono>
            <h2 className="mt-4 font-display text-4xl font-black uppercase italic leading-[0.95] tracking-tight sm:text-5xl">
              Segurança
              <br />
              <span className="text-orange-500">sem concessões.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-zinc-400">
              Investimos em equipamentos e atualizações constantes para entregar
              o que poucos chaveiros oferecem em Brasília: serviço completo de
              chaves codificadas para Audi, BMW, Mercedes, Land Rover, Porsche e
              Volvo — com a mesma precisão de uma concessionária.
            </p>
            <div className="mt-10 space-y-7">
              {pillars.map((p) => (
                <div key={p.t} className="flex gap-6">
                  <div className="mt-1 h-10 w-px shrink-0 bg-orange-500" />
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-widest">
                      {p.t}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500">
          [ Quem somos ]
        </Mono>
        <h2 className="mt-4 font-display text-4xl font-black uppercase italic tracking-tight sm:text-5xl">
          DN Chaveiro Automotivo
        </h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
          A DN nasceu da paixão por carros e da busca por um atendimento técnico
          de excelência em Brasília. Atendemos do veículo popular ao premium com
          a mesma dedicação — chaves codificadas, cópias, confecção e reset de
          módulos eletrônicos. Profissionalismo, transparência e tecnologia em
          cada serviço.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-b border-white/10 bg-zinc-950 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500">
          [ FAQ ]
        </Mono>
        <h2 className="mt-4 font-display text-4xl font-black uppercase italic tracking-tight sm:text-5xl">
          Perguntas <span className="text-orange-500">comuns</span>
        </h2>
        <div className="mt-12 space-y-1">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-white/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
                {f.q}
                <span className="text-2xl text-orange-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-5 text-sm leading-relaxed text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="border-b border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500">
              [ Contato ]
            </Mono>
            <h2 className="mt-4 font-display text-4xl font-black uppercase italic leading-[0.95] tracking-tight sm:text-5xl">
              Fale agora com a
              <br />
              <span className="text-orange-500">DN.</span>
            </h2>
            <p className="mt-6 max-w-md text-zinc-400">
              Orçamento direto pelo WhatsApp, sem enrolação. Atendemos
              emergências 24h em toda Brasília e entorno.
            </p>

            <div className="mt-10 space-y-6">
              <ContactRow
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp · Linha direta"
                value={PHONE_DISPLAY}
                href={WHATSAPP_URL}
                external
              />
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Telefone"
                value={PHONE_DISPLAY}
                href={`tel:+${WHATSAPP}`}
              />
              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                label="Endereço · Taguatinga Sul"
                value="CSA 02 Lote 07 Loja 01"
                href="https://www.google.com/maps/search/?api=1&query=CSA+02+Lote+07+Loja+01+Taguatinga+Sul+Brasilia"
                external
              />
              <ContactRow
                icon={<Clock className="h-5 w-5" />}
                label="Horário"
                value="Seg–Sex 08h00–18h00 · Sáb 08h00–12h00"
              />
            </div>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-zinc-900 p-10">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl" />
            <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-500">
              [ Cartão de visita ]
            </Mono>
            <h3 className="mt-4 font-display text-3xl font-black uppercase italic tracking-tight underline decoration-orange-500 decoration-2 underline-offset-[10px]">
              DN Chaveiro Automotivo
            </h3>

            <div className="mt-10 space-y-8">
              <div>
                <Mono className="block text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Localização física
                </Mono>
                <p className="mt-2 font-display text-lg font-bold uppercase leading-tight">
                  CSA 02 Lote 07 Loja 01
                  <br />
                  Taguatinga Sul · Brasília — DF
                </p>
              </div>

              <div>
                <Mono className="block text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Linha direta · WhatsApp
                </Mono>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-4xl font-black italic tracking-tight text-orange-500 hover:text-orange-400"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                <Mono className="text-[10px] uppercase tracking-widest text-zinc-600">
                  PROCON DF · 151
                </Mono>
                <div className="text-right">
                  <Mono className="block text-[10px] uppercase tracking-widest text-zinc-500">
                    Funcionamento
                  </Mono>
                  <p className="text-xs font-bold">SEG – SEX · 08h00 ÀS 18h00</p>
                  <p className="text-xs font-bold">SÁB · 08h00 ÀS 12h00</p>
                  <Mono className="block text-[10px] font-black uppercase text-orange-500">
                    Emergência 24h
                  </Mono>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon, label, value, href, external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-zinc-900 text-orange-500 transition group-hover:border-orange-500">
        {icon}
      </div>
      <div>
        <Mono className="block text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          {label}
        </Mono>
        <p className="font-display text-xl font-bold uppercase tracking-tight">
          {value}
        </p>
      </div>
    </>
  );
  if (!href) {
    return <div className="group flex items-center gap-5">{inner}</div>;
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-5"
    >
      {inner}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="font-display text-lg font-black uppercase italic tracking-tight text-white">DN <span className="text-orange-500">Chaveiro</span></span>
        <Mono className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
          DN Chaveiro Automotivo © {new Date().getFullYear()} · Brasília · DF
        </Mono>
        <Mono className="text-[10px] uppercase tracking-[0.4em] text-zinc-700">
          Excelência em segurança veicular
        </Mono>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a DN Chaveiro no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-orange-500 px-5 py-3 text-sm font-black uppercase tracking-widest text-black shadow-2xl shadow-orange-900/40 transition hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
      </span>
    </a>
  );
}
