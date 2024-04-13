const hive = require('@hiveio/hive-js');

// Define the Hive node RPC endpoint
hive.api.setOptions({ url: 'https://api.hive.blog' });

// Function to mint NFT
async function mintNFT(account, privateKey, nftName, nftPicture, quantity, price) {
  try {
    // Generate the transaction
    const custom_json = JSON.stringify(['nft', {
      'name': nftName,
      'picture': nftPicture,
      'quantity': parseInt(quantity),
      'price': parseInt(price)
    }]);
  
    const tx = {
      id: 'ssc-mainnet-hive',
      json: custom_json,
      required_auths: [account],
      required_posting_auths: [],
    };
  
    // Sign and broadcast the transaction
    const result = await hive.broadcast.customJson(privateKey, [], [account], 'ssc-mainnet-hive', custom_json);
    console.log('NFT minted successfully:', result);
  } catch (error) {
    console.error('Error minting NFT:', error);
  }
}

// Example usage
const account = 'your_account';
const privateKey = 'your_private_key';
const nftName = 'Your NFT Name';
const nftPicture = 'https://example.com/nft_picture.jpg';
const quantity = 1; // Change as needed
const price = 100; // Change as needed

mintNFT(account, privateKey, nftName, nftPicture, quantity, price);
