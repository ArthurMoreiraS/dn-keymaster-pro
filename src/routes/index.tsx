import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin, Clock, Star } from "lucide-react";
import workshopBg from "@/assets/workshop-bg.jpg";
import premiumKey from "@/assets/premium-key.jpg";
import logoDn from "@/assets/logo-dn.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DN Chaveiro Automotivo | Chaves Codificadas, Premium e Reset de Airbag" },
      {
        name: "description",
        content:
          "Chaveiro automotivo em Brasília (Taguatinga Sul). Chaves codificadas e cópias para Audi, BMW, Mercedes, Land Rover, GWM e BYD, além de reset de módulo de airbag. Seg a sex, 08h às 18h, e sábado, 08h às 12h.",
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
const MAPS_URL =
  "https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kc_hXTeIM1qTMYhc2bEKyK-h&daddr=St.+A+Sul+CSA+2+Lj+1+-+Taguatinga+Sul,+Bras%C3%ADlia+-+DF,+72015-025";

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
    t: "Confecção - Todas as Chaves Perdidas",
    d: "Confecção de novas chaves para linha Nacional e Premium como Audi, BMW, Mercedes-Benz, Land Rover, Porsche, Volvo e outros, mesmo quando o cliente perde todas as chaves de seu veículo.",
    tags: ["CAS / FEM / BDC", "FBS4", "KVM"],
  },
];

const pillars = [
  {
    t: "Equipamento original",
    d: "Scanners e softwares homologados — os mesmos usados em concessionárias alemãs, garantindo a integridade dos módulos eletrônicos.",
  },
  {
    t: "Atendimento no local do veículo",
    d: "Perdeu as chaves ou o carro travou? Vamos até onde o veículo está, em Brasília e entorno, para abertura sem danos e confecção da chave. Os demais serviços são realizados na loja, em Taguatinga Sul.",
  },
  {
    t: "Garantia",
    d: "Confiamos tanto na qualidade dos serviços que prestamos que ofertamos o dobro do prazo legal exigido por lei.",
  },
];

const faqs = [
  {
    q: "Vocês fazem chaves para Audi, BMW e Mercedes?",
    a: "Sim. Trabalhamos com toda a linha premium — Audi (A/Q completa), BMW (CAS, FEM, BDC), Mercedes-Benz (FBS3), Land Rover (KVM), Porsche e Volvo — com equipamentos homologados.",
  },
  {
    q: "Qual o prazo para uma cópia de chave?",
    a: "Chaves simples ficam prontas em até 30 minutos. Chaves codificadas levam de 40 a 90 minutos, dependendo do modelo do veículo. Linha premium pode exigir mais tempo, a depender do sistema embarcado, modelo e ano do carro.",
  },
  {
    q: "Perdi todas as chaves. E agora?",
    a: "Sem problema. Vamos até o veículo, fazemos a abertura técnica sem danos e confeccionamos uma chave nova do zero direto pelo módulo do carro.",
  },
  {
    q: "O que é o reset do módulo de airbag?",
    a: "Após uma colisão, o módulo trava com códigos de falha. Fazemos o reset do crash data deixando o módulo original pronto para uso — inclusive em GWM e BYD.",
  },
];

const googleReviews = {
  rating: "5,0",
  count: 28,
  profileUrl: "https://www.google.com/maps?cid=11650750709289802888",
  writeUrl:
    "https://www.google.com/search?q=chaveiro+automotivo+dn#lrd=0x935a3388375de1cf:0xa1afc80ab1d95c88,3,,,,",
};

