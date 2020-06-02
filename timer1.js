const beeps = ["h", 2, 4, 15, -4];

for (const beep of beeps) {
  if (beep >= 0 && typeof beep === "number") {
    let time = beep * 100;
    setTimeout(() => {
      process.stdout.write("\x07"); // "beep"
    }, time);
  }
}
