export const BoxVariant = {
  hidden: { opacity: [0, 0, 0, 0] },
  visible: {
    opacity: [0.1, 0.4, 0.7, 1],
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
