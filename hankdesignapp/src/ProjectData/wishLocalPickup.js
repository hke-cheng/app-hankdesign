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
  People feel frustrated and being rejected while encountering an empty page with a sorry message. We want people to feel welcomed by avoiding empty pages and turning the unavoidable empty page into an actionable empty page. We used this strategy into the Wish's pickup order flow, where people usually drop off because of the high exposure of blank pages.
  `,
  projectMetrics: [
    "+ Pickup Order", "-DropOff Rate",
  ],
  contributers: [
    {
      name: "Sam Li",
      title: "Product Manager-Special Projects @Wish",
      image: "https://media-exp1.licdn.com/dms/image/C5603AQFnjuYGEhA7uA/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=T3FNx8oBVR7DxpH1c5ycIwKf13eSKR0CAWUMSwL10Zs",
      url: "https://www.linkedin.com/in/samlicmu/"
    }
  ],
  duration:"2 weeks",
  contentDetails: [
    {
      isImage: "true",
      url: img1,
      subTitle: "Control",
      content: `
      We added a  "Pick Up"  button on the product detail page. Users can add the pickup product to the cart by a single click If the pickup item has no variation. Users can also change the pickup location and stores based on their needs.
      `
    },
    {
      isImage:"true",
      url:img2,
      subTitle: "",
      content: `
      However, in the most common scenario, a product usually has different variants such as color, style, size. Users need to select a product variant before adding it to the cart. If the user wants to change the location and store or come from the "empty state," they need to choose the product variant first. We will show an empty page if the product variant is not available for pickup.
      `
    },
    {
      isImage: "true",
      url:img3, 
      subTitle: "Goal & Result",
      content: `
      As part of the Wish Local Program, we expect the local pickup flow can increase the volume of pickup order and facilitate the order-pickup experience. However, the pickup orders dropped 5.87% in the past experiment.
      `
    },
    {
      isImage: "true",
      url:img4, 
      subTitle: "Advanced Data",
      content: `
      More detailed data shows that most of our users are starting from the empty state impression, asking them to select a store. However, the total pickup click in the flow just hit 7,119, which demonstrated that users drop off the flow.  
      `
    },
    {
      isImage: "true",
      url:img5, 
      subTitle: "User Dropoff",
      content: `
      People have a higher chance of receiving an empty page than expected, especially when the product has variation, and each local store has a different inventory. A lot of variants will not available for pickup.
      `
    },
    {
      isImage: "true",
      url: img6,
      subTitle: "Assumption 01",
      content: `
      To solve the problem, I proposed that we only show the product variants available for pickup to users. The limited choices can increase the success of making pickup orders. Once users want more options, they can open the product options list and back to the general purchase flow.
      `
    },
    {
      isImage: "true",
      url: img7,
      subTitle: "Assumption 02",
      content: `
      Add the "ship to me instead" option on the empty page so that users can add the product to the cart without feeling rejected. In return, it will increase the general GMV.
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
    "Always give users alternative options while they meet unavoidable empty page."
  ]
}

//https://<iframe width="100%" height="800px" src="https://overflow.io/embed/T6NBLZ" scrolling="no" allowfullscreen style="border: 1px solid #E6E9EC; border-radius: 4px;"></iframe>