import React from "react";


interface Props {
  title: string;
  description?: string | undefined;
}

function Title({ title, description }: Props) {
  return (
    <header>
      <div className="w-screen flex flex-row justify-between items-center px-4">
        <a className="text-white text-sm" href="/">Voltar</a>
        <p className="text-2xl text-white font-bold mx-auto">{title}</p>
      </div>
      <div className="w-screen flex flex-row justify-center items-center py-4 text-justify">
      <p className="text-sm text-white w-1/3">{description}</p>
      </div>
    </header>
  );
}

export default Title;
