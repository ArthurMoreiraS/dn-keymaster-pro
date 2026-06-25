import { createFileRoute } from "@tanstack/react-router";
import {
  KeyRound,
  Copy,
  ShieldCheck,
  Cpu,
  Crown,
  Car,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import heroKey from "@/assets/hero-key.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DN Chaveiro Automotivo | Chaves, Cópias e Reset de Airbag" },
      {
        name: "description",
        content:
          "Chaveiro automotivo em Brasília. Chaves codificadas, cópias e confecção para Audi, BMW, Mercedes, Land Rover e reset de módulos de airbag GWM, BYD e demais marcas.",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "5561998507816";
const PHONE_DISPLAY = "(61) 99850-7816";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Vim pelo site da DN Chaveiro Automotivo e gostaria de um orçamento.",
)}`;

const services = [
  {
    icon: KeyRound,
    title: "Chaves Codificadas",
    desc: "Confecção e programação de chaves transponder, presenciais e canivete para todas as marcas nacionais e importadas.",
  },
  {
    icon: Copy,
    title: "Cópia de Chaves",
    desc: "Cópias rápidas e precisas com equipamentos de última geração, mantendo o padrão original do veículo.",
  },
  {
    icon: Crown,
    title: "Linha Premium",
    desc: "Atendimento especializado para Audi, BMW, Mercedes-Benz, Land Rover, Porsche, Volvo e demais marcas premium.",
  },
  {
    icon: Cpu,
    title: "Reset de Módulo de Airbag",
    desc: "Reset completo de módulos pós-colisão para todos os veículos, incluindo GWM, BYD e linha elétrica.",
  },
  {
    icon: ShieldCheck,
    title: "Chaves Smart Key",
    desc: "Programação e substituição de chaves presenciais (proximidade) com botão start/stop.",
  },
  {
    icon: Wrench,
    title: "Reparos e Carcaças",
    desc: "Troca de carcaças, reparo de chaves canivete, baterias e botões com garantia de funcionamento.",
  },
];

const brands = [
  "Audi", "BMW", "Mercedes-Benz", "Land Rover", "Porsche", "Volvo",
  "Volkswagen", "Toyota", "Honda", "Fiat", "Chevrolet", "Hyundai",
  "Jeep", "Renault", "Nissan", "GWM", "BYD", "Caoa Chery",
];

const faqs = [
  {
    q: "Vocês fazem chaves para carros premium como Audi, BMW e Mercedes?",
    a: "Sim. Trabalhamos com confecção e programação completa para toda a linha premium — Audi, BMW, Mercedes-Benz, Land Rover, Porsche e Volvo — com equipamentos homologados.",
  },
  {
    q: "O que é o reset de módulo de airbag e quando é necessário?",
    a: "Após um acionamento (colisão), o módulo de airbag fica travado com códigos de falha. Fazemos o reset original do módulo, deixando-o pronto para uso novamente, inclusive em veículos chineses como GWM e BYD.",
  },
  {
    q: "Em quanto tempo fica pronta uma chave codificada?",
    a: "Na maioria dos casos a chave é entregue no mesmo dia. Modelos premium específicos podem exigir agendamento prévio para garantir disponibilidade da chave virgem.",
  },
  {
    q: "Vocês atendem em domicílio?",
    a: "Sim, atendemos emergências e situações onde o veículo não pode ser deslocado. Entre em contato pelo WhatsApp para confirmar a região.",
  },
  {
    q: "Qual a garantia dos serviços?",
    a: "Todas as chaves confeccionadas e serviços de programação possuem garantia. Trabalhamos apenas com peças e insumos de qualidade comprovada.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Brands />
      <Premium />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servicos" className="transition hover:text-foreground">Serviços</a>
          <a href="#marcas" className="transition hover:text-foreground">Marcas</a>
          <a href="#sobre" className="transition hover:text-foreground">Sobre</a>
          <a href="#faq" className="transition hover:text-foreground">FAQ</a>
          <a href="#contato" className="transition hover:text-foreground">Contato</a>
        </nav>
        <a
          href={`tel:+${WHATSAPP}`}
          className="hidden items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:opacity-90 sm:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-brand-foreground">
        <KeyRound className="h-5 w-5" strokeWidth={2.5} />
      </div>
      <div className="leading-none">
        <div className="font-display text-xl font-extrabold tracking-wide">DN Chaveiro</div>
        <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Automotivo
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Atendimento Rápido em Brasília
          </div>
          <h1 className="mt-5 font-display text-5xl font-black leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
            Chaves automotivas <span className="text-brand">de verdade.</span>
            <br />Do popular ao premium.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Confecção, cópia e programação de chaves codificadas para todas as marcas — incluindo
            Audi, BMW, Mercedes e Land Rover — além de reset de módulos de airbag para GWM, BYD e
            demais montadoras.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition hover:border-brand"
            >
              Ver Serviços
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            {[
              { k: "+10", v: "Anos de experiência" },
              { k: "100%", v: "Marcas atendidas" },
              { k: "24h", v: "Atendimento WhatsApp" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-extrabold text-brand">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-2xl bg-brand/20 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
            <img
              src={heroKey}
              alt="Chave automotiva codificada e botão start/stop"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-surface px-5 py-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-brand-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Serviço com garantia</div>
                <div className="text-xs text-muted-foreground">Equipamentos profissionais</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand">{kicker}</div>
      <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          kicker="O que fazemos"
          title="Serviços completos para o seu veículo"
          desc="Da chave básica ao módulo eletrônico mais avançado — atendimento técnico, ágil e com garantia."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-brand"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/30" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                  <s.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="marcas" className="border-b border-border/60 bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          kicker="Marcas atendidas"
          title="Toda marca. Todo modelo."
          desc="Trabalhamos com o portfólio completo de fabricantes — nacionais, importadas, premium e elétricas."
        />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 md:grid-cols-6">
          {brands.map((b) => (
            <div
              key={b}
              className="flex h-24 items-center justify-center bg-surface px-4 text-center font-display text-lg font-bold uppercase tracking-wider text-foreground/80 transition hover:bg-surface-2 hover:text-brand"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Premium() {
  const items = [
    "Confecção de chaves Audi (linha A/Q completa)",
    "BMW chaves CAS, FEM e BDC",
    "Mercedes-Benz chaves IR e FBS4",
    "Land Rover / Range Rover KVM",
    "Porsche e Volvo Smart Key",
    "Atendimento com hora marcada",
  ];
  return (
    <section className="relative overflow-hidden border-b border-border/60 py-20 sm:py-28">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Crown className="h-3.5 w-3.5" /> Linha Premium
          </div>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">
            Especialistas em <span className="text-brand">carros importados</span> e linha premium.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Investimos em equipamentos originais e atualizações constantes para entregar o que poucos
            chaveiros oferecem: serviço completo para Audi, BMW, Mercedes, Land Rover, Porsche e
            Volvo — com a mesma precisão de uma concessionária.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Cpu, t: "Reset de Airbag", d: "Pós-colisão em todas as marcas, incluindo GWM e BYD." },
            { icon: Car, t: "Smart Key", d: "Programação de chaves presenciais com proximidade." },
            { icon: Clock, t: "Agilidade", d: "Atendimento ágil, sem deslocar o carro à concessionária." },
            { icon: ShieldCheck, t: "Garantia", d: "Todos os serviços com garantia técnica." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-surface p-5">
              <c.icon className="h-6 w-6 text-brand" />
              <div className="mt-4 font-display text-lg font-bold">{c.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeader kicker="Quem somos" title="DN Chaveiro Automotivo" />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A DN Chaveiro Automotivo nasceu da paixão por carros e da busca por um atendimento técnico
          de excelência. Atendemos do veículo popular ao premium com a mesma dedicação — chaves
          codificadas, cópias, confecção e reset de módulos eletrônicos. Profissionalismo,
          transparência e tecnologia em cada serviço.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-b border-border/60 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader kicker="Dúvidas frequentes" title="Tire suas dúvidas" />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg font-bold uppercase tracking-wide hover:text-brand hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          kicker="Fale com a gente"
          title="Pronto para atender você"
          desc="Entre em contato pelo WhatsApp para orçamento rápido ou venha até nossa loja."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value={PHONE_DISPLAY}
            href={WHATSAPP_URL}
            cta="Conversar agora"
          />
          <ContactCard
            icon={Phone}
            title="Telefone"
            value={PHONE_DISPLAY}
            href={`tel:+${WHATSAPP}`}
            cta="Ligar"
          />
          <ContactCard
            icon={MapPin}
            title="Endereço"
            value="CSA 02 Lote 07 Loja 01"
            href="#"
            cta="PROCON 151"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon, title, value, href, cta,
}: {
  icon: typeof Phone; title: string; value: string; href: string; cta: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-brand"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-brand-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
        {title}
      </div>
      <div className="mt-1 font-display text-2xl font-bold">{value}</div>
      <div className="mt-3 text-sm font-semibold text-brand transition group-hover:underline">
        {cta} →
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <Logo />
        <div>© {new Date().getFullYear()} DN Chaveiro Automotivo. Todos os direitos reservados.</div>
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
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-brand px-5 py-3 font-bold text-brand-foreground shadow-2xl shadow-brand/40 transition hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
      </span>
    </a>
  );
}
