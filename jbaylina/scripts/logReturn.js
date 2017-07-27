

console.log ('WARNING!! DO NOT EXECITE THIS SCRIPT');
process.exit(0);
console.log('Executed...');




var tokenAbi = [{"constant":true,"inputs":[],"name":"batFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"batFund","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenExchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ethFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"createTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingStartBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_ethFundDeposit","type":"address"},{"name":"_batFundDeposit","type":"address"},{"name":"_fundingStartBlock","type":"uint256"},{"name":"_fundingEndBlock","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"LogRefund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CreateBAT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
var FST = web3.eth.contract(tokenAbi).at('0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7');
var ADST = web3.eth.contract(tokenAbi).at('0x422866a8F0b032c5cf1DfBDEf31A20F4509562b0');
var ADT = web3.eth.contract(tokenAbi).at('0xD0D6D6C5Fe4a677D343cC433536BB717bAe167dD');
var ADX = web3.eth.contract(tokenAbi).at('0x4470BB87d77b963A013DB939BE332f927f2b992e');
var ANT = web3.eth.contract(tokenAbi).at('0x960b236A07cf122663c4303350609A66A7B288C0');
var ARC = web3.eth.contract(tokenAbi).at('0xAc709FcB44a43c35F0DA4e3163b117A17F3770f5');
var BAT = web3.eth.contract(tokenAbi).at('0x0D8775F648430679A709E98d2b0Cb6250d2887EF');
var BCDN = web3.eth.contract(tokenAbi).at('0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40');
var BNC = web3.eth.contract(tokenAbi).at('0xdD6Bf56CA2ada24c683FAC50E37783e55B57AF9F');
var BNT = web3.eth.contract(tokenAbi).at('0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C');
var BQX = web3.eth.contract(tokenAbi).at('0x5Af2Be193a6ABCa9c8817001F45744777Db30756');
var CAT = web3.eth.contract(tokenAbi).at('0x56ba2Ee7890461f463F7be02aAC3099f6d5811A8');
var CFI = web3.eth.contract(tokenAbi).at('0x12FEF5e57bF45873Cd9B62E9DBd7BFb99e32D73e');
var CRB = web3.eth.contract(tokenAbi).at('0xAef38fBFBF932D1AeF3B808Bc8fBd8Cd8E1f8BC5');
var CREDO = web3.eth.contract(tokenAbi).at('0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be');
var CTL = web3.eth.contract(tokenAbi).at('0xbf4cfd7d1edeeea5f6600827411b41a21eb08abd');
var CryptoCarbon = web3.eth.contract(tokenAbi).at('0xE4c94d45f7Aef7018a5D66f44aF780ec6023378e');
var CVC = web3.eth.contract(tokenAbi).at('0x41e5560054824ea6b0732e656e3ad64e20e94e45');
var DAO = web3.eth.contract(tokenAbi).at('0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413');
var DDF = web3.eth.contract(tokenAbi).at('0xcC4eF9EEAF656aC1a2Ab886743E98e97E090ed38');
var DGD = web3.eth.contract(tokenAbi).at('0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A');
var DICE = web3.eth.contract(tokenAbi).at('0x2e071D2966Aa7D8dECB1005885bA1977D6038A65');
var DRP = web3.eth.contract(tokenAbi).at('0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed');
var DNT = web3.eth.contract(tokenAbi).at('0x0abdace70d3790235af448c88547603b945604ea');
var EDG = web3.eth.contract(tokenAbi).at('0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c');
var EMV = web3.eth.contract(tokenAbi).at('0xB802b24E0637c2B87D2E8b7784C055BBE921011a');
var EOS = web3.eth.contract(tokenAbi).at('0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0');
var FAM = web3.eth.contract(tokenAbi).at('0x190e569bE071F40c704e15825F285481CB74B6cC');
var FUN = web3.eth.contract(tokenAbi).at('0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b');
var GNO = web3.eth.contract(tokenAbi).at('0x6810e776880C02933D47DB1b9fc05908e5386b96');
var GNT = web3.eth.contract(tokenAbi).at('0xa74476443119A942dE498590Fe1f2454d7D4aC0d');
var GUP = web3.eth.contract(tokenAbi).at('0xf7B098298f7C69Fc14610bf71d5e02c60792894C');
var GT = web3.eth.contract(tokenAbi).at('0x1D921EeD55a6a9ccaA9C79B1A4f7B25556e44365');
var HKG = web3.eth.contract(tokenAbi).at('0x14F37B574242D366558dB61f3335289a5035c506');
var HMQ = web3.eth.contract(tokenAbi).at('0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908');
var ICN = web3.eth.contract(tokenAbi).at('0x888666CA69E0f178DED6D75b5726Cee99A87D698');
var JET = web3.eth.contract(tokenAbi).at('0xc1E6C6C681B286Fb503B36a9dD6c1dbFF85E73CF');
var JetCoins = web3.eth.contract(tokenAbi).at('0x773450335eD4ec3DB45aF74f34F2c85348645D39');
var LUN = web3.eth.contract(tokenAbi).at('0xfa05A73FfE78ef8f1a739473e462c54bae6567D9');
var MCAP = web3.eth.contract(tokenAbi).at('0x93E682107d1E9defB0b5ee701C71707a4B2E46Bc');
var MCO = web3.eth.contract(tokenAbi).at('0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d');
var MGO = web3.eth.contract(tokenAbi).at('0x40395044ac3c0c57051906da938b54bd6557f212');
var MDA = web3.eth.contract(tokenAbi).at('0xd0b171Eb0b0F2CbD35cCD97cDC5EDC3ffe4871aa');
var MIT = web3.eth.contract(tokenAbi).at('0xe23cd160761f63FC3a1cF78Aa034b6cdF97d3E0C');
var MKR = web3.eth.contract(tokenAbi).at('0xC66eA802717bFb9833400264Dd12c2bCeAa34a6d');
var MLN = web3.eth.contract(tokenAbi).at('0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1');
var MNE = web3.eth.contract(tokenAbi).at('0x1a95B271B0535D15fa49932Daba31BA612b52946');
var MSP = web3.eth.contract(tokenAbi).at('0x68AA3F232dA9bdC2343465545794ef3eEa5209BD');
var MTL = web3.eth.contract(tokenAbi).at('0xf433089366899d83a9f26a773d59ec7ecf30355e');
var MYST = web3.eth.contract(tokenAbi).at('0xa645264C5603E96c3b0B078cdab68733794B0A71');
var NET = web3.eth.contract(tokenAbi).at('0xcfb98637bcae43C13323EAa1731cED2B716962fD');
var NMR = web3.eth.contract(tokenAbi).at('0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671');
var NxC = web3.eth.contract(tokenAbi).at('0x45e42D659D9f9466cD5DF622506033145a9b89Bc');
var OAX = web3.eth.contract(tokenAbi).at('0x701C244b988a513c945973dEFA05de933b23Fe1D');
var OMG = web3.eth.contract(tokenAbi).at('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07');
var PAY = web3.eth.contract(tokenAbi).at('0xB97048628DB6B661D4C2aA833e95Dbe1A905B280');
var PLBT = web3.eth.contract(tokenAbi).at('0x0AfFa06e7Fbe5bC9a764C979aA66E8256A631f02');
var PTOY = web3.eth.contract(tokenAbi).at('0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06');
var PLU = web3.eth.contract(tokenAbi).at('0xD8912C10681D8B21Fd3742244f44658dBA12264E');
var QAU = web3.eth.contract(tokenAbi).at('0x671AbBe5CE652491985342e85428EB1b07bC6c64');
var QRL = web3.eth.contract(tokenAbi).at('0x697beac28B09E122C4332D163985e8a73121b97F');
var REP = web3.eth.contract(tokenAbi).at('0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5');
var RLC = web3.eth.contract(tokenAbi).at('0x607F4C5BB672230e8672085532f7e901544a7375');
var RLT = web3.eth.contract(tokenAbi).at('0xcCeD5B8288086BE8c38E23567e684C3740be4D48');
var ROUND = web3.eth.contract(tokenAbi).at('0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5');
var SGEL = web3.eth.contract(tokenAbi).at('0xa1ccc166faf0E998b3E33225A1A0301B1C86119D');
var SGT = web3.eth.contract(tokenAbi).at('0xd248B0D48E44aaF9c49aea0312be7E13a6dc1468');
var SHIT = web3.eth.contract(tokenAbi).at('0xEF2E9966eb61BB494E5375d5Df8d67B7dB8A780D');
var SKIN = web3.eth.contract(tokenAbi).at('0x2bDC0D42996017fCe214b21607a515DA41A9E0C5');
var SKO1 = web3.eth.contract(tokenAbi).at('0x4994e81897a920c0FEA235eb8CEdEEd3c6fFF697');
var SNGLS = web3.eth.contract(tokenAbi).at('0xaeC2E87E0A235266D9C5ADc9DEb4b2E29b54D009');
var SNM = web3.eth.contract(tokenAbi).at('0x983F6d60db79ea8cA4eB9968C6aFf8cfA04B3c63');
var SNT = web3.eth.contract(tokenAbi).at('0x744d70FDBE2Ba4CF95131626614a1763DF805B9E');
var SRC = web3.eth.contract(tokenAbi).at('0x1dCE4Fa03639B7F0C38ee5bB6065045EdCf9819a');
var STORJ = web3.eth.contract(tokenAbi).at('0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC');
var SWT = web3.eth.contract(tokenAbi).at('0xB9e7F8568e08d5659f5D29C4997173d84CdF2607');
var SNC = web3.eth.contract(tokenAbi).at('0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404');
var TaaS = web3.eth.contract(tokenAbi).at('0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C');
var TFL = web3.eth.contract(tokenAbi).at('0xa7f976C360ebBeD4465c2855684D1AAE5271eFa9');
var TIME = web3.eth.contract(tokenAbi).at('0x6531f133e6DeeBe7F2dcE5A0441aA7ef330B4e53');
var TIX = web3.eth.contract(tokenAbi).at('0xEa1f346faF023F974Eb5adaf088BbCdf02d761F4');
var TKN = web3.eth.contract(tokenAbi).at('0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a');
var TRST = web3.eth.contract(tokenAbi).at('0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B');
var VSL = web3.eth.contract(tokenAbi).at('0x5c543e7AE0A1104f78406C340E9C64FD9fCE5170');
var VSM = web3.eth.contract(tokenAbi).at('0x82665764ea0b58157E1e5E9bab32F68c76Ec0CdF');
var VERI = web3.eth.contract(tokenAbi).at('0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374');
var VRS = web3.eth.contract(tokenAbi).at('0xeDBaF3c5100302dCddA53269322f3730b1F0416d');
var WINGS = web3.eth.contract(tokenAbi).at('0x667088b212ce3d06a1b553a7221E1fD19000d9aF');
var XAUR = web3.eth.contract(tokenAbi).at('0x4DF812F6064def1e5e029f1ca858777CC98D2D81');
var XID = web3.eth.contract(tokenAbi).at('0xB110eC7B1dcb8FAB8dEDbf28f53Bc63eA5BEdd84');
var XRL = web3.eth.contract(tokenAbi).at('0xB24754bE79281553dc1adC160ddF5Cd9b74361a4');
var PPT = web3.eth.contract(tokenAbi).at('0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a');
var Monaco = web3.eth.contract(tokenAbi).at('0xb63b606ac810a52cca15e44bb630fd42d8d1d83d');
var BQ = web3.eth.contract(tokenAbi).at('0xF0f8B0B8DBB1124261FC8d778E2287e3Fd2Cf4f5');
var UET = web3.eth.contract(tokenAbi).at('0x27f706edde3aD952EF647Dd67E24e38CD0803DD6');
var NDC = web3.eth.contract(tokenAbi).at('0xA54ddC7B3CcE7FC8b1E3Fa0256D0DB80D2c10970');
var UGT = web3.eth.contract(tokenAbi).at('0x43eE79e379e7b78D871100ed696e803E7893b644');
var PLR = web3.eth.contract(tokenAbi).at('0xe3818504c1B32bF1557b16C238B2E01Fd3149C17');
var BET = web3.eth.contract(tokenAbi).at('0x725803315519de78D232265A8f1040f054e70B98');

/////////
// TRansactions executed
////////

var ev = chooseWHGReturnAddress.ReturnRequested({}, {fromBlock: 4060000})
var events = ev.get();
console.log("Requests: ", events.length);

var chooseWHGReturnAddressAbi = [{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getReturnAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_returnAddr","type":"address"}],"name":"requestReturn","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isReturnRequested","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dst","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_endDate","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"origin","type":"address"},{"indexed":true,"name":"returnAddress","type":"address"}],"name":"ReturnRequested","type":"event"}];
var c = web3.eth.contract(chooseWHGReturnAddressAbi).at('0x3abe5285ED57c8b028D62D30c456cA9eb3E74105');


