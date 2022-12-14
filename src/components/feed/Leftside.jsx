import FeedCompanyDetails from "./FeedCompanyDetails";
import FeedUserDetails from "./FeedUserDetails";

const LeftSide = () => {
  return (
    <div>
      <FeedUserDetails />
      <FeedCompanyDetails />
      <div>FeedRecentHashtags</div>
    </div>
  );
};

export default LeftSide;
