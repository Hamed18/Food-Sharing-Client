import RewardCriteria from "./RewardCriteria";
import ShowReward from "./ShowReward";

const Social = () => {
  return (
    <div>
      {/* Badge */}
      <section>
        <ShowReward></ShowReward>
      </section>

      {/* Reward criteria */}
      <section className="my-8">
        <RewardCriteria></RewardCriteria>
      </section>
    </div>
  );
};

export default Social;
