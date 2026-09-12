const BASE = import.meta.env.BASE_URL;

function App() {
  return (
    <div className="min-h-screen bg-[#0B0614] text-white">

      {/* =========================================================
          HEADER
          ========================================================= */}

      <header className="fixed top-0 z-50 w-full border-b border-purple-500/30 bg-[#0B0614]/90 backdrop-blur">

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}

          <a
            href="#inicio"
            className="text-2xl font-black uppercase tracking-wider text-yellow-400"
          >
            Retro Gaming Fest
          </a>

          {/* Menú */}

          <div className="hidden gap-8 md:flex">

            <a
              href="#inicio"
              className="transition hover:text-pink-400"
            >
              Inicio
            </a>

            <a
              href="#juegos"
              className="transition hover:text-pink-400"
            >
              Juegos
            </a>

            <a
              href="#pases"
              className="transition hover:text-pink-400"
            >
              Pases
            </a>

            <a
              href="#ubicacion"
              className="transition hover:text-pink-400"
            >
              Ubicación
            </a>

            <a
              href="#galeria"
              className="transition hover:text-pink-400"
            >
              Galería
            </a>

          </div>

        </nav>

      </header>


      {/* =========================================================
          SECCIÓN 1 - INICIO
          ========================================================= */}

      <section
        id="inicio"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      >

        {/* Imagen de fondo */}

        <img
          src={`${BASE}images/hero.jpg`}
          alt="Sala arcade retro"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Capa oscura */}

        <div className="absolute inset-0 bg-[#0B0614]/75"></div>

        {/* Contenido */}

        <div className="relative z-10 max-w-4xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
            El festival definitivo
          </p>

          <h1 className="text-6xl font-black uppercase leading-none md:text-8xl">

            Retro

            <span className="block text-pink-500">
              Gaming
            </span>

            Fest

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-200">
            Una celebración de videojuegos clásicos,
            arcades, torneos y cultura gamer.
          </p>

          <a
            href="#juegos"
            className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-4
                       font-black uppercase text-black
                       transition duration-300
                       hover:scale-105
                       hover:bg-yellow-300"
          >
            Explorar festival
          </a>

        </div>

      </section>


      {/* =========================================================
          SECCIÓN 2 - JUEGOS
          ========================================================= */}

      <section
        id="juegos"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          {/* Título */}

          <div className="mb-12">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Experiencias
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              Juegos y actividades
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Descubre todas las experiencias que encontrarás
              durante el Retro Gaming Fest.
            </p>

          </div>


          {/* Cards */}

          <div className="grid gap-6 md:grid-cols-2">


            {/* CLASSIC GAMES */}

            <article
              className="overflow-hidden rounded-2xl
                         border border-purple-500/30
                         bg-purple-950/40
                         transition duration-300
                         hover:-translate-y-2
                         hover:border-purple-400
                         hover:shadow-2xl"
            >

              <img
                src={`${BASE}images/classic-games.jpg`}
                alt="Máquina arcade clásica"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-yellow-400">
                  Classic Games
                </h3>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Revive los grandes clásicos que marcaron
                  la historia de los videojuegos.
                </p>

              </div>

            </article>


            {/* TOURNAMENTS */}

            <article
              className="overflow-hidden rounded-2xl
                         border border-purple-500/30
                         bg-purple-950/40
                         transition duration-300
                         hover:-translate-y-2
                         hover:border-purple-400
                         hover:shadow-2xl"
            >

              <img
                src={`${BASE}images/tournaments.jpg`}
                alt="Jugador compitiendo en arcade"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-pink-400">
                  Tournaments
                </h3>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Compite contra otros jugadores y demuestra
                  quién domina el arcade.
                </p>

              </div>

            </article>


            {/* PANELS */}

            <article
              className="overflow-hidden rounded-2xl
                         border border-purple-500/30
                         bg-purple-950/40
                         transition duration-300
                         hover:-translate-y-2
                         hover:border-purple-400
                         hover:shadow-2xl"
            >

              <img
                src={`${BASE}images/panels.jpg`}
                alt="Evento de videojuegos"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-cyan-400">
                  Panels
                </h3>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Charlas y encuentros sobre videojuegos,
                  tecnología y cultura gamer.
                </p>

              </div>

            </article>


            {/* ARCADE HALL */}

            <article
              className="overflow-hidden rounded-2xl
                         border border-purple-500/30
                         bg-purple-950/40
                         transition duration-300
                         hover:-translate-y-2
                         hover:border-purple-400
                         hover:shadow-2xl"
            >

              <img
                src={`${BASE}images/arcade-hall.jpg`}
                alt="Sala llena de máquinas arcade"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-yellow-400">
                  Arcade Hall
                </h3>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Una sala llena de máquinas arcade
                  para jugar durante todo el evento.
                </p>

              </div>

            </article>


          </div>

        </div>

      </section>


      {/* =========================================================
          SECCIÓN 3 - PASES
          ========================================================= */}

      <section
        id="pases"
        className="bg-purple-950/20 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          {/* Título */}

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink-400">
              Entradas
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              Elige tu pase
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Elige la experiencia que mejor se adapte
              a tu aventura en Retro Gaming Fest.
            </p>

          </div>


          {/* Pases */}

          <div className="grid gap-6 md:grid-cols-3">


            {/* BÁSICO */}

            <article
              className="rounded-2xl border border-white/10
                         bg-black/30 p-8
                         transition duration-300
                         hover:-translate-y-2"
            >

              <h3 className="text-3xl font-black">
                Básico
              </h3>

              <p className="mt-4 text-4xl font-black text-cyan-400">
                $25.000
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">

                <li>
                  ✓ Acceso general
                </li>

                <li>
                  ✓ Arcade clásico
                </li>

                <li>
                  ✓ Galería
                </li>

                <li className="text-gray-500">
                  ✕ Torneos
                </li>

              </ul>

              <button
                className="mt-8 w-full rounded-lg
                           border border-cyan-400
                           px-6 py-3
                           font-bold
                           transition
                           hover:bg-cyan-400
                           hover:text-black"
              >
                Comprar pase
              </button>

            </article>


            {/* PRO */}

            <article
              className="relative rounded-2xl
                         border-2 border-pink-500
                         bg-pink-950/20 p-8
                         transition duration-300
                         hover:-translate-y-2"
            >

              <span
                className="rounded-full
                           bg-pink-500
                           px-3 py-1
                           text-xs font-black"
              >
                POPULAR
              </span>

              <h3 className="mt-5 text-3xl font-black">
                Pro
              </h3>

              <p className="mt-4 text-4xl font-black text-pink-400">
                $45.000
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">

                <li>
                  ✓ Acceso general
                </li>

                <li>
                  ✓ Arcade clásico
                </li>

                <li>
                  ✓ Torneos
                </li>

                <li>
                  ✓ Panels
                </li>

              </ul>

              <button
                className="mt-8 w-full rounded-lg
                           bg-pink-500 px-6 py-3
                           font-bold text-white
                           transition
                           hover:bg-pink-400"
              >
                Comprar pase
              </button>

            </article>


            {/* VIP */}

            <article
              className="rounded-2xl
                         border border-yellow-400
                         bg-yellow-400/10 p-8
                         transition duration-300
                         hover:-translate-y-2"
            >

              <h3 className="text-3xl font-black">
                VIP
              </h3>

              <p className="mt-4 text-4xl font-black text-yellow-400">
                $80.000
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">

                <li>
                  ✓ Todo incluido
                </li>

                <li>
                  ✓ Acceso preferencial
                </li>

                <li>
                  ✓ Torneos
                </li>

                <li>
                  ✓ Experiencias especiales
                </li>

              </ul>

              <button
                className="mt-8 w-full rounded-lg
                           bg-yellow-400 px-6 py-3
                           font-bold text-black
                           transition
                           hover:bg-yellow-300"
              >
                Comprar pase
              </button>

            </article>


          </div>

        </div>

      </section>


      {/* =========================================================
          SECCIÓN 4 - UBICACIÓN
          ========================================================= */}

      <section
        id="ubicacion"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          {/* Título */}

          <div className="mb-12">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Encuéntranos
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              Ubicación
            </h2>

          </div>


          <div className="grid gap-8 md:grid-cols-2">


            {/* MAPA */}

            <div
              className="flex min-h-[400px]
                         items-center justify-center
                         rounded-2xl
                         border border-purple-500/30
                         bg-purple-950/30"
            >

              <div className="text-center">

                <div className="text-7xl">
                  📍
                </div>

                <p className="mt-6 text-2xl font-black">
                  MAPA
                </p>

                <p className="mt-2 text-gray-400">
                  Medellín, Colombia
                </p>

              </div>

            </div>


            {/* INFORMACIÓN */}

            <div className="flex flex-col justify-center">

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink-400">
                Retro Gaming Fest 2026
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Plaza Mayor Medellín
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Calle 41 #55-80, Medellín, Colombia.
              </p>


              <h4 className="mt-8 text-xl font-bold">
                Horarios
              </h4>

              <div className="mt-4 space-y-3 text-gray-300">

                <p>
                  <span className="font-bold">
                    Viernes:
                  </span>{" "}
                  4:00 PM - 10:00 PM
                </p>

                <p>
                  <span className="font-bold">
                    Sábado:
                  </span>{" "}
                  10:00 AM - 10:00 PM
                </p>

                <p>
                  <span className="font-bold">
                    Domingo:
                  </span>{" "}
                  10:00 AM - 6:00 PM
                </p>

              </div>


              <button
                className="mt-8 w-fit rounded-lg
                           bg-cyan-400
                           px-6 py-3
                           font-bold text-black
                           transition
                           hover:bg-cyan-300"
              >
                Cómo llegar
              </button>

            </div>


          </div>

        </div>

      </section>


      {/* =========================================================
          SECCIÓN 5 - GALERÍA
          ========================================================= */}

      <section
        id="galeria"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          {/* Título */}

          <div className="mb-12">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink-400">
              Revive el evento
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              Galería
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Una mirada a la experiencia que te espera
              en Retro Gaming Fest.
            </p>

          </div>


          {/* Galería */}

          <div className="grid gap-4 md:grid-cols-2">


            <img
              src={`${BASE}images/gallery-1.jpg`}
              alt="Sala arcade"
              className="aspect-video w-full rounded-2xl object-cover
                         transition duration-300
                         hover:scale-[1.02]"
            />


            <img
              src={`${BASE}images/gallery-2.jpg`}
              alt="Máquinas arcade iluminadas"
              className="aspect-video w-full rounded-2xl object-cover
                         transition duration-300
                         hover:scale-[1.02]"
            />


            <img
              src={`${BASE}images/gallery-3.jpg`}
              alt="Personas jugando videojuegos"
              className="aspect-video w-full rounded-2xl object-cover
                         transition duration-300
                         hover:scale-[1.02]"
            />


            <img
              src={`${BASE}images/gallery-4.jpg`}
              alt="Máquina arcade con luces"
              className="aspect-video w-full rounded-2xl object-cover
                         transition duration-300
                         hover:scale-[1.02]"
            />


          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
          ========================================================= */}

      <footer
        className="border-t border-purple-500/30
                   bg-black px-6 py-12"
      >

        <div className="mx-auto max-w-7xl">


          <div className="grid gap-10 md:grid-cols-3">


            {/* LOGO */}

            <div>

              <h3 className="text-2xl font-black text-yellow-400">
                RETRO GAMING FEST
              </h3>

              <p className="mt-4 max-w-sm text-gray-400">
                Donde los clásicos vuelven a cobrar vida.
              </p>

            </div>


            {/* NAVEGACIÓN */}

            <div>

              <h4 className="font-bold">
                Navegación
              </h4>

              <div className="mt-4 space-y-2 text-gray-400">

                <a
                  href="#inicio"
                  className="block transition hover:text-white"
                >
                  Inicio
                </a>

                <a
                  href="#juegos"
                  className="block transition hover:text-white"
                >
                  Juegos
                </a>

                <a
                  href="#pases"
                  className="block transition hover:text-white"
                >
                  Pases
                </a>

                <a
                  href="#ubicacion"
                  className="block transition hover:text-white"
                >
                  Ubicación
                </a>

                <a
                  href="#galeria"
                  className="block transition hover:text-white"
                >
                  Galería
                </a>

              </div>

            </div>


            {/* REDES */}

            <div>

              <h4 className="font-bold">
                Síguenos
              </h4>

              <p className="mt-4 text-gray-400">
                Instagram · YouTube · TikTok
              </p>

            </div>


          </div>


          {/* COPYRIGHT */}

          <div
            className="mt-12 border-t
                       border-white/10
                       pt-6 text-center
                       text-sm text-gray-500"
          >

            © 2026 Retro Gaming Fest.
            Todos los derechos reservados.

          </div>


        </div>

      </footer>

    </div>
  )
}

export default App