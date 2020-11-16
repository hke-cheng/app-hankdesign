
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
  Shoppers love repurchase at the same store where they had a successful shopping experience. 
  In this project, I redesigned the store page and allowed users to follow stores, 
  helping shoppers to build shopping routines.
  `,
  projectMetrics: [
    "+ GMV", "Competitive Analysis", "+ Repeat Purchase",
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
      In the current Wish app, we intentionally make the store page unreachable to users as shoed below. Because most of our merchants are small vandors who likely to update uncategorized products. 
      For example, you expect to find more clothing from a merchant, but when you go to the shop page, you find they sell lots of random products such as stationary and gears.
      `
    },
    {
      isImage: "true",
      url: img2,
      subTitle: "The next channel of GMV growth",
      content: `
      I was starting to think about what could be the next feature that drives GMV growth. 
      Since the current GMV are mainly from ① the "Popular Feed" where Wish recommend products to users based on their behavior. ⓶ the "Wish Local" where users can order products and pick up in the local stores. 
      The store page could be the potential.
      `
    },
    {
      isImage: "true",
      url:img3,
      subTitle: "Competitive Analysis",
      content: ` 
     Looking at our main global competitor, Aliexpress, they give store page a prominent place in the Aliexpress app. 
     It indirectly proved that this feature could drive GMV for them.
      `
    },
    {
      isImage: "true",
      url:img4,
      subTitle: "Treasure Box",
      content: `
      As I mentioned before, the reason why Wish decided to hide the store page is that lots of store pages
      are not match to users' expectation. 
      Luckily, I found that we also have a large group of merchants who only focus on selling one kind of product. 
      (i.e., 2E-youth, who only sell bags)
      `
    },
    {
      isImage: "true",
      url:img5,
      subTitle: "Solution",
      content: `
      We can find the eligible merchants and helping them create a store shopping experience. 
      We could measure how this experience impacts the GMV growth.
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
      In the new design, I made the store page sociable, trustworthy, and feedable by giving it a follow button and rearranged the layout.
      `
    },
    {
      isImage: "true",
      url:img8,
      subTitle: "Final Flow",
      content: `
      The basic flow of the store page is showing on below. 
      We don't change the flow because our current focus is to test the layout of the store page impression 
      and the follow button.
      `
    },   
  ],
  conclusion:[
    "Making store page socialable can increase repurchase rate and customer stickiness",

  ],
}
