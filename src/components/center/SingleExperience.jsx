import { ListGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import moment from "moment";
const SingleExperience = ({ exp }) => {
  return (
    <div className="col border-top px-0 d-flex justify-content-between">
      <ListGroup.Item className="px-0 border-0">
        <h6 className="font-weight-bold">{exp.role}</h6>
        <div>{exp.company}</div>
        <div className="light-grey-color">
          {exp.endDate !== null
            ? `${moment(exp.startDate).format("MMMM YYYY")} - ${moment(
                exp.endDate
              ).format("MMMM YYYY")}`
            : `${moment(exp.startDate).format("MMMM YYYY")} - Present`}
        </div>
        <div className="light-grey-color">{exp.area}</div>
      </ListGroup.Item>
      <div className="d-flex justify-content-center align-items-center editButtonIconDiv mt-2 mr-2">
        <Icon.Pencil style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default SingleExperience;
