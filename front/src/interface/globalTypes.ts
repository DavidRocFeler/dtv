export interface AuthButtonProps{
    text:string,
    handlelogin:()=>void
}

export interface IMovieDataProps {
    id: number;
    title: string;
    year: number;
    director: string;
    duration: string;
    genre:  ('Action' | 'Adventure' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Sci-Fi')[];
    section: 'Movies' | 'Animes' | 'Series';
    rate: string;
    poster: string;
    review: string;
}