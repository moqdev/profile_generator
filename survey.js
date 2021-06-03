const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// rl.question(,(answer)=>{});
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`your name is: ${answer}`);
  rl.close()

  rl.question("What's an activity you like doing? :)", (answer) => {
    console.log(`your answer is: ${answer}`);
    rl.close()
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`your answer is:${answer}`);
      rl.close()
      rl.question('Which meal is your favorite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`your answer is: ${answer}`);
      })
      rl.close()
      rl.question("What's your favorite thing to eat for that meal?", (answer) => {
        console.log(`your answer is ${answer}`);
      })
      rl.close()
      rl.question('Which sport is your absolute favorite?', (answer) => {
        console.log(`you answer is: ${answer}`);
      })
      rl.close()
    })
    rl.question("What's your superpower? In a few words, tell us what you are amazing at!", (answer) => {
      console.log(`your answer is: ${answer}`);
      rl.close();
    })
  });
});



