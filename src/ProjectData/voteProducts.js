import Colors from "../Constant/Colors";
import wishLogo from "../Constant/wishlogo.png";
//
import frontImage from "../Constant/imgs/like-dislike/frontImage.png";
import heroImage from "../Constant/imgs/like-dislike/heroImage.png";
import img1 from "../Constant/imgs/like-dislike/1.png";
import img2 from "../Constant/imgs/like-dislike/2.png";
import img3 from "../Constant/imgs/like-dislike/3.png";
import img4 from "../Constant/imgs/like-dislike/4.png";
import img5 from "../Constant/imgs/like-dislike/5.png";
import img6 from "../Constant/imgs/like-dislike/6.png";



export default {
  backgroundColor: `${Colors.greybg}`,
  textColor: `${Colors.black2}`,
  frontImage: frontImage,
  heroImage: heroImage,
  program: wishLogo,

  projectId: "Like or Dislike Product",
  projectHightlight: "New Users can improve the relevance of the initial feed",
  projectIntro: `
  People are lack patient for a lengthy onboarding process. We transfer the part of collecting users' preferences from the onboarding process into product feed, allowed new users to like or dislike a list of selected products in the initial product feed. 
  The onboarding flow becomes much shorter and delightful. Users can get more relevant products within the first 7dys as they engage in it. 
  `,
  projectMetrics: [
    "New User Experience", "- DropOff", "+ Unique Buyers' Conversion",
  ],
  contributers: [
    {
      name: "Kristina Wang",
      title: "Product Manager @Wish",
      image: "https://media-exp1.licdn.com/dms/image/C5603AQHPoVWmBkT5bQ/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=686WBGmsjlWIm5QQOtCVystUhjd9BziGPDGsjBXKYzk",
      url: "https://www.linkedin.com/in/kristinatwang/"
    }
  ],
  duration:"2 weeks",
  contentDetails: [
    {
      isImage: "true",
      url: img1,
      subTitle: "Control & Issue",
      content: `
      Users were used to asked to choose products they like from a list of example products while onboarding. 
      So we can have the initial data about users' preferences. The we can customize the first product feed for them accordingly. 
      However, people like to pass the onboarding flow as quickly as possible. They might skip or drop off the onboarding flow or choose random products to pass the process as quick as possible. 
      It bring the higher chance of collecting wrong data about people's preference and generate irrelevant products in the feed.
      `
    },
    {
      isImage: "true",
      url: img2,
      subTitle: "Relevance Theory",
      content: `
      This diagram shows my understanding of four phases of relevance in a recommending system. 
      The recommending system starts with initial data about users, 
      so it can feed users with juicy content. 
      However, if we generate a wrong content such as the information that users are not interested in. 
      The recommending system needs to spend more time correcting the users' data. 
      The cost of collecting wrong data at beging not only waste more time, but also increade the drop-off rate.
      `
    },
    {
      isImage: "true",
      url: img3,
      subTitle: "Idea and Iteration",
      content: `
      Instead of choosing example products in the onboarding flow, we allow users to like or dislike products in different categories in the product feed. 
      We give users more freedom and patient to choose.
       Thus, we can reduce the possibility of collecting the wrong initial data and shorten the onboarding flow.
      `
    },
    {
      isImage: "true",
      url: img4,
      subTitle: "Form Exploration",
      content: `
      I tried different UI forms of inserting the like or dislike voting into product feed and product tile. 
      In order to test the effeciency of the voting on product feature. I come up with two different design and do A/B Testing on it.
      `
    },
    {
      isImage: "true",
      url: img5,
      subTitle: "Show 1: Tutorial ",
      content: `
      In the show 1, We adds a like or dislike button in the original tile. 
      Because we can get more data without interruption user's shopping experience. 
      The like or dislike feature will be first inroduced by blocking the screen and giving users a tutorial.
      `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "Show 2: ToolTip",
      content: `
      An alternative option is to show a tooltip under the like or dislike button. So users will know what this feature is.
    ` },

  ],
  conclusion:["Make a delightful onboarding process will acquire more users.", "Letting users to change or input reference in the product feed can increase the accuracy of new users inital data. "]
}
