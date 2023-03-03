import Link from "next/link";
import { useMemo, useState } from "react";

export function Header() {
  const [text, setText] = useState("");

  useMemo(() => {
    const words = ["Web", "Mobile", "Backend"];

    let currentWordIndex = 0;
    let currentLetterIndex = 0;

    setInterval(() => {
      if (currentLetterIndex <= words[currentWordIndex].length) {
        setText(words[currentWordIndex].slice(0, currentLetterIndex));
        currentLetterIndex++;
      } else {
        setTimeout(() => {
          currentLetterIndex = 0;
          currentWordIndex = (currentWordIndex + 1) % words.length;
        }, 1000);
      }
    }, 100);
  }, []);

  return (
    <header
      className={
        "h-96 relative flex items-center justify-center text-white bg-green-700 p-4"
      }
    >
      <div
        className={
          "absolute top-0 left-0 right-0 flex items-center justify-around "
        }
      >
        <Link href="/">
          <h1 className={"font-extralight text-xl"}>B</h1>
        </Link>

        <nav className={"flex items-center gap-3 p-4"}>
          <Link href="#about">Sobre</Link>
          <Link href="#skills">Habilidades</Link>
          <Link href="#">Contatos</Link>
        </nav>
      </div>

      <section
        className={
          "max-w-lg flex flex-col items-center justify-center w-full h-64  absolute mt-20"
        }
      >
        <p>Olá, meu nome é</p>
        <h2 className={"font-bold text-5xl"}>Bruno de Jesus</h2>
        <p>Sou um desenvolvedor {text}</p>
      </section>
    </header>
  );
}
