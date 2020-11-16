
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
  The attendees of our onsite events can build deep and effecient connections with other people in the same event.
  Users are able to quickly find the people they want to meet with in terms of their purpose. 
  They can message and book a timeslot for the in-depth 1:1 meeting in the PEMhub app.
  `,
  projectMetrics: [
    "Social App", "Community", "Conference"
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
      image: "https://media-exp1.licdn.com/dms/image/C5603AQFAHTHYHJ1_FA/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=Wsg96W3u3yJ1QPaNu82ACOibbP7zdl8kHotKjYX_YtE",
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
      People want to build connections and make friends with others when attending an event, 
      but it isn't easy to find a person who shares the same interests, values, and goals.
      Finding the right timing to say "Hi!" and breaking the silence is also tricky due to the event's schedule. 
      Thus, the efficiency of building connections become a crucial factor for the experience of an event.      `
    },
    {
      isImage: "true",
      url: img2,
      subTitle: "Information Architecture",
      content: `
      When the users registered in an event, they will be direct to the event detail page, where they can meet with all the 
      attendees. Users can reviews the attendees' profile and search the attendess that match to their interests and purpose, 
      which help them build connection more effective. (The IA shows you details about the product structure.)
      `
    },
    {
      isImage: "true",
      url: img3,
      subTitle: "Flow 01: Onboarding to New Event",
      content: `
      ① Users enrolled/registered in the event 
      ⟶ ② They are asked to complete a form which will determine how other people find them. 
      ⟶ ③ Users will land on the page with detailed event schedule.
      ⟶ ④ Users can mark the topics that interested about.
      ⟶ ⑤ People will be directed to the topic detail page with the information of topic, topic description, and speakers' information.
       `
    },
    {
      isImage: "true",
      url: img4,
      subTitle: "",
      content: `
       `
    },
    {
      isImage: "true",
      url: img5,
      subTitle: "Flow 02: Find Attedees & Sponsor",
      content: ` 
      ⓪ Users want to find an attendee who have the interests, focus, value in common.
      ⟶ ① They click the Attendees Tab
      ⟶ ② Review the attendees list 
      ⟶ ③ They can filter the list reasults by toggling filter list 
      ⟶ or search keywords in the search field.
      ⟶ ④ Users review the attendees' profile information till find the one ✔️
      `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "",
      content: `
      `
    },
    {
      isImage: "true",
      url: img7,
      subTitle: "Flow 03: Request a Onsite Meetup",
      content: `
      ⓪ If users want to meet up on the event, they can schudle a meeting before ahead.
      ⟶ ① Users can choose a person to meet with in the attendee list.
      ⟶ ② Tap the "Suggest Meeting" Button to select a timeslot.
      ⟶ ③ Sent Meeting request and note to the recipient.
      
      ⓪ The recipient recived meeting request message.
      ⟶ ① They can accept /reschedule / cancel the meeting.
      ⟶ ② Get meeting summary with meeting spot once the request has been approved ✔️
      ` 
    },
  ],
  conclusion:[
    "The entire app is made of shareable components. I kept the consistency of components, making them concise with brand color, shade, border, radius, etc. It reduced the complexity of the entire app and improved development efficiency.", 
    "Designers need to know how to iterate product with minimum efforts (MVP). It will speed up the implementation process and improve testing efficiency.",
    "There is no perfect solution. It's all about teamwork and cooperation. Working in a small team and having a strict timeline, it is crucial to understand the capacity of your team. Recognizing the limitation of your team will help you make appropriate design decisions.",
    "Being aware of where the data come from will help to make a design decision."
  ]
}