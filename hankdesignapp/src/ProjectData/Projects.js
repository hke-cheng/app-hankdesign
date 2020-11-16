//Import each project
import cashOnDelivery from "./cashOnDelivery";
import voteProducts from "./voteProducts";
import wishLocalPickup from "./wishLocalPickup";
import storePage from "./storePage";
import DesignChallengeStock from "./DesignChallengeStock";
import Pemhub from "./Pemhub";

export default [
  { ...cashOnDelivery },
  { ...wishLocalPickup },
  { ...Pemhub },
  { ...DesignChallengeStock },
  { ...voteProducts },
  { ...storePage },
]