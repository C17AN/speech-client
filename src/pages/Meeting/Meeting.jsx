import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MeetingLog from "../../components/MeetingLog/MeetingLog";
import Participants from "../../components/Participants/Participants";
import Recognition from "../../components/Recognition/Recognition";
import Loading from "../Loading/Loading";

//const socket = socketIOClient("localhost:5000");

const Meeting = ({ roomName, userName }) => {
  const myInfo = {
    roomName: roomName ? roomName : localStorage.getItem("roomName"),
    userName: userName ? userName : localStorage.getItem("userName"),
  };
  const [currentSocket, setCurrentSocket] = useState();

  useEffect(() => {
    setCurrentSocket(io("https://speech-server-test.herokuapp.com/"));
  }, []);

  if (currentSocket) {
    currentSocket.on("connect", () => {
      currentSocket.emit("join", myInfo);
    });
  }

  return (
    <div>
      {currentSocket ? (
        <>
          <h2>회의주제 : 오늘의 주제 정하기</h2>
          <Participants />
          <MeetingLog socket={currentSocket} />
          <Recognition userName={userName} socket={currentSocket} />
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Meeting;
