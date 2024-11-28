import { Button, Input, Row, Space } from "antd";

export const Home = () => {
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
                <Input placeholder="Add a new task..." size="large" />
              </div>
              <Button
                style={{
                  marginLeft: "10px",
                }}
                type={"primary"}
                size={"large"}
              >
                Add
              </Button>
            </Row>
          </div>
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
