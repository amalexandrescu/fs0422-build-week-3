import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  expandMessengerAction,
  collapseMessengerAction
} from "../../redux/actions"
import { BsThreeDots } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import placeholder from "../../assets/v-team-logo.png"
export default function MessagingPopup() {
  let showMessages = useSelector((state) => state.messenger.showMessages)
  const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(getUsersAction())
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [])

  return (
    <>
      {showMessages ? (
        <div id="messaging-popup-wrapper" className="border pointer">
          <div className="d-flex align-items-center">
            <div className="border recommended-user-image ml-auto">
              <img src={placeholder} alt="" />
            </div>
            <div className="font-weight-bold">Messaging</div>
          </div>
          <div className="d-flex">
            <div className="mr-1 gray-hover icon-wrapper-messenger">
              <BsThreeDots />
            </div>
            <div className="mr-1 gray-hover icon-wrapper-messenger">
              <FiEdit />
            </div>
            <div
              className="mr-1 gray-hover icon-wrapper-messenger"
              onClick={() => dispatch(collapseMessengerAction())}
            >
              <SlArrowDown />
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div id="messaging-popup-wrapper" className="border pointer">
            <div className="d-flex align-items-center">
              <div className="border recommended-user-image ml-auto">
                <img src={placeholder} alt="" />
              </div>
              <div className="font-weight-bold">Messaging</div>
            </div>
            <div className="d-flex">
              <div className="mr-1 gray-hover icon-wrapper-messenger">
                <BsThreeDots />
              </div>
              <div className="mr-1 gray-hover icon-wrapper-messenger">
                <FiEdit />
              </div>
              <div
                className="mr-1 gray-hover icon-wrapper-messenger"
                onClick={() => dispatch(expandMessengerAction())}
              >
                <SlArrowUp />
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  )
}
