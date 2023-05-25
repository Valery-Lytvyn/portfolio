interface TransitionType {
  duration: number;
  delay: number;
}

interface VisibleValueType {
  opacity: number;
  scale?: number;
  transition: TransitionType;
  y?: number;
  x?: number;
}

const visibleValue: VisibleValueType = {
  opacity: 1,
  scale: 1,
  transition: { duration: 1, delay: 0.5 },
  x: 0,
  y: 0,
};

interface HiddenType {
  opacity: number;
  scale?: number;
  y?: number;
  x?: number;
}

export interface Variant {
  visible: VisibleValueType;
  hidden: HiddenType;
}

export const verticalVariant: Variant = {
  visible: visibleValue,
  hidden: { opacity: 0, y: 60 },
};

export const scaleVariant: Variant = {
  visible: visibleValue,
  hidden: { opacity: 0, scale: 0 },
};

export const leftHorizontalVariant: Variant = {
  visible: visibleValue,
  hidden: { opacity: 0, x: -70 },
};
export const rightHorizontalVariant: Variant = {
  visible: visibleValue,
  hidden: { opacity: 0, x: 70 },
};
