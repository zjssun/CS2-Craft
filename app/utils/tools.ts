export function truncate(str:string, maxLength = 15) {
  if (typeof str !== 'string') return '';
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}