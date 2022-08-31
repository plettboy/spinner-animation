process.stdout.write("hello from spinner2.js... \rheyyy\n");

delay = 100;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r|   "];

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}
