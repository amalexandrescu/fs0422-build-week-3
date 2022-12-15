import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BsThreeDots } from "react-icons/bs"
import {
  editShowToggleAction,
  getFeedPostsAction,
  saveSelectedFeedPostAction
} from "../../redux/actions"
import FeedPostLike from "./FeedPostLike"
import EditOwnPosts from "./EditOwnPosts"

export default function MainFeedSectionWithPosts() {
  // const [showEdit, setShowEdit] = useState(false)
  const editOptions = useSelector((state) => state.editPostModal.openDropdown)

  const allFeedPosts = useSelector((state) => state.feedPosts.feedPostArray)
  //   reversing the array so we get the newest posts
  const allLatestPosts = allFeedPosts.slice(0).reverse()
  //   filtering out short posts
  const filteredPosts = allLatestPosts.filter((post) => post.text.length > 10)
  // getting 20 posts from the remaining array
  const latestPostSlice = filteredPosts.slice(0, 30)

  const userId = useSelector((state) => state.myProfile.detailsData._id)

  const dispatch = useDispatch()

  const myPostClickedHandler = (post) => {
    console.log("my post is clicked")
    dispatch(editShowToggleAction())
    console.log(post)
    // use this post when editing
    dispatch(saveSelectedFeedPostAction(post))
  }

  useEffect(() => {
    dispatch(getFeedPostsAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {allFeedPosts && (
        <>
          {latestPostSlice.map((post) => (
            <div key={post._id} className="feed-post border p-feed pb-1">
              {post.user._id === userId ? (
                <>
                  <div className="d-flex justify-content-between mr-2 ml-2">
                    <div></div>
                    <div
                      className="post-dots  gray-hover"
                      onClick={myPostClickedHandler.bind(null, post)}
                    >
                      <BsThreeDots />
                    </div>
                  </div>
                  {editOptions && <EditOwnPosts />}
                </>
              ) : (
                <div className="d-flex justify-content-between mr-2 ml-2">
                  <div></div>
                  <div className="post-dots  gray-hover">
                    <BsThreeDots />
                  </div>
                </div>
              )}
              <div className=" border-top mr-2 ml-2">
                <div className="mt-3 d-flex ">
                  <div className="border recommended-user-image">
                    <img src={post.user.image} alt="" />
                  </div>{" "}
                  <div className="feed-text-user-wrapper">
                    <div className="mb-0 small-header-text bolder feed-text-name">
                      <span>{post.user.name}</span>
                      <span>{post.user.surname}</span>
                    </div>
                    <div className="mb-1 small-height">
                      <span className="feed-post-tiny-text truncate-text">
                        {post.user.title}
                      </span>
                    </div>
                    <div className="mb-1 small-height">
                      <span className="feed-post-tiny-text  ">
                        {post.user.createdAt}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-3"> {post.text}</p>
              </div>

              <FeedPostLike />
            </div>
          ))}
        </>
      )}
    </>
  )
}
