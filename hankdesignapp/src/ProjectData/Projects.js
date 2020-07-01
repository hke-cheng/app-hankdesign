//Import each project
import cashOnDelivery from "./cashOnDelivery";
import voteProducts from "./voteProducts";
import wishLocalPickup from "./wishLocalPickup";
import storePage from "./storePage";
import DesignChallengeStock from "./DesignChallengeStock";

export default [
  { ...wishLocalPickup },
  { ...cashOnDelivery },
  { ...voteProducts },
  { ...DesignChallengeStock },
  { ...storePage },
]