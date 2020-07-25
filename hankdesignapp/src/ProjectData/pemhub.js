
import Colors from "../Constant/Colors";
import wishLogo from "../Constant/wishlogo.png";
//
import frontImage from "../Constant/imgs/pemhub/frontImage.png";
import heroImage from "../Constant/imgs/pemhub/heroImage.png";

import img1 from "../Constant/imgs/pemhub/1.png";
import img2 from "../Constant/imgs/pemhub/2.png";
import img3 from "../Constant/imgs/pemhub/3.png";
import img4 from "../Constant/imgs/pemhub/4.png";
import img5 from "../Constant/imgs/pemhub/5.png";
import img6 from "../Constant/imgs/pemhub/6.png";
import img7 from "../Constant/imgs/pemhub/7.png";


export default {
  backgroundColor: `${Colors.greybg}`,
  textColor: `${Colors.black2}`,
  frontImage: frontImage,
  heroImage: heroImage,
  program: wishLogo,

  projectId: "PEMhub App",
  projectHightlight: "Help attendees build connection in a event",
  projectIntro: `
  We helped attendees in off-line events to build deep connections with other people. Users fully engage with content, attendees, and sponsors by interactive conference schedules and topics info, filtering attendees with like-minded experience and personal preference, and booking a timeslot with others to have a more in-depth 1:1 meeting.
  `,
  projectMetrics: [
    "Stock Investment", "User Interface", "Prototype"
  ],
  contributers: [
    {
      name: "Hank Ke",
      title: "Product Designer",
      image: "https://lh3.googleusercontent.com/NeQQCxC9No-LUZFPOpSzrBXDzg-37k9zedf9AeLQI7yNbZeBdI3TiJOCX592YNmCMd99jTuzXuJicy8JtMmBoJa2DfB7ujk6OHzgGvpVvEGM4yccHG_kkXhLcK3GGpjAyGJ0PzXERcZMRts0p4-PUqaOfTPMMTxhBOW1ESNspXqKqvCgLyBtme_o6n2yv1BTiH62nM8Xg4VSw0f1U-ieiSUGIZVLY-cIaGqimDPjzPG1nkVVmz9GIynHvTwnKVnBvJxllom985RPbd1m_nnl5OS4ah6ZLapQ0BstLqNfvpnF3K3dcAJVsZcy5Hlkx-Nk3TUKEzlWOPF0zA95iUvz7hRQJ-l8oZqAkbxqAuH7ysXU4nXY_oQXwsXoHp0oUH9vEbnyj8wKnWPDYSpDHyRFWfOOsCa2uSJ2nVm-qUw9TSsrBIj56zP9dQz3iAmND-lDYb_vdHR1teE3FWItBeq_8_YwYblZDhpe1th1-JVdZ_UNsVmLE3vnGanVASh2ocBKfHyTk1aozfAmtQhjRzS3NQHeSPBdMt2-jHk-C_Ym8GhlL0VmchFGSJKjo41E5oEmdDVvFuIFPKyWlfXN7UuUv1jQk4jxsd066Psjh_m4Bz0wECS8qdsF-kCpY_BiWKQgHeCskAKQt5QVcSOarNKC7_4J3wDX7FpCA1Nf6wH8r9FcvFCGrX-8NlzUMkV6jg=w932-h1375-no?authuser=0",
      url: "https://www.linkedin.com/in/chenghan-ke"
    },
    {
      name: "Jerry Li",
      title: "Founder @ SFELC",
      image: "https://media-exp1.licdn.com/dms/image/C5603AQFAHTHYHJ1_FA/profile-displayphoto-shrink_800_800/0?e=1600905600&v=beta&t=oplD-CZ4vUQT1c8ZVZuRmpBtIW7aaAURCyfkB7wTOFA",
      url: "https://www.linkedin.com/in/jerry-li-1bb1177/"
    },

  ],
  duration:"1 month",
  contentDetails: [

    {
      isImage: "true",
      url: img1,
      subTitle: "Pain Points",
      content: `
      I summarized 4 key pain points about attending a event by conducting desk research and contextual inquire. People usually stuggles with who to talk to in a event, when, and how.
      `
    },
    {
      isImage: "true",
      url: img2,
      subTitle: "Information Architecture",
      content: `I made the information architecture and used it as a tool to
      communicate the whole structure of the new update with PM.
      It is a useful tool for me to collect and prioritize information.
`
    },
    {
      isImage: "true",
      url: img3,
      subTitle: "Flow 01: On-boarding and Schedule Flow",
      content: `
      Users [enroll] in our event ➡ [On board to event] They are asked to fill up a questionnaire which decides how other people find them. ➡ Check event schedule ➡ Review topic information
       `
    },
    {
      isImage: "true",
      url: img4,
      subTitle: "",
      content: `
      Users [enroll] in our event ➡ [On board to event] They are asked to fill up a questionnaire which decides how other people find them. ➡ Check event schedule ➡ Review topic information
       `
    },
    {
      isImage: "true",
      url: img5,
      subTitle: "Flow 02: Search Attedees & Sponsor",
      content: ` 
      Users ➡ Check attendees list ➡ [Filter] by interests or [Search] by keywords ➡ Check attendees information 🤝
          `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "",
      content: `
      The entire app is made of components.  I keep components consistent and concise with brand color, shade, border, radius, and so on. It can reduce the complexity of the entire app and improve development efficiency.
      `
    },
    {
      isImage: "true",
      url: img7,
      subTitle: "Flow 03: Request a Meeting",
      content: `
      🅰️📤:Chose the person you want to meet with ➡ Pick a time slot ➡ Sent Meeting request and note ➡
🅱️📩:Get meeting request ➡ Accept or Reschedule or Cancel ➡ Get meeting information once accept 🤝
      `
    },
  ],
  conclusion:[
    "While designing for an update, the designer should know how to improve the product by changing so little on the current product. Balance the new design and the old systems. Any changes made on the existed product may cause chaos in the database. Both engineers and designers should do their best to avoid this issue.",
    "There is no perfect solution. It's all about teamwork and cooperation. It is crucial to understand the capacity of your team. We can not design something that can not happen. There are no unlimited resources either. Recognizing the limitation of your team will help you make appropriate design decisions.",
    "Know acknowledge to the origin of the data showed. "
  ]
}