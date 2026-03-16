import AlertButton from "./AlertButton";

function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing music!">
        Play
      </AlertButton>

      <AlertButton message="Uploading file!">
        Upload
      </AlertButton>

      <AlertButton message="Downloading file!">
        Download
      </AlertButton>
    </div>
  );
}

export default Toolbar;