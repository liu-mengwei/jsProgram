function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  })
}

async function main() {
  await sleep(3000);

  console.log('memeda'); 
}

main();