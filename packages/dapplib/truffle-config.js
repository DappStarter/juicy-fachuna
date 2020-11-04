require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stool cost misery attitude hover another army general'; 
let testAccounts = [
"0x7b91b0b6cddc8835afd82343c2ca97a9b346d4ea937ea970c01a19c73b6098de",
"0x74dd8d5ebdf1bdb79f4e773b0e4b9a3577626fc063021596c3f42b02ad0ff531",
"0x510ee4a1db31bf5bd2eabd0e4a91f943406c3c24cfb3725c133c70aa89ebaa0b",
"0x5328a4e0347aafb0e559466c92d70e3fbaa9f6dd3f605dc8b1c94a1848e7f71c",
"0xea6a2b0817962da359ab3894fe528f62824aaafaaa9f57c82f0229556b1d4b13",
"0x8e070a91e94e7a772b513a66b30fde2c890609735126ac8cbc781ac43692369b",
"0x7e9ec9de9db095d6b13b100929500a98abbd08c18fffe7f458ccbec140bc546e",
"0x5b6124bce94911bfc5823d9d53f60946da1abf4cb39ccd3dce199ae392239d02",
"0xeef2b8cacaacfe20c4361ba09a257ca9da1100803303939bf4b855c062bc2ec5",
"0xbf04ee133756433e3ce762031ea4b8544ead63db1e422d9d400909c4d9f42eb8"
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
