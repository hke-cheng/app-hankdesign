
import Colors from "../Constant/Colors";
import wishLogo from "../Constant/wishlogo.png";
//
import frontImage from "../Constant/imgs/new-store-page/frontImage.png";
import heroImage from "../Constant/imgs/new-store-page/heroImage.png";
import img1 from "../Constant/imgs/new-store-page/1.png";
import img2 from "../Constant/imgs/new-store-page/2.png";
import img3 from "../Constant/imgs/new-store-page/3.png";
import img4 from "../Constant/imgs/new-store-page/4.png";
import img5 from "../Constant/imgs/new-store-page/5.png";
import img6 from "../Constant/imgs/new-store-page/6.png";
import img7 from "../Constant/imgs/new-store-page/7.png";
import img8 from "../Constant/imgs/new-store-page/8.png";


export default {
  backgroundColor: `${Colors.greybg}`,
  textColor: `${Colors.black2}`,
  frontImage:frontImage,
  heroImage:heroImage,
  program: wishLogo,

  projectId: "New Store Page",
  projectHightlight: "Users can follow a store or repurchase in a store",
  projectIntro: `
  Shoppers love to repurchase in the same store where they had a successful shopping experience. In this project, I redesigned the store page and allowed users to follow stores, helping shoppers to build a private shopping routine.
  `,
  projectMetrics: [
    "+GMV", "Competitive Analysis", "+ Repeat Purchase",
  ],
  contributers: [
    {
      name: "Hank Ke",
      title: "Product Designer Intern @Wish",
      image: "https://lh3.googleusercontent.com/NeQQCxC9No-LUZFPOpSzrBXDzg-37k9zedf9AeLQI7yNbZeBdI3TiJOCX592YNmCMd99jTuzXuJicy8JtMmBoJa2DfB7ujk6OHzgGvpVvEGM4yccHG_kkXhLcK3GGpjAyGJ0PzXERcZMRts0p4-PUqaOfTPMMTxhBOW1ESNspXqKqvCgLyBtme_o6n2yv1BTiH62nM8Xg4VSw0f1U-ieiSUGIZVLY-cIaGqimDPjzPG1nkVVmz9GIynHvTwnKVnBvJxllom985RPbd1m_nnl5OS4ah6ZLapQ0BstLqNfvpnF3K3dcAJVsZcy5Hlkx-Nk3TUKEzlWOPF0zA95iUvz7hRQJ-l8oZqAkbxqAuH7ysXU4nXY_oQXwsXoHp0oUH9vEbnyj8wKnWPDYSpDHyRFWfOOsCa2uSJ2nVm-qUw9TSsrBIj56zP9dQz3iAmND-lDYb_vdHR1teE3FWItBeq_8_YwYblZDhpe1th1-JVdZ_UNsVmLE3vnGanVASh2ocBKfHyTk1aozfAmtQhjRzS3NQHeSPBdMt2-jHk-C_Ym8GhlL0VmchFGSJKjo41E5oEmdDVvFuIFPKyWlfXN7UuUv1jQk4jxsd066Psjh_m4Bz0wECS8qdsF-kCpY_BiWKQgHeCskAKQt5QVcSOarNKC7_4J3wDX7FpCA1Nf6wH8r9FcvFCGrX-8NlzUMkV6jg=w932-h1375-no?authuser=0",
      url: "https://www.linkedin.com/in/chenghan-ke/"
    },
  ],
  duration:"2 weeks",
  contentDetails: [
    {
      isImage: "true",
      url:img1,
      subTitle: "Control/Problem",
      content: `
      In the Wish app, we intentionally make the store page hard to reach to users (see below). Because most of our merchants have random categorized inventory, for example, you will find some merchants that you expect selling clothing are also selling kitchen utensils, stationery which has irrelevant to your expectation.
      `
    },
    {
      isImage: "true",
      url: img2,
      subTitle: "The next channel of GMV growth",
      content: `
      I was starting to think about what could be the next feature that drives GMV growth. Since the current GMV are mainly from 1) the "Popular Feed" where Wish recommend products to users based on their behavior. 2) the "Wish Local" where users can order products and pick up in the local stores. The store page could be an unexplored area.
      `
    },
    {
      isImage: "true",
      url:img3,
      subTitle: "Competitive Analysis",
      content: ` 
      While look at our main global competitor, Aliexpress, we can have an insight that shopping in a store could be a GMV driver because the store page holds a prominent place in the Aliexpress app. It indirectly proved that this feature should drive a lot of GMV for them.
      `
    },
    {
      isImage: "true",
      url:img4,
      subTitle: "Treasure Box",
      content: `
      As I mentioned before, the reason why Wish decided to hide the store page is that when users open the store page, they will end up with unexpected things. Luckily, I found that we also have a large group of merchants who only focus on selling one kind of product. (i.e., 2E-youth)
      `
    },
    {
      isImage: "true",
      url:img5,
      subTitle: "Solution",
      content: `
      We can find the eligible merchants and helping them create a store shopping experience. We could measure how this experience impacts the GMV growth.
      `
    },
    {
      isImage: "true",
      url:img6,
      subTitle: "Expectations from the new Store Page",
      content: `
     
      `
    },
    {
      isImage: "true",
      url:img7,
      subTitle: "New Design",
      content: `
      IIn the new design, I made the store page sociable, trustworthy, and feedable by giving it a follow button and rearranged layout.
      `
    },
    {
      isImage: "true",
      url:img8,
      subTitle: "Final Flow",
      content: `
      In the final design, it shows a basic flow of the store page. We don't change too much on the flow because our current focus is to test the layout of the store page and the follow button.
      `
    },   
  ],
  conclusion:[
    "Making store page socialable can increase repurchase rate and customer stickiness",

  ],
}
