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
    views: number;
    lastViewed: string;
}
 
export interface IListCardSectionProps {
    section: IMovieDataProps['section']; 
}

export interface ICovertext {
    id: number;
    text: string;
}

export interface IFaq{
    id?:number | any,
    question:string,
    answer:string
}

export interface IOptionsProps{
    Option:string;
}
  
export interface IAuthProps {
    setIsAuthModalOpen: (value: boolean) => void;
    setIsSignUpModalOpen: (value: boolean) => void;
  }
  
export  interface ISignUpProps {
    setIsSignUpModalOpen: (value: boolean) => void;
    setIsAuthModalOpen: (value: boolean) => void;
    setIsCreatePasswordOpen: (value: boolean) => void;
    setUserEmail: (email: string) => void;
  }
export interface ICreatePasswordProps {
    setIsCreatePasswordOpen: (value: boolean) => void;
    userEmail: string;
    setIsSignUpModalOpen: (value: boolean) => void;
  }
export interface ILoginProps {
    email: string;
    password: string;
}
export interface IUser {
    id: string;
    email: string;
  }
  
export interface IAuthState {
    user: IUser | null;
    isAuthenticated: boolean;
    setUser: (user: IUser | null) => void;
    setIsAuthenticated: (status: boolean) => void;
    logout: () => void;
  }
  export interface IUserState {
    user_id: string | null;
    token: string | null;
    role_name: string | null;
    isAuthenticated: boolean;
    setUserData: (id: string, token: string, role_name: string) => void;
    clearUser: () => void;
  }
  