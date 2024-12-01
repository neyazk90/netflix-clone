interface Language {
    homePageTitle: string;
    priceText: string;
    subscriptionText: string;
    emailPlaceholder: string;
    getStartedCTAText: string;
    login: string;
    logout: string;
    register: string;
    popularMovieLabel: string;
    nowPlayingMovieLabel: string;
    search: string;
    searchPlaceholder: string;
    authForm: {
        email: string;
        username?: string;
        password: string;
        passwordPlaceholder: string;
    };
  }
  
  interface Languages {
    en: Language;
    hindi: Language;
    ur: Language;
  }

export const lang: Languages = {
    en: {
        homePageTitle: 'Unlimited movies, TV shows and more',
        priceText: 'Starts at ₹149. Cancel anytime.',
        subscriptionText: 'Ready to watch? Enter your email to create or restart your membership.',
        emailPlaceholder: 'Email address',
        getStartedCTAText: 'Get started >',
        login: 'Login',
        logout: 'Logout',
        register: 'Register',
        popularMovieLabel: 'Popular Movie',
        nowPlayingMovieLabel: 'Now Playing',
        search: 'Search',
        searchPlaceholder:'What do you want to Search today',
        authForm: {
            email: 'Email',
            password: 'Password',
            passwordPlaceholder:"Enter Password"
        }
    },
    hindi: {
        homePageTitle: 'असीमित फिल्में, टीवी शो और बहुत कुछ',
        priceText: '₹149 से शुरू। किसी भी समय रद्द करें।',
        subscriptionText: 'देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।',
        emailPlaceholder: 'मेल पता',
        getStartedCTAText: 'शुरू हो जाओ',
        login: 'लॉग इन करें',
        logout: 'लॉगआउट करें',
        register: 'पंजीकरण करवाना',
        popularMovieLabel: 'लोकप्रिय मूवी',
        nowPlayingMovieLabel: 'अभी चल रही है',
        search: 'खोज',
        searchPlaceholder:'आज आप क्या खोजना चाहते हैं',
        authForm: {
            email: 'ईमेल',
            password: 'पासवर्ड',
            passwordPlaceholder: 'पासवर्ड दर्ज करें',
        }
    },
    ur: {
        homePageTitle: 'لامحدود فلمیں، ٹی وی شوز اور بہت کچھ',
        priceText: '₹149 سے شروع ہوتا ہے۔ کسی بھی وقت منسوخ کریں۔',
        subscriptionText: 'دیکھنے کے لیے تیار ہیں؟ اپنی رکنیت بنانے یا دوبارہ شروع کرنے کے لیے اپنا ای میل درج کریں۔',
        emailPlaceholder: 'ای میل ایڈریس',
        getStartedCTAText: 'شروع کرو',
        login: 'لاگ ان',
        logout: 'لاگ آؤٹ',
        register:'رجسٹر کریں',
        popularMovieLabel: 'مشہور فلم',
        nowPlayingMovieLabel: 'اب چل رہا ہے۔',
        search: 'تلاش کریں۔',
        searchPlaceholder:'آج آپ کیا تلاش کرنا چاہتے ہیں۔',
        authForm: {
            email: 'ای میل',
            password:'پاس ورڈ',
            passwordPlaceholder: 'پاس ورڈ درج کریں',
        }
    }
}