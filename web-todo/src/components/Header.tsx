import { Avatar, Dropdown } from "antd";
import Cookie from "js-cookie";
import { useEffect } from "react";
const token = Cookie.get("assess_token");

export const Header = () => {
  // const [token,setToken] =
  // useEffect(() => {
  //   if (!token) {
  //     window.location.href = "/auth/login";
  //   }
  // }, []);
  return (
    <header
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="left"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/images/logo.png" alt="logo" />
        <span
          style={{
            marginLeft: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          WebToDo
        </span>
      </div>
      {token ? (
        <div className="right">
          <Dropdown
            placement={"bottom"}
            menu={{
              items: [
                {
                  label: "Logout",
                  key: "logout",
                  onClick: () => {
                    Cookie.remove("assess_token");
                    window.location.href = "/auth/login";
                  },
                },
              ],
            }}
          >
            <Avatar src="/images/avatar.jpeg" />
          </Dropdown>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
