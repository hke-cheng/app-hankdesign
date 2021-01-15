
import Colors from "../Constant/Colors";
import wishLogo from "../Constant/wishlogo.png";
//
import frontImage from "../Constant/imgs/cash-on-delivery/frontImage.png";
import heroImage from "../Constant/imgs/cash-on-delivery/heroImage.png";
import img1 from "../Constant/imgs/cash-on-delivery/1.png";
import img2 from "../Constant/imgs/cash-on-delivery/2.png";
import img3 from "../Constant/imgs/cash-on-delivery/3.png";
import img4 from "../Constant/imgs/cash-on-delivery/4.png";
import img5 from "../Constant/imgs/cash-on-delivery/5.png";
import img6 from "../Constant/imgs/cash-on-delivery/6.png";
import img7 from "../Constant/imgs/cash-on-delivery/7.png";
import img8 from "../Constant/imgs/cash-on-delivery/8.png";
import img9 from "../Constant/imgs/cash-on-delivery/9.png";
import img10 from "../Constant/imgs/cash-on-delivery/10.png";

export default {
  backgroundColor:`${Colors.greybg}`,
  textColor:`${Colors.black2}`,
  frontImage: frontImage,
  heroImage:heroImage,
  program: wishLogo,

  projectId: "Cash On Delivery",
  projectHightlight: "People in SEA can use Cash On Delivery as a Payment Option",
  projectIntro: `
  In SEA, people are more likly to use Cash on Delivery (COD) as the primary payment option when shopping online.
  People feel safe and secure when using COD. We want our users can purchase products at Wish without any concerns. 
  So we implemented the Cash on Delivery as the new payment method to increase the unique buyers' conversion rate 
  and GMV in the SEA market.
  `,
  projectMetrics: [
    "+GMV", "+ New Users", "A/B Test", "SEA Initiative"
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
    {
      name: "Brandon Wirakesuma",
      title: "General Manager-Southeast Asia @Wish",
      image: "https://media-exp1.licdn.com/dms/image/C4E03AQGpaH-4N9jWWQ/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=tnT7B9MOEeIVLHKrrh9uzRzQq_-lRVvnmIrRQjDDF0Q",
      url: "https://www.linkedin.com/in/brandonwirakesuma/"
    }
  ],
  duration:"3 weeks",
  contentDetails: [

    {
      isImage: "true",
      url: img1, 
      subTitle: "Why?",
      content: `
      The market insights collected from the marketing team shows that 60% of e-commerce transactions completed via Cash on Delivery (COD). 
      This pay-later-option is very common in SEA. COD can reduce the trail cost and barrier of making purchases at Wish. It also help with truth build with new users. 
      `
    },
    {
      isImage: "true",
      url:img2,
      subTitle: "A/B Testing Plan",
      content: `
      To understand the impacts of COD, we set an A/B testing plan with a control group of 50% of users, 
      keeping them on the current payment to them, and a show group with another 50% of users, 
      promoting them the COD payment option.
      `
    },
    {
      isImage: "true",
      url: img3,
      subTitle: "User Study",
      content: `
      Before jumping into design, I conducted a user study to understand the most common scenarios when using COD. I acquired 30 users who used COD before in the SEA region and asked them a set of questions about their experience. 
      `
    },
    {
      isImage: "true",
      url: img4,
      subTitle: "Competitive Analysis",
      content: `
      The user study revealed that people in SEA mainly use COD at Shopee, Lazada, Amazon, etc.`
    },
    {
      isImage: "true",
      url: img10,
      subTitle: "",
      content: `
      I ask the participants walk me through the COD experience in Amazon to know the existing experience and flows. 
      I noticed that the COD payment might be constrained by locations and products.
      `
    },
    {
      isImage: "true",
      url: img5,
      subTitle: "Product Insights",
      content: `
      A user experience flow has been drawn based on the user study.  The diagram shows how the COD works with insights and pinpoints about the current Cash on Delivery experience.
      `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "Design Solution",
      content: `
      I narrowed down to 3 primary user flows for the MVP by wrapping up insights and pain points.
      `
    },
    {
      isImage: "true",
      url:img7,
      subTitle: "Flow 1: Promote COD",
      content: `
      As a new payment method, we need to promote this new feature in the app to acknowledge the target audience. Educate users about how the COD works in the Wish app and what kind of benefits they can get from it.
      `
    },
    {
      isImage: "true",
      url:img8,
      subTitle: "Flow 2: Set up COD",
      content: `
      In the shopping cart, users can select COD as the payment method. In the setup process, users need to verify the phone number because the couriers rely on it to contact users once the package arrives. 
      However, in the western market, Wish app don't verify the user's phone number. 
      `
    },
    {
      isImage: "true",
      url:img9,
      subTitle: "Flow 3: Post-Purchase",
      content: `
      Once the package has arrived in the carrier company, we will send a notification to users, informing about the upcoming COD order one day before the delivery day. Users can look into the order details from the notification page or order history page. 
      We also highlight the amount to pay to the courier in a prominent position on the order history page. 
      `
    }, 
  ],
  conclusion:[
    "Cash On Delivery can be used in the market where people don't willing to put bank information online. It can help with the trust buiding in new market.",
    
  ]
}
