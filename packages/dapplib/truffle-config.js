require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remain unknown hunt castle front tennis'; 
let testAccounts = [
"0x27c17a99b5e5bfeec5346141d20236b19c7d15ae1f576253ac42b8787ad2edf6",
"0x28d8a96522c21c7317a58430aada3f5bc91a87a158da58f3fa1e65f4932e6ad8",
"0x80dfc39bcd8a6e6da7cd15155fbb05156a726ec2f0b8bbc2f00f258196cb6392",
"0xdfaf8b801e62610d5e62eac0d77a087ad91a9a163c53f3ab557c218189f46035",
"0xd9e7c7b84dd3dc432219f29910f39f7bf54a3fec18b28417dc7471574dc166e3",
"0xc3b7e97f6049713f9a043cff9ac9dc869c67cddb59acd6a5e9fb1cad436a79bd",
"0xcc1c18ae7a8f6e98a22d93200ca745a34b36d0c7d996ee25d1a0c32acd9844c9",
"0x58298232a336180e562ba4861341f2a5f4f3cceb61a43361168d455acafb75d7",
"0x8664d9a258b611f0ace01c51d27f67d6bcf42c737b2dcd8452c451ff739c84d7",
"0xc02f3250e7a588a87fb676cc01163f8b304df89bc9f7371661e10f259e75a769"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

