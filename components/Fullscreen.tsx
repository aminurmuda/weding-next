import { mdiFullscreen, mdiFullscreenExit } from "@mdi/js";
import Icon from "@mdi/react";

interface Props {
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
}

function Fullscreen(props: Props) {
  const { isFullscreen, setIsFullscreen } = props;
  function requestFullscreen() {
    document.documentElement.requestFullscreen();
    setIsFullscreen(true);
  }

  function exitFullscreen() {
    document.exitFullscreen();
    setIsFullscreen(false);
  }

  const ButtonFullscreen = () => {
    return (
      <button className="round-button center" onClick={requestFullscreen}>
        <Icon path={mdiFullscreen} size={1} color="black" />
      </button>
    );
  };

  const ButtonExitFullscreen = () => {
    return (
      <button className="round-button center" onClick={exitFullscreen}>
        <Icon path={mdiFullscreenExit} size={1} color="black" />
      </button>
    );
  };

  return (
    <div className="floating-fullscreen-toggle">
      {isFullscreen ? <ButtonExitFullscreen /> : <ButtonFullscreen />}
    </div>
  );
}

export default Fullscreen;
