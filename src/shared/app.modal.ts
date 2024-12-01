import { FormEventHandler } from "react";

export interface appState {
    app: {
        lang: string;
        isAuthForm: boolean
        user: unknown
    }
}

export interface movie{
    movieList: {
        nowPlayingMovies: {}
        popularMovies: {}
    }
}

export type LanguageKey = 'en' | 'hindi' | 'ur';

// export interface iAutocomplete{
//     placeholder: string; 
//     staticData: string[];
//     fetchSuggestions: () => void;
//     dataKey: string;
//     customLoading: React.ReactNode;
//     onSelect: React.ChangeEvent
//     onChange:  React.ChangeEvent;
//     onBlur:  React.ChangeEvent;
//     onFocus:React.FocusEvent;
//     customStyles: {}
// }


export interface iAutocomplete {
    placeholder: string;
    staticData: string[]; // Array of static data for autocomplete suggestions
    fetchSuggestions: (inputValue: string) => void; // Fetch suggestions based on user input
    dataKey: string; // Key used to extract the suggestion text from static data
    customLoading: React.ReactNode; // JSX element or node for loading indicator
    onSelect: (selectedItem: any) => void; // Handler for when an item is selected
    onChange: (e: string) => void; // Change handler for input field
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void; // Blur event handler
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => void; // Focus event handler
    customStyles: React.CSSProperties; // Styles for input element
  }