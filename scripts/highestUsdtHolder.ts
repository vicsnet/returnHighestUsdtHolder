

const main = async () => {
  const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    fetch(`https://api.ethplorer.io/getTopTokenHolders/${contractAddress}?apiKey=freekey&limit=1`)
    .then(data => {
    return data.json();
    })
    .then(usdtHolder => {
    console.log(usdtHolder);
    });
  };
  main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
  })
  
