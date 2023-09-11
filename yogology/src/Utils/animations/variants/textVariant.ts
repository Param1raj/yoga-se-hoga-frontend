export const textUpVariant = {
  hidden: {
    opacity: 0,
    y: "100px",
  },
  visible: {
    opacity: 1,
    y: "0px",
  },
};

export const textLeftVariant = {
  hidden: {
    opacity: 0,
    x: "100px",
  },
  visible: {
    opacity: 1,
    x: "0px",
  },
};

export const textFadeVariant = {
  hidden: {
    opacity: [0, 0, 0, 0],
    // x: "100px",
  },
  visible: {
    opacity: [0.1, 0.4, 0.7, 1],
    // x: "0px",
  },
};
