function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#2D5BC8] px-4 py-8">
      <section className="w-full max-w-[358px] rounded-[10px] bg-white px-5 py-5 shadow-sm">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#29458F]">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Logo da igreja"
            >
              <path
                d="M12 31V13.5L19 9L26 13.5V31"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 31V19H23V31"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 4V12"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M15.5 8H22.5"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M12 31H26"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Título */}
        <div className="mt-5 text-center">
          <h1 className="text-[19px] font-semibold leading-6 text-black">
            Tesouraria Digital
          </h1>

          <p className="mt-2 text-[12px] leading-4 text-[#777184]">
            Sistema de Gestão Financeira para Igreja
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="mt-5"
        >
          {/* E-mail */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-[11px] font-medium text-black"
            >
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              className="h-[29px] w-full rounded-[5px] border-0 bg-[#F1F1F3] px-3 text-[11px] text-gray-700 outline-none placeholder:text-[#777184] focus:ring-2 focus:ring-[#29458F]/30"
            />
          </div>

          {/* Senha */}
          <div className="mt-3">
            <label
              htmlFor="password"
              className="mb-1 block text-[11px] font-medium text-black"
            >
              Senha
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="h-[29px] w-full rounded-[5px] border-0 bg-[#F1F1F3] px-3 text-[11px] text-gray-700 outline-none placeholder:text-[#777184] focus:ring-2 focus:ring-[#29458F]/30"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-3 h-[29px] w-full rounded-[5px] bg-[#29458F] text-[11px] font-semibold text-white transition hover:bg-[#233D7D]"
          >
            Entrar
          </button>
        </form>

        {/* Recuperação de senha */}
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-[11px] font-medium text-[#2459D3] hover:underline"
          >
            Esqueci minha senha
          </button>
        </div>

      </section>
    </main>
  );
}

export default Login;