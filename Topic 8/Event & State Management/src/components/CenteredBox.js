function CenteredBox(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>{props.children}</div>
    </div>
  );
}

export default CenteredBox;
