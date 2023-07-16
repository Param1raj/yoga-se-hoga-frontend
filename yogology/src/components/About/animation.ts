export function animations() {
  const hoverScaleEffectWithAnimation = {
    transform: "scale(1)",
    transition: "transform 300ms",
    transitionTimingFunction: "ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiBox-root": {
      opacity: 0,
      transition: "opacity 300ms ease-in-out",
      width: "85%",
      height: "85%",
      background: "white",
      padding: "15px",
      display: "flex",
      alignItems: "end",
    },
    ":hover": {
      transform: "scale(1.1)",
      transition: "transform 300ms",
      transitionTimingFunction: "ease-in-out",
      "& .MuiBox-root": {
        opacity: 1,
        transition: "opacity 300ms ease-in-out",
      },
    },
  };
  return hoverScaleEffectWithAnimation;
}
