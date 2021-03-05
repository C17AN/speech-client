import React, { useState } from "react";

const Participants = ({ socket }) => {
  const [participants, setParticipants] = useState([]);
  // socket.on("onConnect", (systemMessage) => {
  //   setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
  // });
  // socket.on("onDisconnect", (systemMessage) => {
  //   setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
  // });
  return <div></div>;
};

export default Participants;
