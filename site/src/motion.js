export const easeOut = [0.22, 1, 0.36, 1];

export const wordReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.74, ease: easeOut },
  },
};

export function stagger(staggerChildren, delayChildren = 0) {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -48px 0px" },
  transition: { duration: 0.7, ease: easeOut },
};
