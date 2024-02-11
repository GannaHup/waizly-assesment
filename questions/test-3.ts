export function timeConvertion(time: string) {
  let [hours, minutes, seconds] = time.split(":");

  if (seconds.toLocaleLowerCase().includes("pm")) {
    if (hours === "12") {
      hours = "12";
    } else {
      hours = String(Number(hours) + 12);
    }
  }

  if (seconds.toLocaleLowerCase().includes("am")) {
    if (hours === "12") {
      hours = "00";
    }
  }

  return `${hours}:${minutes}:${seconds.substring(0, 2)}`;
}
