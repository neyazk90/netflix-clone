export interface iLanguage {
    code: string;
    name: string;
}

export interface iApp{
    user: {},
    lang:string
}

export interface iMovieCard {
    movie: {
        poster_path: string,
        title: string,
        overview: string,
        rating: number,
        releaseDate: string,
        original_language:string
    }
}