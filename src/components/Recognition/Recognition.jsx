import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

const Recognition = ({ userName, socket }) => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  socket.emit("onSendSpeech", { userName, message: value });

  return (
    <div>
      <button onMouseDown={() => listen({ interimResults: false })}>🎤</button>
      <button
        onMouseDown={() =>
          socket.emit("onSendSpeech", { userName, message: "아아아!" })
        }
      >
        🎤
      </button>
      {listening && <div>기록 시작</div>}
    </div>
  );
};

export default Recognition;
