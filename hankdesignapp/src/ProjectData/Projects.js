//Import each project
import cashOnDelivery from "./cashOnDelivery";
import voteProducts from "./voteProducts";
import wishLocalPickup from "./wishLocalPickup";
import storePage from "./storePage";
import DesignChallengeStock from "./DesignChallengeStock";
import pemhub from "./pemhub";

export default [
  { ...pemhub },
  { ...DesignChallengeStock },
  { ...wishLocalPickup },
  { ...cashOnDelivery },
  { ...voteProducts },
  { ...storePage },
]