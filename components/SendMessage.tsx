import { mdiSend } from "@mdi/js";
import Icon from "@mdi/react";

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
        onClick={sendMessage}
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
