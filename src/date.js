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
    imgUrl: "developer_activity_re_39tg.svg",
  },
  aboutMe: {
    imgUrl: "profile_details_re_ch9r.svg",
    description:
      "Cześć, z tej strony Jarek. Mieszkam na Śląsku oraz tutaj studiuję na Politechnice Śląskiej w Gliwicach.",
    description2:
      "Frontendem zainteresowałem się już w 2018 roku gdzie to miałem okazję odbyć miesięczne praktyki w Rimini. Tam też zbudowałem moją pierwszą, taką z prawdziwego zdarzenia stronę internetową, która miała kilka fajnych funkcjonalności. Na przykład umożliwiała rejestrację oraz następnie logowanie się użytkowników. Mieli oni możliwość dodawania komentarzy pod postami, które znowu mógł tylko dodawać admin. Ogólnie byłem z niej wtedy bardzo zadowolony i od tamtego czasu postanowiłem zainteresować się tym tematem - stronami internetowymi.",
    description3:
      "Historia, którą tu opowiedziałem jest krótka ale opowiada mniej więcej jak to wszystko się zaczęło i teraz chciałbym się jeszcze bardziej rozwiać w kierunku frontenda z czasem może nawet przejścia na backend.",
  },
  myProjects: [
    {
      imgUrl: "desktop-design.jpg",
      description:
        "Prosty design strony przedstawiający galerie produktu z możliwością dodania ile elementów chce się dodać do koszyka. Możliwość usunięcia elementów z koszyka. Zabezpieczenie przed dodaniem przez użytkownika 0 produktów - wyświetli się wtedy alert, że nie można dodać 0 produktów. Zabezpieczenie również przed dodaniem produktów na minusie - również wyświetli się alert.",
      tech: ["react", "tailwindcss"],
      liveUrl:
        "https://programistajarek.github.io/ecommerce-product-page-main/",
      gitHubUrl:
        "https://github.com/ProgramistaJarek/ecommerce-product-page-main",
    },
    {
      imgUrl: "desktop-design2.jpg",
      description:
        "Aplikacja, która pobiera z bazy danych Advice Slip porady łącząc się z ich api. Użytkownik losowo losuję poradę z ich bazy. Strona przystosowana do działania na komputerach oraz na urządzeniach mobilnych",
      tech: ["react", "tailwindcss", "api"],
      liveUrl: "https://programistajarek.github.io/advice-generator-app-main/",
      gitHubUrl:
        "https://github.com/ProgramistaJarek/advice-generator-app-main",
    },
    {
      imgUrl: "desktop-design3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquerutrum sit amet metus id tristique. Fusce tristique nulla inelementum egestas. Aenean commodo turpis sapien, congue egestaslorem commodo sit amet. Quisque accumsan ante sed lacus accumsan dignissim.",
      tech: ["html", "sass"],
      liveUrl: "https://programistajarek.github.io/blogr-landing-page-main/",
      gitHubUrl: "https://github.com/ProgramistaJarek/blogr-landing-page-main",
    },
    {
      imgUrl: "desktop-design4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquerutrum sit amet metus id tristique. Fusce tristique nulla inelementum egestas. Aenean commodo turpis sapien, congue egestaslorem commodo sit amet. Quisque accumsan ante sed lacus accumsan dignissim.",
      tech: ["html", "sass"],
      liveUrl:
        "https://programistajarek.github.io/huddle-landing-page-with-curved-sections-master/",
      gitHubUrl:
        "https://github.com/ProgramistaJarek/huddle-landing-page-with-curved-sections-master",
    },
  ],
};
