//Import each project
import cashOnDelivery from "./cashOnDelivery";
import storePromotion from "./storePromotion";
import newUserFreeGift from "./NewUserFreeGift";
import voteProducts from "./voteProducts";
import wishLocalPickup from "./wishLocalPickup";
import storePage from "./storePage";

export default [
  { ...wishLocalPickup },
  { ...cashOnDelivery },
  { ...voteProducts },
  { ...storePage },
  

// { ...storePromotion },
// { ...newUserFreeGift },
  


]