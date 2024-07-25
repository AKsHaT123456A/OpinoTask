import { CarouselDataType } from "@/types/CarousalDataType";
import { TrendingNowType } from "@/types/TrendingNowTypes";

export const CardData: CarouselDataType = {
  items: [
    {
      id: 1,
      image: require("../assets/images/cricket.png"),
      title: "Red",
    },
    {
      id: 2,
      image: require("../assets/images/bitcoin.png"),
      title: "Bitcoin",
    },
    {
      id: 3,
      image: require("../assets/images/football.png"),
      title: "Football",
    },
    {
      id: 4,
      image: require("../assets/images/increase.png"),
      title: "Stocks",
    },
    {
      id: 5,
      image: require("../assets/images/rotate.png"),
      title: "Economy",
    },
    {
      id: 6,
      image: require("../assets/images/media.png"),
      title: "News",
    },
    {
      id: 9,
      image: require("../assets/images/basketball.png"),
      title: "Basketball",
    },
    {
      id: 7,
      image: require("../assets/images/youtube.png"),
      title: "Youtube",
    },
    {
      id: 8,
      image: require("../assets/images/chess.png"),
      title: "Chess",
    },
  ],
  type: "card",
};

export const trendingNowData1: TrendingNowType = {
  items: [
    {
      id: 1,
      image: require("../assets/images/ipl.png"),
      title: "KOL v/s MUMB",
    },
    {
      id: 2,
      image: require("../assets/images/footballLogo.png"),
      title: "PSG V/S Dortmund",
    },
    {
      id: 3,
      image: require("../assets/images/bitcoin.png"),
      title: "Bitcoin",
    },
    {
      id: 4,
      image: require("../assets/images/increase.png"),
      title: "Growth",
    },
  ],
  type: "card",
};

export const trendingNowData2: TrendingNowType = {
  items: [
    {
      id: 3,
      image: require("../assets/images/bitcoin.png"),
      title: "Bitcoin",
    },
    {
      id: 4,
      image: require("../assets/images/increase.png"),
      title: "Growth",
    },
    {
      id: 1,
      image: require("../assets/images/ipl.png"),
      title: "KOL v/s MUMB",
    },
    {
      id: 2,
      image: require("../assets/images/footballLogo.png"),
      title: "PSG V/S Dortmund",
    },
  ],
  type: "card",
};


export const BannerData: CarouselDataType = {
    items: [
      {
        id: 1,
        image: require("../assets/images/carousal.jpg"),
        altText: "First Image",
      },
      {
        id: 2,
        image: require("../assets/images/carousal.jpg"),
        altText: "Second Image",
      },
      {
        id: 3,
        image: require("../assets/images/carousal.jpg"),
        altText: "Third Image",
      },
    ],
    type: "banner",
  };


export  const BettingCardData = [
    {
      id: 1,
      question: "Kolkata to win the match vs Mumbai?",
      info: "H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0",
      yesOdds: "5.3",
      noOdds: "4.7",
      logo: require("../assets/images/ipl.png"),
    },
    {
      id: 2,
      question: "Delhi to win the match vs Bangalore?",
      info: "H2H last 5 T20 : Delhi 3, Bangalore 2, DRAW 0",
      yesOdds: "4.5",
      noOdds: "5.0",
      logo: require("../assets/images/ipl.png"),
    },
    {
      id: 3,
      question: "Delhi to win the match vs Bangalore?",
      info: "H2H last 5 T20 : Delhi 3, Bangalore 2, DRAW 0",
      yesOdds: "4.5",
      noOdds: "5.0",
      logo: require("../assets/images/ipl.png"),
    },
    
  ];
  