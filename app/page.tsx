import Link from "next/link"

export default function ProjetoFit360() {
  const dtxLinks = {
    one: "https://ev.braip.com/checkout/plar42pw/che3r05n?currency=BRL",
    two: "https://ev.braip.com/checkout/plao401j/che3r05n?currency=BRL",
    three: "https://ev.braip.com/checkout/plakq022/che3r05n?currency=BRL",
    five: "https://ev.braip.com/checkout/plazrmdm/che3r05n?currency=BRL",
  }

  const lipoLinks = {
    one: "https://ev.braip.com/checkout/plaplxpw/chel0xpl?currency=BRL",
    three: "https://ev.braip.com/checkout/plam94py/chel0xpl?currency=BRL",
    five: "https://ev.braip.com/checkout/plao0m9x/chel0xpl?currency=BRL",
    twelve: "https://ev.braip.com/checkout/plapnrem/chel0xpl?currency=BRL",
  }

  const detoxLinks = {
    one: "https://ev.braip.com/checkout/pla1pxq1/che78wwq?currency=BRL",
    three: "https://ev.braip.com/checkout/pla6q6ll/che78wwq?currency=BRL",
    five: "https://ev.braip.com/checkout/pla6qpo6/che78wwq?currency=BRL",
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,255,100,0.15),_transparent_60%)]"></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-green-500/20">
        <div className="bg-gradient-to-r from-green-900 to-green-500/40 text-center text-sm py-2 font-semibold tracking-wide">
          ENTREGA EXPRESS | RESULTADOS REAIS | TODO BRASIL | 7-15 DIAS ÚTEIS
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center">
            <img src="/logo.png" alt="ProjetoFit360" className="h-14 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-10 text-zinc-300 font-medium">
            <Link href="#produtos" className="hover:text-green-400 transition">
              Produtos
            </Link>
            <Link href="#beneficios" className="hover:text-green-400 transition">
              Benefícios
            </Link>
            <Link href="#kits" className="hover:text-green-400 transition">
              Kits
            </Link>
            <Link href="#faq" className="hover:text-green-400 transition">
              FAQ
            </Link>
            <Link href="#suporte" className="hover:text-green-400 transition">
              Suporte
            </Link>
          </nav>

          <Link
            href="#produtos"
            className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-6 py-3 rounded-2xl shadow-[0_0_30px_rgba(0,255,100,0.6)]"
          >
            Comprar Agora
          </Link>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full mb-8 text-sm font-bold">
            MAIS VENDIDO DO MOMENTO
          </div>

          <h2 className="text-3xl md:text-7xl font-black leading-tight mb-8 break-words">
            RESULTADOS
            <span className="block text-green-400 drop-shadow-[0_0_30px_rgba(0,255,100,0.8)]">QUE VOCÊ</span>
            VÊ E SENTE.
          </h2>

          <p className="text-zinc-300 text-xl leading-relaxed mb-10 max-w-2xl">
            Suplementos premium desenvolvidos para acelerar o metabolismo, aumentar disposição, reduzir retenção e
            transformar sua rotina fitness com qualidade e segurança.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">
            <Link
              href="#produtos"
              className="bg-green-500 text-black font-black px-8 py-5 rounded-2xl text-lg shadow-[0_0_35px_rgba(0,255,100,0.6)] hover:scale-105 transition"
            >
              QUERO TRANSFORMAR MEU CORPO
            </Link>

            <Link
              href="#kits"
              className="border border-green-500/30 bg-zinc-900 px-8 py-5 rounded-2xl font-bold hover:border-green-400 transition"
            >
              VER KITS
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["100% Seguro", "Entrega Express", "Resultados Reais", "Alta Performance"].map((item) => (
              <div
                key={item}
                className="bg-zinc-950 border border-green-500/10 rounded-2xl p-4 text-sm font-semibold text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>

          <img
            src="/hero-product.png"
            alt="Projeto Fit 360"
            className="relative z-10 w-full max-w-xl drop-shadow-[0_0_50px_rgba(0,255,100,0.4)]"
          />
        </div>
      </section>

      {/* Video Section 1 - Transformacoes Reais */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black mb-4">
            Transformações Reais <span className="text-green-400">PROJETOFIT360</span>
          </h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Veja a experiência de clientes vivendo uma nova versão.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-[520px] group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-[28px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_0_40px_rgba(0,255,100,0.15)] border border-green-500/30 bg-black group-hover:shadow-[0_0_60px_rgba(0,255,100,0.25)] group-hover:border-green-400/50 transition duration-500">
              <video
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-auto object-cover"
              >
                <source src="/video-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black mb-4 break-words">
            RESULTADOS QUE <span className="text-green-400">TRANSFORMAM VIDAS</span>
          </h3>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Fórmulas premium com ingredientes selecionados para auxiliar na sua transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Metabolismo Turbo", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: "Mais Energia e Disposição", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
            {
              title: "Redução de Inchaço",
              icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
            },
            { title: "Ingredientes Naturais", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
            { title: "Resultados Reais", icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14" },
            {
              title: "Bem-Estar Completo",
              icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-green-500/10 rounded-3xl p-8 hover:border-green-400/40 transition hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-400"
                >
                  <path d={item.icon} />
                </svg>
              </div>
              <h4 className="text-2xl font-black mb-4">{item.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                Tecnologia premium fitness desenvolvida para elevar sua performance e resultados.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="produtos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black mb-4 break-words">
            ESCOLHA O SEU <span className="text-green-400">TRATAMENTO IDEAL</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="bg-zinc-950 border border-green-500/20 rounded-[32px] overflow-hidden shadow-[0_0_40px_rgba(0,255,100,0.1)]">
            <div className="p-8">
              <span className="bg-green-500 text-black font-black px-4 py-2 rounded-full text-sm">MAIS VENDIDO</span>

              <img src="/dtx-black.jpg" alt="DTX Black" className="w-full my-8 rounded-3xl" />

              <h4 className="text-4xl font-black mb-4">
                DTX <span className="text-green-400">BLACK</span>
              </h4>

              <p className="text-zinc-300 font-semibold text-lg mb-2">Queime gordura e acelere seu metabolismo</p>

              <p className="text-zinc-400 leading-relaxed mb-4">
                O DTX Black auxilia na redução do inchaço, acelera o metabolismo e ajuda você a conquistar resultados visíveis com mais energia e disposição no dia a dia.
              </p>

              <ul className="text-zinc-300 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mais energia
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Menos inchaço
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Metabolismo acelerado
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Auxílio no emagrecimento
                </li>
              </ul>

              <div className="space-y-4">
                <a
                  href={dtxLinks.one}
                  className="block bg-zinc-900 border border-green-500/20 p-4 rounded-2xl hover:border-green-400 transition"
                >
                  1 Pote — R$137,00
                </a>

                <a
                  href={dtxLinks.two}
                  className="block bg-zinc-900 border border-green-500/20 p-4 rounded-2xl hover:border-green-400 transition"
                >
                  2 Potes — Oferta Especial
                </a>

                <a
                  href={dtxLinks.three}
                  className="block bg-zinc-900 border border-green-500/20 p-4 rounded-2xl hover:border-green-400 transition"
                >
                  3 Potes — Mais Economia
                </a>

                <a
                  href={dtxLinks.five}
                  className="block bg-green-500 text-black font-black p-5 rounded-2xl text-center shadow-[0_0_30px_rgba(0,255,100,0.6)] hover:scale-105 transition"
                >
                  5 Potes — KIT MAIS VENDIDO
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-purple-500/20 rounded-[32px] overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <div className="p-8">
              <span className="bg-purple-500 text-white font-black px-4 py-2 rounded-full text-sm">PERFORMANCE</span>

              <img src="/lipo-extremo.jpg" alt="Lipo Extremo" className="w-full my-8 rounded-3xl" />

              <h4 className="text-4xl font-black mb-4">
                LIPO <span className="text-purple-400">EXTREMO</span>
              </h4>

              <p className="text-zinc-300 font-semibold text-lg mb-2">Mais foco, energia e definição</p>

              <p className="text-zinc-400 leading-relaxed mb-4">
                O Lipo Extremo foi desenvolvido para aumentar sua disposição, melhorar sua performance e potencializar seus resultados físicos com uma fórmula poderosa e moderna.
              </p>

              <ul className="text-zinc-300 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mais performance
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mais disposição
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Auxílio na definição
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fórmula premium
                </li>
              </ul>

              <div className="space-y-4">
                <a
                  href={lipoLinks.one}
                  className="block bg-zinc-900 border border-purple-500/20 p-4 rounded-2xl hover:border-purple-400 transition"
                >
                  1 Pote — R$197,00
                </a>

                <a
                  href={lipoLinks.three}
                  className="block bg-purple-500 text-white font-black p-5 rounded-2xl text-center shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition"
                >
                  3 Potes — RECOMENDADO
                </a>

                <a
                  href={lipoLinks.five}
                  className="block bg-zinc-900 border border-purple-500/20 p-4 rounded-2xl hover:border-purple-400 transition"
                >
                  5 Potes — Mais Vendido
                </a>

                <a
                  href={lipoLinks.twelve}
                  className="block bg-zinc-900 border border-purple-500/20 p-4 rounded-2xl hover:border-purple-400 transition"
                >
                  12 Potes — Kit Revenda
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-emerald-500/20 rounded-[32px] overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <div className="p-8">
              <span className="bg-emerald-500 text-black font-black px-4 py-2 rounded-full text-sm">DETOX PREMIUM</span>

              <img src="/detox.jpg" alt="Detox" className="w-full my-8 rounded-3xl" />

              <h4 className="text-4xl font-black mb-4">
                DETOX <span className="text-emerald-400">360</span>
              </h4>

              <p className="text-zinc-300 font-semibold text-lg mb-2">Organismo leve e corpo renovado</p>

              <p className="text-zinc-400 leading-relaxed mb-4">
                O Detox 360 ajuda na eliminacao de toxinas, reduz retencao e promove sensacao de leveza para apoiar seu processo de transformacao corporal.
              </p>

              <ul className="text-zinc-300 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Elimina toxinas
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduz retencao
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sensacao de leveza
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Controle do apetite
                </li>
              </ul>

              <div className="space-y-4">
                <a
                  href={detoxLinks.one}
                  className="block bg-zinc-900 border border-emerald-500/20 p-4 rounded-2xl hover:border-emerald-400 transition"
                >
                  1 Pote — Comece Hoje
                </a>

                <a
                  href={detoxLinks.three}
                  className="block bg-zinc-900 border border-emerald-500/20 p-4 rounded-2xl hover:border-emerald-400 transition"
                >
                  3 Potes — Melhor Custo
                </a>

                <a
                  href={detoxLinks.five}
                  className="block bg-emerald-500 text-black font-black p-5 rounded-2xl text-center shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 transition"
                >
                  5 Potes — TRATAMENTO COMPLETO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kits" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-[40px] p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,100,0.15),_transparent_60%)]"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-6xl font-black mb-6 break-words">
              COMECE SUA <span className="text-green-400">TRANSFORMAÇÃO</span>
            </h3>

            <p className="text-zinc-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Milhares de pessoas ja escolheram a PROJETOFIT360 para elevar sua autoestima e conquistar resultados
              reais.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {["+12.500 CLIENTES SATISFEITOS", "4,9★ AVALIAÇÃO REAL", "97% DE APROVAÇÃO", "ENTREGA RÁPIDA PARA TODO BRASIL"].map((item) => (
                <div key={item} className="bg-black/60 border border-green-500/10 rounded-3xl p-8 text-xl font-black">
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="#produtos"
              className="inline-block bg-green-500 text-black font-black px-12 py-6 rounded-3xl text-xl shadow-[0_0_35px_rgba(0,255,100,0.6)] hover:scale-105 transition"
            >
              VER TODOS OS KITS
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-5xl mx-auto px-6 py-24">
        <h3 className="text-3xl md:text-5xl font-black text-center mb-16 break-words">
          PERGUNTAS <span className="text-green-400">FREQUENTES</span>
        </h3>

        <div className="space-y-6">
          {[
            {
              q: "Os produtos sao seguros?",
              a: "Sim, todos os nossos produtos sao desenvolvidos com ingredientes naturais e passam por rigorosos controles de qualidade.",
            },
            {
              q: "Em quanto tempo verei resultados?",
              a: "Os resultados variam de pessoa para pessoa, mas a maioria dos clientes relata melhorias visiveis entre 2 a 4 semanas de uso continuo.",
            },
            {
              q: "Como devo utilizar os produtos?",
              a: "Cada produto acompanha instrucoes detalhadas de uso. Geralmente, recomendamos seguir a dosagem indicada na embalagem.",
            },
            {
              q: "Posso combinar os suplementos?",
              a: "Sim, nossos produtos foram desenvolvidos para serem complementares. Consulte um profissional de saude para orientacoes personalizadas.",
            },
            {
              q: "A entrega possui rastreio?",
              a: "Sim, todas as entregas possuem codigo de rastreamento que e enviado por e-mail apos o despacho do pedido.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="bg-zinc-950 border border-green-500/10 rounded-3xl p-8 hover:border-green-400/30 transition"
            >
              <h4 className="text-2xl font-bold mb-3">{item.q}</h4>
              <p className="text-zinc-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section 2 - Experiencia Premium */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-black mb-4 break-words">
            TRANSFORMAÇÃO <span className="text-green-400">EM AÇÃO</span>
          </h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Veja o poder dos nossos suplementos premium.</p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-[520px] group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-[28px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_0_40px_rgba(0,255,100,0.15)] border border-green-500/30 bg-black group-hover:shadow-[0_0_60px_rgba(0,255,100,0.25)] group-hover:border-green-400/50 transition duration-500">
              <video
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-auto object-cover"
              >
                <source src="/video-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Secao de Suporte */}
      <section id="suporte" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-black mb-4 break-words">
            Precisa de ajuda? <span className="text-green-400">Nosso suporte esta pronto para você.</span>
          </h3>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Atendimento rapido e suporte especializado para duvidas sobre pedidos, entregas e produtos.
          </p>
        </div>

        <div className="bg-zinc-950 border border-green-500/20 rounded-[32px] p-10 shadow-[0_0_60px_rgba(0,255,100,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,100,0.1),_transparent_70%)]"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-400"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <h4 className="text-2xl font-black mb-2">Suporte Oficial PROJETOFIT360</h4>
            
            <a 
              href="mailto:suportefit24horas@gmail.com" 
              className="text-green-400 text-sm md:text-xl font-bold hover:text-green-300 transition mb-8 inline-block break-all"
            >
              suportefit24horas@gmail.com
            </a>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-10">
              {[
                "Resposta rapida",
                "Atendimento humanizado",
                "Suporte pos-compra",
                "Acompanhamento de pedidos",
                "Atendimento 24 horas",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black/40 border border-green-500/10 rounded-2xl p-5 text-xs md:text-sm font-semibold text-zinc-300 flex flex-col items-center justify-center text-center gap-2 min-h-[120px]"
                >
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="mailto:suportefit24horas@gmail.com"
              className="inline-block bg-green-500 text-black font-black px-10 py-5 rounded-2xl text-lg shadow-[0_0_35px_rgba(0,255,100,0.6)] hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,100,0.8)] transition"
            >
              FALAR COM O SUPORTE
            </a>

            <p className="text-zinc-500 text-sm mt-8 italic">
              Seu resultado comeca com um suporte de qualidade.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-500/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="flex justify-center items-center mb-6">
            <img src="/logo.png" alt="ProjetoFit360" className="h-20 w-auto" />
          </div>

          <p className="text-zinc-500 max-w-3xl mx-auto leading-relaxed mb-8">
            Este site nao substitui orientacao medica profissional. Consulte sempre um especialista antes de iniciar
            qualquer suplementacao.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-zinc-400 mb-10">
            <Link href="#" className="hover:text-green-400 transition">
              Politica de Privacidade
            </Link>
            <Link href="#" className="hover:text-green-400 transition">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-green-400 transition">
              Contato
            </Link>
          </div>

          <p className="text-zinc-600 text-sm">© 2026 PROJETOFIT360 — Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
