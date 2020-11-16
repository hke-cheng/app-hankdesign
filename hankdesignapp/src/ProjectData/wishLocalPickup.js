import Colors from "../Constant/Colors";
import wishLogo from "../Constant/wishlogo.png";
//
import frontImage from "../Constant/imgs/pick-up/frontImage.png";
import heroImage from "../Constant/imgs/pick-up/heroImage.png";
import img1 from "../Constant/imgs/pick-up/1.png";
import img2 from "../Constant/imgs/pick-up/2.png";
import img3 from "../Constant/imgs/pick-up/3.png";
import img4 from "../Constant/imgs/pick-up/4.png";
import img5 from "../Constant/imgs/pick-up/5.png";
import img6 from "../Constant/imgs/pick-up/6.png";
import img7 from "../Constant/imgs/pick-up/7.png";
import img8 from "../Constant/imgs/pick-up/8.png";


export default {
  backgroundColor: `${Colors.greybg}`,
  textColor: `${Colors.black2}`,
  frontImage: frontImage,
  heroImage: heroImage,
  program: wishLogo,

  projectId: "Redesign Pickup Order Flow",
  projectHightlight: "Avoiding empty page let users feel welcomed",
  projectIntro: `
  People feel frustrated and being rejected while encountering an empty page with a red sorry message. 
  We want people to feel welcomed by avoiding empty pages and turning the unavoidable empty page into an actionable page. 
  We used this strategy into the Wish's pickup order flow, where people usually drop off because of the high exposure of empty pages.
  `,
  projectMetrics: [
    "+ Pickup Order", "- DropOff Rate",
  ],
  contributers: [
    {
      name: "Hank Ke",
      title: "Product Designer",
      image: "https://lh3.googleusercontent.com/NeQQCxC9No-LUZFPOpSzrBXDzg-37k9zedf9AeLQI7yNbZeBdI3TiJOCX592YNmCMd99jTuzXuJicy8JtMmBoJa2DfB7ujk6OHzgGvpVvEGM4yccHG_kkXhLcK3GGpjAyGJ0PzXERcZMRts0p4-PUqaOfTPMMTxhBOW1ESNspXqKqvCgLyBtme_o6n2yv1BTiH62nM8Xg4VSw0f1U-ieiSUGIZVLY-cIaGqimDPjzPG1nkVVmz9GIynHvTwnKVnBvJxllom985RPbd1m_nnl5OS4ah6ZLapQ0BstLqNfvpnF3K3dcAJVsZcy5Hlkx-Nk3TUKEzlWOPF0zA95iUvz7hRQJ-l8oZqAkbxqAuH7ysXU4nXY_oQXwsXoHp0oUH9vEbnyj8wKnWPDYSpDHyRFWfOOsCa2uSJ2nVm-qUw9TSsrBIj56zP9dQz3iAmND-lDYb_vdHR1teE3FWItBeq_8_YwYblZDhpe1th1-JVdZ_UNsVmLE3vnGanVASh2ocBKfHyTk1aozfAmtQhjRzS3NQHeSPBdMt2-jHk-C_Ym8GhlL0VmchFGSJKjo41E5oEmdDVvFuIFPKyWlfXN7UuUv1jQk4jxsd066Psjh_m4Bz0wECS8qdsF-kCpY_BiWKQgHeCskAKQt5QVcSOarNKC7_4J3wDX7FpCA1Nf6wH8r9FcvFCGrX-8NlzUMkV6jg=w932-h1375-no?authuser=0",
      url: "https://www.linkedin.com/in/chenghan-ke"
    },
    {
      name: "Sam Li",
      title: "Product Manager-Special Projects @Wish",
      image: "https://media-exp1.licdn.com/dms/image/C5603AQFnjuYGEhA7uA/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=-eKX-j_Xe-WA93OB0tGSpgnaRtWmqciy65t2BXv2a6c",
      url: "https://www.linkedin.com/in/samlicmu/"
    },
  ],
  duration:"2 weeks",
  contentDetails: [
    {
      isImage: "true",
      url: img1,
      subTitle: "Control",
      content: `
      In our current experience, users can purchase a product by picking up at a local store through the "Pick Up" button on the product detail page. 
      Users choose and add the pickup product to the cart directly if there is no product variation. 
      Users can also change the pickup stores based on their location or preferences.
      `
    },
    {
      isImage:"true",
      url:img2,
      subTitle: "",
      content: `
      However, in the most common use cases, a product usually has different variants such as color, style, size. 
      Users need to select a product variant before adding it to the cart. Users might choose the product that is not available for pickup to direct users to the empty page. 
      Suppose the user wants to change the pickup location after selecting the product variants. 
      In that case, an empty page is likely to occur because there is no pickup store available around the new location.
      `
    },
    {
      isImage: "true",
      url:img3, 
      subTitle: "Goal & Result",
      content: `
      As part of the Wish Local Program, 
      we expect the local pickup flow can increase the pickup order and facilitate the order-pickup experience. 
      However, the pickup orders dropped 5.87% in this experiment.
      `
    },
    {
      isImage: "true",
      url:img4, 
      subTitle: "Advanced Data",
      content: `
      More detailed data shows that most of our users are starting from the empty state impression, asking them to select a store. 
      However, the total pickup click in the flow just hit 7,119, which demonstrated that users drop off the flow.  
      `
    },
    {
      isImage: "true",
      url:img5, 
      subTitle: "User Dropoff",
      content: `
      People have a high chance to recive the empty page, when the product has variation. 
      That is because a lot of variants showed on the modal are not available for pickup.
      But people will click without awaring it.
      The empty page makes users think that the entire product is out of stock.
      `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "Assumption 01",
      content: `
      To solve the problem, I proposed that we only show the product variants available for pickup to users. 
      The limited choices can increase the success of making pickup orders. 
      If users need more options, they can click the button, "Option available to shipping", to open the full product options list and back to the general purchase flow.
      `
    },
    {
      isImage: "true",
      url: img7,
      subTitle: "Assumption 02",
      content: `
      I know users will encounter empty page at some point. 
      I added the "ship to me instead" option on the empty page so that users can add the product to the cart without feeling rejected. In return, it will increase the general GMV.
      `
    },
    {
      isImage: "true",
      url:img8, 
      subTitle: "Final Flow",
      content: `
      The finalized flow shows the entire pickup logic under two different impressions. We believe that the new flow could increase the number of pickup orders and reduce the drop off rate.
      `
    }, 
  ],
  conclusion:[
    "In any product flows, we need to help users avoiding empty pages, letting people feel comfortable and welcomed.",
    "By avoiding empty pages, we can limite users' entries and only guide them into the right places where they expected.",
    "Always give users alternative options/actions if empty page is unaviodable."
  ]
}

//https://<iframe width="100%" height="800px" src="https://overflow.io/embed/T6NBLZ" scrolling="no" allowfullscreen style="border: 1px solid #E6E9EC; border-radius: 4px;"></iframe>