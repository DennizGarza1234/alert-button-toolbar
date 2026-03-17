import AlertButton from "./AlertButton";

function Toolbar() {

  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Uploading!", children: "Upload File" },
    { message: "Deleting!", children: "Delete File" }
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton
          key={index}
          message={button.message}
        >
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;