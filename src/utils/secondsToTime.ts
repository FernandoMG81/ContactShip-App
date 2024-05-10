/**
 * converts seconds to time format (mm:ss.ms)
 * @param seconds 
 * @returns string
 */
export function secondsToTime(seconds: number): string {
  var minutes = Math.floor(seconds / 60);
  var restSeconds = seconds % 60;
  
  var result = minutes.toString().padStart(2, '0') + ':' + restSeconds.toFixed(3).padStart(6, '0');
  
  return result;
}