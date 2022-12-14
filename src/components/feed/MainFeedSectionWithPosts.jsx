import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getFeedPostsAction } from "../../redux/actions"
import FeedPostLike from "./FeedPostLike"

export default function MainFeedSectionWithPosts() {
  const allFeedPosts = useSelector((state) => state.feedPosts.feedPostArray)
  //   reversing the array so we get the newest posts
  const allLatestPosts = allFeedPosts.slice(0).reverse()
  //   filtering out short posts
  const filteredPosts = allLatestPosts.filter((post) => post.text.length > 25)
  console.log("filtered length", filteredPosts.length)
  // getting 20 posts from the remaining array
  const latestPostSlice = filteredPosts.slice(0, 30)
  console.log("-----------latest 30 posts---------", latestPostSlice)

  const dispatch = useDispatch()

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
              <div className=" border-top mr-2 ml-2">
                <p className="mt-3 mb-3"> {post.text}</p>
              </div>

              {console.log(post.text.length)}
              <FeedPostLike />
            </div>
          ))}
        </>
      )}
    </>
  )
}
