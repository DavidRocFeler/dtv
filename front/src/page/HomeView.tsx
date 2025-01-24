import React from 'react';
import SectionCover from '@/components/SectionCover';
import { coverTextArray } from '@/helpers/TextCover.helpers';
import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import { IMovieDataProps } from '@/interface/globalTypes';

const HomeView: React.FC = () => {
  // Definir el tipo de chunks como un array de arrays de IMovieDataProps
  const chunks: IMovieDataProps[][] = [];

  // Dividir movieDataHelpers en 5 partes (cada una con 10 elementos)
  const chunkSize = 10; // Tamaño de cada parte

  for (let i = 0; i < movieDataHelpers.length; i += chunkSize) {
    chunks.push(movieDataHelpers.slice(i, i + chunkSize));
  }

  return (
    <div>
      {coverTextArray.map((item, index) => (
        <SectionCover
          key={item.id}
          id={item.id}
          text={item.text} // Pasar el texto del cover
          items={chunks[index]} // Pasar la parte correspondiente de movieDataHelpers
        />
      ))}
    </div>
  );
};

export default HomeView;