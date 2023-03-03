import Link from "next/link";

import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";

import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeSimple, File } from "phosphor-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Bruno de Jesus</title>
      </Head>
      <Header />
      <main className={"w-full h-screen bg-zinc-800"}>
        <section className={"flex items-center justify-center"}>
          <div className={"max-w-3xl w-full text-white mt-3"}>
            <h3 id="about" className={"font-extrabold text-5xl my-8"}>
              Sobre mim
            </h3>
            <p>
              Olá meu nome é Bruno de Jesus sou um desenvolvedor web e mobile
              com foco em tecnologias como React, React Native, TypeScript e
              Next.js. Apesar de não ter experiência profissional, tenho uma
              grande quantidade de conhecimento em meu arsenal e estou pronto
              para mostrar minhas habilidades em projetos freelancer ou
              empresas.
            </p>
            <p className={"my-8"}>
              Sou altamente motivado e apaixonado por tecnologia, especialmente
              no que se refere ao desenvolvimento de aplicações web e mobile. Eu
              tenho uma ampla gama de habilidades técnicas, incluindo
              programação em JavaScript, desenvolvimento de APIs, design de
              interfaces de usuário e muito mais.
            </p>
            <p>
              Além disso, Sou um aprendiz rápido e estou sempre buscando
              aprender novas tecnologias e técnicas de desenvolvimento. Sou
              dedicado a criar soluções eficientes e elegantes para seus
              clientes.
            </p>

            <p className={"my-8 "}>
              Se você está procurando um desenvolvedor web e mobile talentoso e
              dedicado, Serei uma excelente escolha. Com meu conhecimento em
              React, React Native, TypeScript e Next.js, estou está pronto para
              ajudá-lo a alcançar seus objetivos de desenvolvimento de software.
              Entre em contato com ele hoje para saber mais sobre como ele pode
              ajudar em seu projeto.
            </p>
          </div>
        </section>

        <section
          id="skills"
          className={
            "w-full h-80 flex items-center justify-center bg-zinc-800 mt-3"
          }
        >
          <div className={"max-w-5xl w-full text-white mt-3 flex-wrap"}>
            <h3 id="about" className={"font-extrabold text-5xl my-8"}>
              Habilidades
            </h3>
            <ul className={"w-full flex justify-around items-center"}>
              <li>
                <h5>JavaScript</h5>
                <ProgressBar progress={78} />
              </li>
              <li>
                <h5>TypeScript</h5>
                <ProgressBar progress={55} />
              </li>
              <li>
                <h5>ReactJS</h5>
                <ProgressBar progress={67} />
              </li>
              <li>
                <h5>React Native</h5>
                <ProgressBar progress={58} />
              </li>
              <li className={"w-20 text-center"}>
                <h5>NextJS</h5>
                <ProgressBar progress={47} />
              </li>
              <li className={"w-20 text-center"}>
                <h5>Git</h5>
                <ProgressBar progress={42} />
              </li>
              <li className={"w-20 text-center"}>
                <h5>NodeJS</h5>
                <ProgressBar progress={37} />
              </li>
            </ul>
          </div>
        </section>

        <section
          className={"w-full h-96 flex items-center justify-center bg-zinc-800"}
        >
          <div className={"max-w-5xl w-full text-white mt-3 flex-wrap"}>
            <h3 className={"font-extrabold text-5xl my-8"}>Contato</h3>

            <div className={"flex flex-col gap-3"}>
              <Link
                className={"flex items-center gap-2"}
                href="https://www.linkedin.com/in/brunojsc/"
              >
                <LinkedInLogoIcon />
                <h5>LinkedIn</h5>
              </Link>
              <Link
                className={"flex items-center gap-2"}
                href="https://github.com/BrunoJSC"
              >
                <GitHubLogoIcon />
                <h5>Github</h5>
              </Link>
              <Link
                className={"flex items-center gap-2"}
                href="mailto:bruno.jesus.carmo@gmail.com"
              >
                <EnvelopeSimple />
                <h5>Email</h5>
              </Link>

              <a
                target="_blank"
                className={"flex items-center gap-2"}
                href="assets/cv_bruno.pdf"
                download="cv_bruno.pdf"
                rel="noopener noreferrer"
              >
                <File />
                CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
