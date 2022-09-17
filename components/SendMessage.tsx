import { mdiSend } from "@mdi/js";
import Icon from "@mdi/react";
import ReactGA from "react-ga";

interface Props {
  hide: boolean;
  goTo: (value: string) => void;
}

function SendMessage({ hide, goTo }: Props) {
  function sendMessage() {
    goTo("wishes");
  }

  const ButtonSendMessage = () => {
    return (
      <button
        className="round-button center"
        onClick={() => {
          sendMessage();
          ReactGA.event({
            category: "Navigation",
            action: "Click go to wishes floating button",
          });
        }}
        aria-label="Send Message"
      >
        <Icon path={mdiSend} size={1} color="black" />
      </button>
    );
  };

  return (
    <div className={`floating-fullscreen-toggle ${hide ? "hide" : ""}`}>
      {<ButtonSendMessage />}
    </div>
  );
}

export default SendMessage;
