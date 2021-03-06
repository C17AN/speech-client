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
      <button onMouseDown={() => listen({ interimResults: false })}>π€</button>
      <button
        onMouseDown={() =>
          socket.emit("onSendSpeech", { userName, message: "μμμ!" })
        }
      >
        π€
      </button>
      {listening && <div>κΈ°λ‘ μμ</div>}
    </div>
  );
};

export default Recognition;
