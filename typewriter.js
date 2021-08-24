const sentence = "hello there from lighthouse labs";

// //from compass instructions
// for (const char of sentence) {
//   setTimeout(() => {
//     // print the char here
//     console.log(char);
//   }, 1000) 
// };

let delay = 0;

//this works
for (let char = 0; char < sentence.length; char++) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, delay += 50) //increment delay per character so that they are staggered
};

//race bunnies analogy:
//consider bunnies as each character in the sentence. Each bunnies may have the same starting line. The starting gun goes off per each bunny at such a small time difference between each starting gun shot. if the delay was just one number i.e. 1000ms. it would seem as if all the bunnies arrived at the same time when in fact there is a small, miniscule gap between each one. if we add a delay to stagger each bunny, it would be as if we let the first bunny run "H" first and finish almost at 0 ms. Next bunny "E" would be triggeres to run instantaneously after bunny "H", but since its delay is 50ms. He takes 50 ms to finish the race. Bunny "L" would then start almost at the same time as the previous bunnies but will finish the race 50ms after the second bunny, so on and so forth...

//use the end value of delay from the for loop to delay the new line after the for loop
setTimeout(() => {
  console.log("");
}, delay);
