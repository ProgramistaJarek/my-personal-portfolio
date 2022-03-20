export const date = {
  header: {
    id: 1,
    paragraph: {
      first: "Nazywam się",
      second: "Aspiruję na ",
    },
    span: {
      first: "Jarek",
      second: "Junior front end developer",
    },
    imgUrl: "/developer_activity_re_39tg.svg",
  },
  aboutMe: {
    imgUrl: "/profile_details_re_ch9r.svg",
    description:
      "Cześć, z tej strony Jarek. Mieszkam na Śląsku oraz tutaj studiuję na Politechnice Śląskiej w Gliwicach.",
    description2:
      "Frontendem zainteresowałem się już w 2018 roku gdzie to miałem okazję odbyć miesięczne praktyki w Rimini. Tam też zbudowałem moją pierwszą, taką z prawdziwego zdarzenia stronę internetową, która miała kilka fajnych funkcjonalności. Na przykład umożliwiała rejestrację oraz następnie logowanie się użytkowników. Mieli oni możliwość dodawania komentarzy pod postami, które znowu mógł tylko dodawać admin. Ogólnie byłem z niej wtedy bardzo zadowolony i od tamtego czasu postanowiłem zainteresować się tym tematem - stronami internetowymi.",
    description3:
      "Historia, którą tu opowiedziałem jest krótka ale opowiada mniej więcej jak to wszystko się zaczęło i teraz chciałbym się jeszcze bardziej rozwiać w kierunku frontenda z czasem może nawet przejścia na backend.",
  },
  myProjects: [
    {
      imgUrl: "/desktop-design.jpg",
      description:
        "Prosty i miły dla oka design strony przedstawiający galerie produktu z możliwością dodania ile elementów chce się dodać do koszyka. Możliwość usunięcia elementów z koszyka. Zabezpieczenie przed dodaniem przez użytkownika 0 produktów - wyświetli się wtedy alert, że nie można dodać 0 produktów. Zabezpieczenie również przed dodaniem produktów na minusie - również wyświetli się alert.",
      tech: ["react", "tailwindcss"],
      liveUrl:
        "https://programistajarek.github.io/ecommerce-product-page-main/",
      gitHubUrl:
        "https://github.com/ProgramistaJarek/ecommerce-product-page-main",
    },
    {
      imgUrl: "/desktop-design2.jpg",
      description:
        "Aplikacja, która pobiera z bazy danych Advice Slip porady łącząc się z ich api. Użytkownik losowo losuję poradę z ich bazy. Strona przystosowana do działania na komputerach oraz na urządzeniach mobilnych",
      tech: ["react", "tailwindcss", "api"],
      liveUrl: "https://programistajarek.github.io/advice-generator-app-main/",
      gitHubUrl:
        "https://github.com/ProgramistaJarek/advice-generator-app-main",
    },
    {
      imgUrl: "/desktop-design3.jpg",
      description:
        "Stronę tę zbudowałem w oparciu o grafikę, którą pobrałem ze strony frontend mentor. Głównym założeniem podczas budowania tej strony było jak najdokładniejsze odwzorowanie jej z pobranej grafiki. .",
      tech: ["html", "sass"],
      liveUrl:
        "https://programistajarek.github.io/project-tracking-intro-component-master/",
      gitHubUrl:
        "https://github.com/ProgramistaJarek/project-tracking-intro-component-master",
    },
    {
      imgUrl: "/desktop-design4.jpg",
      description:
        "Strona podobnie jak do poprzedniej strony polegała na jak najdogładniejszym odwzorowaniu jej z grafiki. Przy tym również poćwiczenie w głównej mierze używania flexboxa oraz sass",
      tech: ["html", "sass"],
      liveUrl:
        "https://programistajarek.github.io/huddle-landing-page-with-curved-sections-master/",
      gitHubUrl:
        "https://github.com/ProgramistaJarek/huddle-landing-page-with-curved-sections-master",
    },
    {
      imgUrl: "/desktop-design5.jpg",
      description:
        "Strona przy której mogłem sprawdzić oraz z testować przełącznik light/dark mode. Zrozumieć idea jak wdrożyć dark mode do strony internetowej.",
      tech: ["html", "css"],
      liveUrl: "https://programistajarek.github.io/social-media-challenge/",
      gitHubUrl: "https://github.com/ProgramistaJarek/social-media-challenge",
    },
  ],
};