const testimonials = [
  {
    name: "Bruno Saraiva",
    meta: "Local Guide · 20 avaliações",
    when: "Há 1 mês",
    text: "Me atendeu após o horário de funcionamento por uma emergência, recomendo muito, pode confiar, sem medo. Muito honesto, atendimento excepcional, ainda se preocupa no pós-venda.",
    reply:
      "Grande Bruno, esperamos que o serviço realizado tenha ficado como você precisava! Nossa empresa está a sua disposição! Grande abraço",
  },
  {
    name: "Ester Rodrigues",
    meta: "3 avaliações",
    when: "Há 1 mês",
    text: "Atendimento excelente, chegou no local muito rápido, fez o serviço muito rápido, e de ótima qualidade, indico de olhos fechados, salvou minha semana",
    reply:
      "Olá Ester, agradecemos seu contato e esperamos poder lhe atender sempre que precisar de serviços de chaveiro automotivo! Grande abraço!",
  },
  {
    name: "Agrinaldo Fonseca",
    meta: "2 avaliações",
    when: "Há 1 mês",
    text: "Fui atendido pelo pessoal da DN de forma prestativa e rápida. Recomendo os serviços de chaveiro deles.",
    reply: "Gratidão pela recomendação, agradecemos pela confiança em nossos serviços!",
  },
  {
    name: "Gabriela de Paula",
    meta: "4 avaliações",
    when: "Há 1 mês",
    text: "Perdi todas as chaves do meu carro e eles conseguiram me atender prontamente. Recomendo o serviço desse chaveiro.",
    reply: "Precisando é só chamar Gabriela! Estamos a sua disposição!",
  },
  {
    name: "Daniel Cunha Pereira",
    meta: "1 avaliação",
    when: "Há 1 mês",
    text: "Trabalham muito bem, foi o único que conseguiu resolver o problema da chave do carro Volvo XC60",
    reply:
      "Essa de fato é uma chave mais complexa de se fazer, mas que bom que resolvemos mais esse problema! Grande abraço",
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
      <Testimonials />
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
          <span className="block h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
            <img
              src={logoDn}
              alt="DN Chaveiro Automotivo"
              className="h-full w-full scale-[1.18] object-cover"
            />
          </span>
          <span className="font-display text-lg font-black uppercase italic tracking-tight text-white">
            DN <span className="text-orange-500">Chaveiro</span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-400 md:flex xl:gap-8"
          style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
        >
          <a href="#servicos" className="hover:text-orange-500 transition">Serviços</a>
          <a href="#premium" className="hidden transition hover:text-orange-500 lg:inline">Premium</a>
          <a href="#depoimentos" className="hover:text-orange-500 transition">Depoimentos</a>
          <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
          <a href="#contato" className="hover:text-orange-500 transition">Contato</a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition hover:text-orange-500 lg:inline"
          >
            Localização
          </a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
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
              Temos diversos scanners, programadores, leitores e gravadores de memórias
              e processadores, bem como máquinas computadorizadas para entregar aos
              nossos clientes o corte perfeito das lâminas de suas chaves originais
              ou reservas.
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
    { n: "01", t: "Diagnóstico", d: "Identificação dos problemas com a chave ou com módulo imobilizador, por meio do que há de melhor em equipamentos no mercado automotivo." },
    { n: "02", t: "Execução", d: "Programação das chaves, transponder e telecomando, considerando ano e modelo do veículo, bem como corte da lâmina por meio de máquinas computadorizadas." },
    { n: "03", t: "Entrega & Garantia", d: "Apresentação ao cliente dos serviços executados, teste de abertura e fechamento do veículo, bem como efetuando a partida utilizando a nova chave, seja inserindo e girando a chave na ignição ou por meio do botão Start/Stop, especificamente para chaves de presença (Keyless)." },
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
                +20
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

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z"
      />
    </svg>
  );
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label="Nota 5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.split(" ").filter((w) => w.length > 2);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

const CARD_WIDTH = "w-[86vw] shrink-0 snap-start sm:w-[62vw] md:w-auto md:shrink";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article
      className={`flex flex-col border border-white/10 bg-[#0a0a0a] p-7 transition-colors hover:border-white/25 ${CARD_WIDTH}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-orange-500/40">
            <Mono className="text-xs font-bold text-orange-500">{initials(t.name)}</Mono>
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-bold uppercase tracking-wide text-white">
              {t.name}
            </p>
            <Mono className="block text-[10px] uppercase tracking-widest text-zinc-500">
              {t.meta}
            </Mono>
          </div>
        </div>
        <GoogleG className="h-5 w-5 shrink-0" />
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Stars />
        <Mono className="text-[10px] uppercase tracking-widest text-zinc-500">{t.when}</Mono>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{t.text}</p>

      <div className="mt-auto pt-7">
        <div className="border-l-2 border-orange-500/40 pl-4">
          <Mono className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Resposta da DN
          </Mono>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">{t.reply}</p>
        </div>
      </div>
    </article>
  );
}

function ReviewCTACard() {
  return (
    <article
      className={`flex flex-col justify-center border border-dashed border-orange-500/30 bg-orange-500/[0.04] p-7 ${CARD_WIDTH}`}
    >
      <GoogleG className="h-7 w-7" />
      <h3 className="mt-5 font-display text-2xl font-black uppercase italic leading-[0.95] tracking-tight">
        Já foi atendido
        <br />
        <span className="text-orange-500">pela DN?</span>
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        Sua avaliação ajuda outros motoristas de Brasília a encontrarem um chaveiro automotivo de
        confiança.
      </p>
      <a
        href={googleReviews.writeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex self-start items-center gap-2 border border-orange-500 px-5 py-3 text-xs font-black uppercase tracking-widest text-orange-500 transition hover:bg-orange-500 hover:text-black"
      >
        Escrever avaliação
      </a>
    </article>
  );
}

function GoogleScoreCard() {
  return (
    <div className="border border-white/10 bg-[#0a0a0a] p-8">
      <div className="flex items-center gap-3">
        <GoogleG className="h-6 w-6" />
        <Mono className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
          Avaliações no Google
        </Mono>
      </div>

      <div className="mt-6 flex items-end gap-5">
        <span className="font-display text-6xl font-black italic leading-none text-white">
          {googleReviews.rating}
        </span>
        <div className="pb-1.5">
          <Stars className="h-5 w-5" />
          <Mono className="mt-2 block text-[10px] uppercase tracking-widest text-zinc-500">
            {googleReviews.count} avaliações · Excelente
          </Mono>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={googleReviews.writeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-xs font-black uppercase tracking-widest text-black transition hover:bg-orange-400"
        >
          Avaliar no Google
        </a>
        <a
          href={googleReviews.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:border-orange-500 hover:text-orange-500"
        >
          Ver todas
        </a>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden border-b border-white/10 bg-zinc-950 py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.72_0.21_47/0.10),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Mono className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500">
              [ Depoimentos ]
            </Mono>
            <h2 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] tracking-tight sm:text-6xl">
              O que dizem
              <br />
              <span className="text-orange-500">nossos clientes.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <GoogleScoreCard />
          </div>
        </div>

        <div
          className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
          <ReviewCTACard />
        </div>

        <Mono className="mt-6 block text-center text-[10px] uppercase tracking-[0.25em] text-zinc-600 md:hidden">
          ← Arraste para ver mais →
        </Mono>
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
              Orçamento direto pelo WhatsApp, sem enrolação. Atendemos de
              segunda a sexta, das 08h às 18h, e aos sábados, das 08h às 12h.
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
                href={WHATSAPP_URL}
                external
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
        <span className="flex items-center gap-3">
          <span className="block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
            <img
              src={logoDn}
              alt="DN Chaveiro Automotivo"
              className="h-full w-full scale-[1.18] object-cover"
            />
          </span>
          <span className="font-display text-lg font-black uppercase italic tracking-tight text-white">DN <span className="text-orange-500">Chaveiro</span></span>
        </span>
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
