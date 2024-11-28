import { Button, Checkbox, Input, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { todoApi } from "../../services";
import { CreateTaskDto } from "../../services/TodoApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const { Text } = Typography;
const TaskItem = ({
  data,
  onDelete,
}: {
  data: CreateTaskDto;
  onDelete: () => void;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #E5E7EB",
        padding: "17px 15px",
        borderRadius: "8px",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Checkbox checked={data.completed} />
      <div
        style={{
          flex: 1,
          textAlign: "left",
          margin: "0 12px",
        }}
      >
        <Text delete={data.completed}>{data.title}</Text>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {/* <div>
          Due:
          {data.description}
        </div> */}
        <Space>
          <EditOutlined />
          <DeleteOutlined onClick={onDelete} />
        </Space>
      </div>
    </div>
  );
};
export const Home = () => {
  const [tasks, setTasks] = useState<CreateTaskDto[]>([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    todoApi.api.taskControllerFindAll().then((res) => {
      setTasks(res.data);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "24px",
          backgroundColor: "#fff",
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
        }}
      >
        <Space
          size={"large"}
          direction={"vertical"}
          style={{
            width: "100%",
          }}
        >
          {/* 添加任务输入框 */}
          <div>
            <Row
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  flex: 1,
                }}
              >
                <Input
                  placeholder="Add a new task..."
                  size="large"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <Button
                style={{
                  marginLeft: "10px",
                }}
                type={"primary"}
                size={"large"}
                onClick={() => {
                  todoApi.api
                    .taskControllerCreate({
                      title: value,
                    })
                    .then((res) => {
                      setTasks([...tasks, res.data]);
                      setValue("");
                    });
                }}
              >
                Add
              </Button>
            </Row>
          </div>
          {/* 筛选过滤搜索 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Space>
                <Button type={"primary"}>All</Button>
                <Button
                  style={{
                    backgroundColor: "#E5E7EB",
                    color: "#374151",
                    borderColor: "transparent",
                  }}
                  variant="solid"
                >
                  Active
                </Button>
                <Button
                  style={{
                    backgroundColor: "#E5E7EB",
                    color: "#374151",
                    borderColor: "transparent",
                  }}
                  variant="solid"
                >
                  Completed
                </Button>
              </Space>
            </div>
            <div>
              {/* <Space size={"middle"}>
                <Button
                  variant={"solid"}
                  style={{
                    backgroundColor: "#EAB308",
                    color: "#fff",
                    borderColor: "transparent",
                  }}
                >
                  Set Priority
                </Button>
                <Button
                  variant={"solid"}
                  style={{
                    backgroundColor: "#22C55E",
                    color: "#fff",
                    borderColor: "transparent",
                  }}
                >
                  Add Tags
                </Button>
              </Space> */}
            </div>
          </div>
          {/* 任务列表 */}
          <div>
            <Space
              direction={"vertical"}
              style={{
                width: "100%",
              }}
            >
              {tasks.map((task) => (
                <div key={task.id}>
                  <TaskItem
                    data={task}
                    onDelete={() => {
                      if (task.id) {
                        todoApi.api
                          .taskControllerRemove(task.id)
                          .then((res) => {
                            console.log("res", res);
                          });
                        setTasks(tasks.filter((item) => item.id !== task.id));
                      }
                    }}
                  />
                </div>
              ))}
            </Space>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button danger variant={"solid"} color="danger">
                Clear Completed
              </Button>
            </div>
            <div>
              <Space size={"middle"}>
                <Button
                  variant={"solid"}
                  style={{
                    backgroundColor: "#EAB308",
                    color: "#fff",
                    borderColor: "transparent",
                  }}
                >
                  Set Priority
                </Button>
                <Button
                  variant={"solid"}
                  style={{
                    backgroundColor: "#22C55E",
                    color: "#fff",
                    borderColor: "transparent",
                  }}
                >
                  Add Tags
                </Button>
              </Space>
            </div>
          </div>
        </Space>
      </div>
    </div>
  );
};
