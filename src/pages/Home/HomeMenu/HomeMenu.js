import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [tabPosition, setTabPosition] = useState("left");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Tabs tabPosition={tabPosition}>
        <TabPane
          tab={
            <img
              src="https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2ZW5nZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-12"
              alt=""
            />
          }
          key="1"
        ></TabPane>
        <TabPane
          tab={
            <img
              src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-12"
              alt=""
            />
          }
          key="2"
        ></TabPane>
        <TabPane
          tab={
            <img
              src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFydmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-12"
              alt=""
            />
          }
          key="3"
        ></TabPane>
      </Tabs>
    </>
  );
}
