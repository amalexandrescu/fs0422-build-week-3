import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Pencil, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfileDetailsAction } from "../../redux/actions";
import EditUserDetailsModal from "./EditUserDetailsModal";

const UserDetails = () => {
  let details = useSelector((state) => state.myProfile.detailsData);
  let isFetched = useSelector((state) => state.myProfile.isFetched);
  console.log("🚀UserDetails ~ details", details);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfileDetailsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row className="mt-3">
      {isFetched ? (
        <Col className="firstComponent">
          <div className="headerImageDiv">
            <Row className="justify-content-between">
              {/* User profile Image */}
              <div className="profileImageDiv d-flex justify-content-center align-items-center">
                <img
                  src={details.image}
                  alt="User profile img"
                  className="profileImage"
                />
              </div>

              {/* Edit Button User profile Header */}
              <div className="editButtonDiv d-flex justify-content-center align-items-center">
                <Pencil className="text-dark" />
              </div>
            </Row>
          </div>
          {/* User Info Section*/}
          <div className="bg-white">
            {/* User Info Edit Button */}
            <Row className="justify-content-end">
              <EditUserDetailsModal />
            </Row>

            {/* User Info Content */}
            <Row>
              <Col>
                <div className="col-6 d-flex flex-column align-items-start pb-2 px-4 userInfoDiv ">
                  <h4>
                    {details.name} {details.surname}
                  </h4>

                  <h6>{details.title}</h6>
                  <p className="text-secondary my-1">
                    {details.area} ·{" "}
                    <a href="/">
                      <b>Contact info</b>
                    </a>
                  </p>
                  <a href="/">
                    <p>385 connections</p>
                  </a>

                  {/* Section 3 Links Pills */}
                  <div className="col d-flex justify-content-between px-0 my-2">
                    <div className="openToDiv rounded-pill text-white py-1 px-3">
                      <div> Open to</div>
                    </div>
                    <div className="addProfileSectionDiv bg-white rounded-pill py-1 px-3 mx-2">
                      <div> Add profile section</div>
                    </div>
                    <div className="moreDiv bg-white rounded-pill py-1 px-3">
                      <div> More</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Open to work section */}
            <Row className="justify-content-between mx-4 pb-4 flex-nowrap">
              {/* Left side */}
              <div className="col-6 d-flex openToWorkDiv px-2 py-2 mr-1">
                <div className="col-11  d-flex flex-column px-0">
                  <p className=" d-flex mb-0 openToWorkParagraph">
                    Open to work
                  </p>

                  <p className="d-flex mb-0 titleParagraph">
                    Frontend Developer, Full Stack Developer
                  </p>
                  <a href="/" className="d-flex seeAllDetailsAnchor">
                    See all details
                  </a>
                </div>
                <div className="col-1 p-0">
                  <div className="iconsOpenToWorkSection">
                    <Pencil />
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="col-6 d-flex shareHiringDiv px-2 py-2 ml-1">
                <div className="col-11  d-flex flex-column px-0">
                  <p className=" d-flex mb-0 openToWorkParagraph">
                    Share that you're hiring and attract qualified candidates
                  </p>

                  <a href="/" className="d-flex seeAllDetailsAnchor">
                    See all details
                  </a>
                </div>
                <div className="col-1 p-0">
                  <div className="iconsOpenToWorkSection">
                    <XLg />
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </Col>
      ) : (
        <></>
      )}
    </Row>
  );
};

export default UserDetails;
