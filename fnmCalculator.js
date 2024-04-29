// Function to handle input from the user
function getPlayerRecord(id) {
  return parseInt(document.getElementById(id).value);
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

  // Calculate scenarios
  let totalAp1 = playerA + win;
  let totalBp1 = playerB + loss;
  let totalAp2 = playerA + tie;
  let totalBp2 = playerB + tie;
  let totalAp3 = playerA + loss;
  let totalBp3 = playerB + win;

  // Calculate total packs for each scenario
  let packs1 = calculate(totalAp1).packs + calculate(totalBp1).packs;
  let packs2 = calculate(totalAp2).packs + calculate(totalBp2).packs;
  let packs3 = calculate(totalAp3).packs + calculate(totalBp3).packs;

  // Determine the winning scenario
  let winner;
  let maxPacks = Math.max(packs1, packs2, packs3);
  if (maxPacks === packs1) {
    winner = "Player A should win";
  } else if (maxPacks === packs2) {
    winner = "Players should take the Intentional Draw";
  } else {
    winner = "Player B should win";
  }

  // Output results
  output += `If player A wins:\nPlayer A: ${calculate(totalAp1).packs} packs\nPlayer B: ${calculate(totalBp1).packs} packs\n`;
  output += `If players tie:\nPlayer A: ${calculate(totalAp2).packs} packs\nPlayer B: ${calculate(totalBp2).packs} packs\n`;
  output += `If player B wins:\nPlayer A: ${calculate(totalAp3).packs} packs\nPlayer B: ${calculate(totalBp3).packs} packs\n`;
  output += `\n${winner}, total: ${maxPacks} packs`;

  document.getElementById("output").innerText = output;
}

// Call main function when the page loads
main();
