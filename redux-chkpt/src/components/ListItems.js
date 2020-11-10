import { useSelector, useDispatch } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";
import { checkTask, deleteTask } from "../JS/actions/actionTask";
import EditItem from "./EditItem";

const ListItems = () => {
  const list = useSelector((state) => state.list);
  const filtred = useSelector((state) => state.filtred);

  const dispatch = useDispatch();

  return (
    <ListGroup>
      {(filtred ? list.filter((el) => el.isDone === true) : list).map(
        (item, key) => (
          <ListGroup.Item
            key={key}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(checkTask(item))}
              >
                {item.isDone ? "isDone" : "unDone"}
              </Button>
              <EditItem Item={item} />
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(item.id))}
              >
                Delete
              </Button>
            </div>
            <p style={{ margin: "0px" }} className={item.isDone ? "check" : ""}>
              {item.text}
            </p>
          </ListGroup.Item>
        )
      )}
    </ListGroup>
  );
};

export default ListItems;
