/**
 * Helper to determine if a screen is a mobile device or not
 * @returns {boolean} is the screen mobile-sized
 */
export const isMobile = () => {
  return window.innerWidth < 736;
};

export const Mobile = ({ children }) => (isMobile() ? children : null);

export const Desktop = ({ children }) => (!isMobile() ? children : null);
