import React, { useEffect } from "react";
import MoreUsers from "./MoreUsers";
import ShowMore from "./ShowMore";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../redux/actions";
export default function MorePeopleYouKnow({ heading }) {
  let users = useSelector((state) => state.users.usersFromFetch);
  const randomUsers = [...users].sort(() => 0.5 - Math.random());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="border side-component-border mt-2 bg-white">
        <h6 className="text-left font-weight-bold ml-3 mt-3">{heading}</h6>

        {randomUsers.slice(0, 5).map((user, i) => (
          <div key={user._id}>
            <MoreUsers user={user} />
            <hr style={{ width: "90%" }} />
          </div>
        ))}

        <ShowMore />
      </div>
    </>
  );
}
