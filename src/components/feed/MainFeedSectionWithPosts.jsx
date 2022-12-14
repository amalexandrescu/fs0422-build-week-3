import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getFeedPostsAction } from "../../redux/actions"

export default function MainFeedSectionWithPosts() {
  const allFeedPosts = useSelector((state) => state.feedPosts.feedPostArray)
  //   reversing the array so we get the newest posts
  const allLatestPosts = allFeedPosts.slice(0).reverse()
  //   filtering out short posts
  const filteredPosts = allLatestPosts.filter((post) => post.text.length > 10)
  // getting 20 posts from the remaining array
  const latestPostSlice = filteredPosts.slice(0, 20)
  console.log("-----------latest 20 posts---------", latestPostSlice)

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
            <div key={post._id} className="feed-post border p-feed">
              {post.text}
              {console.log(post.text.length)}
            </div>
          ))}
        </>
      )}
    </>
  )
}
