export const APP_NAME = 'NETFLIX';

export const TMDB_IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/original';
  
export const LANGUAGES = [
    {
        code: 'en',
        name: 'English',
    },
    {
        code: 'hindi',
        name: 'हिंदी',
    },
    {
        code: 'ur',
        name: 'उर्दू',
    },   
]

export const explorer = {
    name: 'root',
    id:1,
    isFolder: true,
    items: [
        {
            id:2,
            name: 'public',
            isFolder: true,
            items: [
                {
                    name: 'images',
                    id:3,
                    isFolder: true,
                    items: [
                        {
                            id:7,
                            name: 'logo.png',
                            isFolder: false
                        },
                        {
                            id:8,
                            name: 'fav.ico',
                            isFolder: false
                        }
                    ]
                }
            ]
        },
        {
            id:4,
            name: 'src',
            isFolder: true,
            items: [
                {
                    id:5,
                    name: 'index.html',
                    isFolder: false
                },
                {
                    id:6,
                    name: 'app.css',
                    isFolder: false
                }
            ]
        },
    ]
}