import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const instance = new web3.eth.Contract(
  CampaignFactory,
  "0x35746Aa5B469EfE9717c00fd3996C94d9da09A27"
);

export default instance;