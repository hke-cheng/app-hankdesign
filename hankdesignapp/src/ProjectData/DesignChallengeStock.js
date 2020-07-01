
import Colors from "../Constant/Colors";
import wishLogo from "../Constant/wishlogo.png";
//
import frontImage from "../Constant/imgs/bulltrade/frontImage.png";
import heroImage from "../Constant/imgs/bulltrade/heroImage.png";

import img2 from "../Constant/imgs/bulltrade/2.png";
import img3 from "../Constant/imgs/bulltrade/3.png";
import img4 from "../Constant/imgs/bulltrade/4.png";
import img5 from "../Constant/imgs/bulltrade/5.png";
import img6 from "../Constant/imgs/bulltrade/6.png";


export default {
  backgroundColor: `${Colors.greybg}`,
  textColor: `${Colors.black2}`,
  frontImage: frontImage,
  heroImage: heroImage,
  program: wishLogo,

  projectId: "BullTrade",
  projectHightlight: "Stock Trading App",
  projectIntro: `
  This project is for a design challenge. I created a BullTrade, stock trading app, facilitating users' daily trading activities.

  In this concept, I allow users to quickly switching from different activities, showing a view of trading stocks, portfolios, and watch lists with shortcut trading actions.
  Users can have good management of their investment.
  `,
  projectMetrics: [
    "Stock Investment", "User Interface", "Prototype"
  ],
  contributers: [
    {
      name: "Hank Ke",
      title: "Product Designer",
      image: "https://lh3.googleusercontent.com/NeQQCxC9No-LUZFPOpSzrBXDzg-37k9zedf9AeLQI7yNbZeBdI3TiJOCX592YNmCMd99jTuzXuJicy8JtMmBoJa2DfB7ujk6OHzgGvpVvEGM4yccHG_kkXhLcK3GGpjAyGJ0PzXERcZMRts0p4-PUqaOfTPMMTxhBOW1ESNspXqKqvCgLyBtme_o6n2yv1BTiH62nM8Xg4VSw0f1U-ieiSUGIZVLY-cIaGqimDPjzPG1nkVVmz9GIynHvTwnKVnBvJxllom985RPbd1m_nnl5OS4ah6ZLapQ0BstLqNfvpnF3K3dcAJVsZcy5Hlkx-Nk3TUKEzlWOPF0zA95iUvz7hRQJ-l8oZqAkbxqAuH7ysXU4nXY_oQXwsXoHp0oUH9vEbnyj8wKnWPDYSpDHyRFWfOOsCa2uSJ2nVm-qUw9TSsrBIj56zP9dQz3iAmND-lDYb_vdHR1teE3FWItBeq_8_YwYblZDhpe1th1-JVdZ_UNsVmLE3vnGanVASh2ocBKfHyTk1aozfAmtQhjRzS3NQHeSPBdMt2-jHk-C_Ym8GhlL0VmchFGSJKjo41E5oEmdDVvFuIFPKyWlfXN7UuUv1jQk4jxsd066Psjh_m4Bz0wECS8qdsF-kCpY_BiWKQgHeCskAKQt5QVcSOarNKC7_4J3wDX7FpCA1Nf6wH8r9FcvFCGrX-8NlzUMkV6jg=w932-h1375-no?authuser=0",
      url: "www.linkedin.com/in/chenghan-ke"
    }
  ],
  contentDetails: [
    {
      isImage: "false",
      url: "https://www.youtube.com/embed/EUrW14RjL4E",
      subTitle: "Prototype Video",
      content: `
     `
    },
    {
      isImage: "true",
      url: img2,
      subTitle: "Assumption",
      content: `
      To kick start the challenge and scope down the task, I assume that my user has invested in some stocks. He comes back the app daily, checking the investment performance, trading based on his strategy, searching new companies to invest and market insights and news. He will eventually get profits!
      `
    },
    {
      isImage: "true",
      url: img3,
      subTitle: "Empty State",
      content: `
      When the user first lands on BullTrade, we show empty states in different components. This simple page will construct a mindset for users about how the BullTrade work. Users can change activities, such as viewing watch list, news, etc. via left drawer, search stocks in the top search bar, keep informed of the market opening time. 
      `
    },
    {
      isImage: "true",
      url: img4,
      subTitle: "On Investment",
      content: `
      Once users start investing in the app, we will show them market indexes that they want to be informed, account performance, and portfolio listings. Users can take quick trading action by clicking the trade button on the list. By scrolling down, we also feed them daily news in the market.
  `
    },
    {
      isImage: "true",
      url: img5,
      subTitle: "Color",
      content: ` 
      Red and green is the universal language in the stock market to indicate the bullish or bearish. So, I decide only to use a single color and its shades to present the brand identity and functionality, keeping green and red stand out.
      `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "Design Component",
      content: `
      The entire app is made of components.  I keep components consistent and concise with brand color, shade, border, radius, and so on. It can reduce the complexity of the entire app and improve development efficiency.
      `
    },
    {
      isImage: "none",
      url: "",
      subTitle: "The End",
      content: `BullTrade is the design project for a design challenge, but I wish that I can finalize other flows and functionalities of the app, like searching, watch list, news, wallet once I have more time.`
    },

  ]
}