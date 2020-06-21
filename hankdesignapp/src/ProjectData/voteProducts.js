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
  As part of the New User Experience program, we start to allow new users to like or dislike a list of selected products in the initial feed to increase the relevancy of the personalized product feed within the first 7d. We believe that we can get initial data about users' shopping preferences.
  `,
  projectMetrics: [
    "New User Experience", "- DropOff", "+ Unique Buyers' Conversion",
  ],
  contributers: [
    {
      name: "Kristina Wang",
      title: "Product Manager @Wish",
      image: "https://media-exp1.licdn.com/dms/image/C5603AQHPoVWmBkT5bQ/profile-displayphoto-shrink_800_800/0?e=1597276800&v=beta&t=QfOzSoSdjzHczObQtNBuZJjqUJgYcoOw7_18j9FeHV0",
      url: "https://www.linkedin.com/in/kristinatwang/"
    }
  ],
  contentDetails: [
    {
      isImage: "true",
      url: img1,
      subTitle: "Control & Issue",
      content: `
      Users were asked to choose products they like from a list of example products while onboarding. So we can have initial data about the user's preferences and customize the first product feed for them. 🔴 But, people like to pass the onboarding flow as quickly as possible. They will skip or drop off the onboarding flow or choose random products to pass the process. We end up with no initial data or getting misleading data about their preferences.  
      `
    },
    {
      isImage: "true",
      url: img2,
      subTitle: "Relevance Theory",
      content: `
      The diagram shows my understanding of four phases of relevance in a recommending system. 
The recommending system starts with initial data about users, so it can feed users what they want. However, sometimes, it begins with a list of misleading data about users, generating the information that users are not interested in. The recommending system needs to spend time correcting the users' data. As more interaction involved, it can give more relevant information to users.  In someday the recommending system will reach to the "information cocoons" where it only feed user the information they love. But users start to lose interest.
      `
    },
    {
      isImage: "true",
      url: img3,
      subTitle: "Idea and Iteration",
      content: `
      Instead of choosing example products in the onboarding flow, we allow users to like or dislike selected products in the product feed. So users can take surveys as points as they want. They can correct their preferences too. Thus, we can reduce the possibility of getting the wrong initial data and shorten the onboarding flow.
      `
    },
    {
      isImage: "true",
      url: img4,
      subTitle: "Form Exploration",
      content: `
      I tried different UI forms of inserting the like or dislike voting into product feed. For example, we could add a horizontal row, votable tile, or swipeable card, like "Tinder".
      `
    },
    {
      isImage: "true",
      url: img5,
      subTitle: "Show 1: Tutorial ",
      content: `
      We eventually choose the Tile concept, which adds a like or dislike button in the tile. Because we can get more data without interruption user's shopping experience. In the show 1, I introduce the like or dislike feature by blocking the screen and giving them a tutorial screen.
      `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "Show 2: ToolTip",
      content: `
    An alternative option is to show a tooltip under the like or dislike button. So users will know what this feature is.
    ` },
    {
      isImage: "",
      url: "",
      subTitle: "Next Step",
      content: `
      We will track the unique buyers' conversion rate comparing control and shows. We will also let these two show contest with each other.
      `
    },

  ]
}
