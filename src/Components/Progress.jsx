const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const angle = progress * 360;
  return (
    <div
      style={{
        background: `radial-gradient(circle at center, transparent 50%, #fff 50%),
            conic-gradient(from -90deg, #007bff 0deg ${angle}deg, #fff ${angle}deg 360deg)`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
