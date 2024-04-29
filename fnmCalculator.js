// Function to handle input from the user
function getPlayerRecord(promptMsg) {
  return parseInt(prompt(promptMsg));
}

// Function to calculate prize payout based on player's record
function prizePayout(playerRecord) {
  let packs = 0;
  switch (playerRecord) {
    case 12:
      packs = 7;
      break;
    case 10:
      packs = 6;
      break;
    case 9:
      packs = 5;
      break;
    case 8:
    case 7:
      packs = 3;
      break;
    case 6:
      packs = 1;
      break;
    default:
      console.log("Invalid player record");
      break;
  }
  return packs;
}

// Function to calculate total packs and store credit for a player
function calculate(playerRecord) {
  const packsToCashMultiplier = 5;
  const packs = prizePayout(playerRecord);
  return {
    packs: packs,
    storeCredit: packs * packsToCashMultiplier
  };
}

// Main function to run the program
function main() {
  const win = 3;
  const loss = 0;
  const tie = 1;

  // Get player A's record
  let playerA = getPlayerRecord("Please input player A's record as points:");

  // Get player B's record
  let playerB = getPlayerRecord("Please input player B's record as points:");

  let output = "";

  // playerA wins
  output += "If player A wins:\n";
  let totalAp1 = playerA + win;
  let totalBp1 = playerB + loss;
  output += `Player A: ${calculate(totalAp1).packs} packs\n`;
  output += `Player B: ${calculate(totalBp1).packs} packs\n`;

  // players tie
  output += "If players tie:\n";
  let totalAp2 = playerA + tie;
  let totalBp2 = playerB + tie;
  output += `Player A: ${calculate(totalAp2).packs} packs\n`;
  output += `Player B: ${calculate(totalBp2).packs} packs\n`;

  // playerB wins
  output += "If player B wins:\n";
  let totalAp3 = playerA + loss;
  let totalBp3 = playerB + win;
  output += `Player A: ${calculate(totalAp3).packs} packs\n`;
  output += `Player B: ${calculate(totalBp3).packs} packs\n`;

  document.getElementById("output").innerText = output;
}

// Call main function when the page loads
main();
