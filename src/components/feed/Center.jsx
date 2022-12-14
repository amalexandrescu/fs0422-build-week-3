import placeholder from "../../assets/v-team-logo.png"
import { MdPhotoSizeSelectActual, MdOutlineArticle } from "react-icons/md"
import { BsFillPlayBtnFill, BsBriefcaseFill } from "react-icons/bs"
const Center = () => {
  return (
    <>
      <div id="feed-start-a-post-container" className="border p-feed">
        <div id="start-a-post-top">
          <div className="border recommended-user-image mr-1">
            <img src={placeholder} alt="" />
          </div>
          <div id="start-a-post" className="gray-hover">
            Start a post
          </div>
        </div>
        <div id="start-a-post-lower">
          <div className="start-a-post-icon-text gray-hover">
            <MdPhotoSizeSelectActual
              className="text-primary"
              style={{ fontSize: "20px" }}
            />

            <span>Photo</span>
          </div>
          <div className="start-a-post-icon-text gray-hover">
            <BsFillPlayBtnFill
              className="text-success"
              style={{ fontSize: "20px" }}
            />
            <span>Video</span>
          </div>
          <div className="start-a-post-icon-text gray-hover">
            <BsBriefcaseFill className="indigo" style={{ fontSize: "20px" }} />
            <span>Job</span>
          </div>
          <div className="start-a-post-icon-text gray-hover">
            <MdOutlineArticle className="orange" style={{ fontSize: "20px" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Center
