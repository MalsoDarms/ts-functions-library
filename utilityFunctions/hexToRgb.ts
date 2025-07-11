/**
 * Converts a hexadecimal color code to an RGB object.
 *
 * @param hex - The hex color string.
 * @returns An object with red, green, and blue values.
 */
export function hexToRgb(
  hex: string,
): { r: number; g: number; b: number } | null {
  const hexValue = hex.replace(/^#/, '');
  if (hexValue.length !== 6) return null;

  const bigint = parseInt(hexValue, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

// Example usage:
// hexToRgb('#ff5733'); // { r: 255, g: 87, b: 51 }
