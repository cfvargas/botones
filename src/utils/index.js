/**
 * @param {srting} type
 * @param {Object} styles
 */
export function getStylesByType(type, styles) {
  return Object.getOwnPropertyNames(styles).includes(type) && styles[type];
}
