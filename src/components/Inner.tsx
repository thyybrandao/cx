import type React from "react";
import type { ReactNode } from "react";

interface Props {
  data: object[];
}

function Inner({ data }: Props) {
  return (
    <section className="justify-center grid grid-cols-4 gap-4 mx-auto">
      {data.map((item) => (
        <article
          className="w-72 h-32 flex flex-col gap-2 p-2 rounded-md shadow-lg bg-white"
          key={item.id}
        >
          <div className="font-bold">{item.nome}</div>
          <div className="text-sm">{item.descricao}</div>
          <div className="w-full flex flex-row items-end justify-end pt-4">
            <a
              className="w-8 h-8 text-xs flex flex-row items-center justify-center rounded-lg bg-[#ffac48] hover:bg-[#d68e35] hover:font-medium hover:animate-none"
              href={item.rota}
            >
              ver
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Inner;
