import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("2kXkxr1tc1sYCfULwfNKNrYsNP2XqvqYdBqZE9UGZ4hC")

const connection = new Connection("https://api.devnet.solana.com", "confirmed")

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Balance: ${balanceInSOL} SOL`);
console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} $SOL!`
  );