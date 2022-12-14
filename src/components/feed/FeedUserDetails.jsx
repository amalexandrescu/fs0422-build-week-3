import { BookmarkFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const FeedUserDetails = () => {
  let details = useSelector((state) => state.myProfile.detailsData);
  let isFetched = useSelector((state) => state.myProfile.isFetched);

  return (
    <div
      className="bg-white hoverGreyBg"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid lightgrey",
      }}
    >
      {/* Header image */}
      <div style={{ height: "56px", overflow: "hidden" }}>
        <img
          src="https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?cs=srgb&dl=pexels-steve-johnson-1000366.jpg&fm=jpg"
          alt="User Header"
          style={{ width: "100%", objectFit: "cover", borderRadius: "10px" }}
        />
      </div>
      {/* Profile image */}
      <div className="d-flex justify-content-center">
        <div
          className="rounded-circle"
          style={{
            width: "72px",
            aspectRatio: "1/1",
            overflow: "hidden",
            transform: "translate3d(0px, -35px, 0px)",
            border: "2px solid white",
          }}
        >
          {isFetched ? (
            <img
              src={details.image}
              alt="User Profilepic"
              style={{ width: "100%", objectFit: "cover" }}
            />
          ) : (
            <></>
          )}
        </div>
        {/* Name and Position */}
      </div>
      <div style={{ transform: "translate3d(0px, -20px, 0px)" }}>
        <div className="d-flex justify-content-center text-center">
          <div style={{ fontSize: "16px", fontWeight: "500" }}>
            {details.name} {details.surname}
          </div>
        </div>
        <div
          style={{ fontSize: "12px", color: "grey" }}
          className={"text-center p-feed-x border-bottom p-feed-bottom"}
        >
          {details.title}
        </div>
        <div className="p-feed-y">
          <div className="d-flex mb-2 align-items-center justify-content-between p-feed-x hoverGreyBg">
            <div
              style={{ fontSize: "12px", color: "grey", fontWeight: "500" }}
              className={""}
            >
              Who' viewed your profile
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "500" }}
              className={"text-primary"}
            >
              52
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between p-feed-x hoverGreyBg">
            <div
              style={{ fontSize: "12px", color: "grey", fontWeight: "500" }}
              className={""}
            >
              Impressions of your post
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "500" }}
              className={"text-primary"}
            >
              82
            </div>
          </div>
          <div className="hoverGreyBg p-feed border-bottom">
            <div
              style={{
                fontSize: "12px",
                color: "grey",
                fontWeight: "400",
              }}
            >
              Acess explusive tools & insights
            </div>
            <div className="d-flex align-items-center">
              <div
                style={{
                  background:
                    "linear-gradient(225deg, rgba(255,179,0,0.6) 50%, rgba(255,157,0,1) 50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  marginLeft: "1px",
                }}
              ></div>
              <div
                style={{
                  fontSize: "12px",
                  color: "black",
                  fontWeight: "500",
                }}
                className={"p-feed-left"}
              >
                <u>Retry Premium free</u>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center p-feed-x hoverGreyBg"
          style={{ heigth: "100px !important" }}
        >
          <div className="text-secondary">
            <BookmarkFill />
          </div>
          <div
            className="p-feed-left text-dark"
            style={{
              fontSize: "12px",
              //   color: "black",
              fontWeight: "500",
            }}
          >
            My Items
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedUserDetails;