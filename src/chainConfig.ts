import deploymentJSON from './deployment.json';

const bridgeConfig = {
    mainnet: {
        chainId: '0x1',
        ae_bridge_address: 'ct_2Xdym95f2i998W9Zoh1NgAB7pVuQ34ztEsema7u4XwSoq5VKUJ',
        eth_bridge_address: '0xd099E3Ab65d6294d1d2D1Ad92897Cc29286F8cA5',
        etherscan: 'https://etherscan.io',
        aescan: 'https://aescan.io',
        aeRpc: 'https://mainnet.aeternity.io',
        aeeth: 'ct_ryTY1mxqjCjq1yBn9i6HDaCSdA6thXUFZTA84EMzbWd1SLKdh',
        default_ae: 'ct_o5iyqeZyiKep7srn43fLFjwJ7QyDH8dD2M3RFB5PCWgiQEPqq',
        wae: '0xCa781A1779c8f363f7F82BF6f4B406e5d54bAE1F',
        default_eth: '0xAbaE76F98A84D1DC3E0af8ed68465631165d33B2',
    },
    testnet: {
        chainId: '0xaa36a7',
        ae_bridge_address: 'ct_2C5nHYyzUMiqU9HE32XNLN47pFEDL2bNpVTAsG5XmZNigvM4Fv',
        eth_bridge_address: '0xa2E1f5E1f2721Ae935ac7b0799BC108963276dBA',
        etherscan: 'https://sepolia.etherscan.io',
        aescan: 'https://testnet.aescan.io',
        aeRpc: 'https://testnet.aeternity.io',
        aeeth: 'ct_WVqAvLQpvZCgBg4faZLXA1YBj43Fxj91D33Z8K7pFsY8YCofv',
        default_ae: 'ct_22WVQXzVCkgQYDbPUTX1YRNnyUx7XUHQ9ZRkK9P7BwwdyqZaXH',
        wae: '0xBC6e88A962662195e9bb8C17f8f396aCD7B7FE95',
        default_eth: '0xd57aafdC9615835E1F75BcdBDE1c7B1Aa6e4cB10',
    },
};

const assets = {
    testnet: deploymentJSON.assets,
    mainnet: [
        {
            nameandsymbol: 'Wrapped Ethereum (ETH)',
            name: 'Wrapped Ethereum',
            symbol: 'ETH',
            decimals: 18,
            icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
            ethAddress: '0xAbaE76F98A84D1DC3E0af8ed68465631165d33B2',
            aeAddress: 'ct_WVqAvLQpvZCgBg4faZLXA1YBj43Fxj91D33Z8K7pFsY8YCofv',
        },
        {
            nameandsymbol: 'Wrapped AE (WAE)',
            name: 'Wrapped AE',
            symbol: 'WAE',
            decimals: 18,
            icon: 'https://cryptologos.cc/logos/aeternity-ae-logo.png',
            ethAddress: '0xCa781A1779c8f363f7F82BF6f4B406e5d54bAE1F',
            aeAddress: 'ct_o5iyqeZyiKep7srn43fLFjwJ7QyDH8dD2M3RFB5PCWgiQEPqq',
        },
        {
            nameandsymbol: 'Tether USD (USDT)',
            name: 'Tether USD',
            symbol: 'USDT',
            decimals: 6,
            icon: 'https://static.alchemyapi.io/images/assets/825.png',
            aeAddress: 'ct_2AiMceYFXnUdA6A9Lu2ZQ2tr2TpfbGVfkxLfBnceoWgHTKZYvc',
            ethAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        },
        {
            nameandsymbol: 'Binance Coin (BNB)',
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
            icon: 'https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970',
            aeAddress: 'ct_2F2CqmpKbLntqLWpvtq5cBw1Jcbbef7eEV7uMrWxvg6AZtwL5X',
            ethAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
        },
        {
            nameandsymbol: 'USD Coin (USDC)',
            name: 'USD Coin',
            symbol: 'USDC',
            decimals: 6,
            icon: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694',
            aeAddress: 'ct_U1i8dzJTVWdnU2cv59TZQfLFpLfjqf7MQQC5ygSMKphn8Yew2',
            ethAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        },
        {
            nameandsymbol: 'Liquid staked Ether 2.0 (stETH)',
            name: 'Liquid staked Ether 2.0',
            symbol: 'stETH',
            decimals: 18,
            icon: 'https://assets.coingecko.com/coins/images/13442/standard/steth_logo.png?1696513206',
            aeAddress: 'ct_2fUhBfvgs7atqeqxFicPwXtMAX7axbLtxGbpKBv5R5ViQuDj1J',
            ethAddress: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        },
        {
            nameandsymbol: 'TRON (TRX)',
            name: 'TRON',
            symbol: 'TRX',
            decimals: 6,
            icon: 'https://etherscan.io/token/images/trontrx_32.png',
            aeAddress: 'ct_qw2zBmsMEbCfmTW3M7wLCn2KvLBvJx6qX1EeZZFEkixU2PpTT',
            ethAddress: '0x50327c6c5a14dcade707abad2e27eb517df87ab5',
        },

        {
            nameandsymbol: 'ChainLink Token (LINK)',
            name: 'ChainLink Token',
            symbol: 'LINK',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/chainlinktoken_32.png?v=6',
            aeAddress: 'ct_9zroKcDhgUziBG8mqng9n8GJZiGEDSe6mN8JZyBdKQttXfR99',
            ethAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
        },
        {
            nameandsymbol: 'Wrapped TON Coin (TONCOIN)',
            name: 'Wrapped TON Coin',
            symbol: 'TONCOIN',
            decimals: 9,
            icon: 'https://etherscan.io/token/images/theopennetwork_32.png',
            aeAddress: 'ct_2kuWB94Yb3gBvjcUSZ7YMheGGfATwsCzKmwdVrUbUwTik5452v',
            ethAddress: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1',
        },

        {
            nameandsymbol: 'Wrapped BTC (WBTC)',
            name: 'Wrapped BTC',
            symbol: 'WBTC',
            decimals: 8,
            icon: 'https://etherscan.io/token/images/wbtc_28.png?v=1',
            aeAddress: 'ct_26Q5MYFKE4z4GaYLmhZiZ9AHsSVqVNZiiyzySSHTorWyr4od4K',
            ethAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        },
        {
            nameandsymbol: 'SHIBA INU (SHIB)',
            name: 'SHIBA INU',
            symbol: ' SHIB',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/shibatoken_32.png',
            aeAddress: 'ct_2Q2PLjWPPJdNy4vSV1UeSB3hEHrqug4XaJCb9fvWo4rX4z3CvM',
            ethAddress: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
        },
        {
            nameandsymbol: 'Dai Stablecoin (DAI)',
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/MCDDai_32.png',
            aeAddress: 'ct_LHrNcD6aEDTiUBWZwHn3yCKc7fnFL95y132GdvH9nCUavzyfc',
            ethAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
        },
        {
            nameandsymbol: 'Uniswap (UNI)',
            name: 'Uniswap',
            symbol: 'UNI',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/uniswap_32.png',
            aeAddress: 'ct_Vi14D3uAMnSnsoB3u9PiZt2Hv82bMjUMVD7e97ZF4wvrqCpAF',
            ethAddress: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        },
        {
            nameandsymbol: 'Bitfinex LEO Token (LEO)',
            name: 'Bitfinex LEO Token',
            symbol: 'LEO',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/leo_28_2.png',
            aeAddress: 'ct_2ukBazfUKaj6sNTCVCznCmpFnex4eQDRAsdmdNHjULqTiDTCrT',
            ethAddress: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
        },
        {
            nameandsymbol: 'Injective Token (INJ)',
            name: 'Injective Token',
            symbol: 'INJ',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/injective_32.png?v=3',
            aeAddress: 'ct_VJJKHHNhxWiPrZRunjs3inY8tFiyW2PWBwF1cazmmJ6fomSVX',
            ethAddress: '0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30',
        },
        {
            nameandsymbol: 'NEAR (NEAR)',
            name: 'NEAR',
            symbol: 'NEAR',
            decimals: 24,
            icon: 'https://etherscan.io/token/images/near_32.png?v=3',
            aeAddress: 'ct_2bmSSH7M6LWmNXkBwjGL4Z5F1cYRaLQ7HwTLpuSfvivZANLVNQ',
            ethAddress: '0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4',
        },
        {
            nameandsymbol: 'OKB (OKB)',
            name: 'OKB',
            symbol: 'OKB',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/okex_32.png',
            aeAddress: 'ct_21T9r7WsZuTuM8VvxmL53ZhUKZEq5qLFw1Efh41cBCxyWcLssz',
            ethAddress: '0x75231f58b43240c9718dd58b4967c5114342a86c',
        },
        {
            nameandsymbol: 'Lido DAO Token (LDO)',
            name: 'Lido DAO Token',
            symbol: 'LDO',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/lido-dao_32.png',
            aeAddress: 'ct_kvq6h2VYTbGFUtBBqkL1xNdDL7ekzc4yTswqEyp9K3T57R8ou',
            ethAddress: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
        },
        {
            nameandsymbol: 'Immutable X (IMX)',
            name: 'Immutable X',
            symbol: 'IMX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/immutableimx_new_32.png',
            aeAddress: 'ct_stdGnhczkGLQJbqfAvqyBJUmzbphQKzWv6rpRSYBUEsuntPs6',
            ethAddress: '0xf57e7e7c23978c3caec3c3548e3d615c346e79ff',
        },
        {
            nameandsymbol: 'Cronos Coin (CRO)',
            name: 'Cronos Coin',
            symbol: 'CRO',
            decimals: 8,
            icon: 'https://etherscan.io/token/images/cronoseth_32.png',
            aeAddress: 'ct_fBb6CfDBt5r2oQacs36u9pTb5RKUqrCNLEQ9azRkSUUue4rhx',
            ethAddress: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
        },
        {
            nameandsymbol: 'Arbitrum (ARB)',
            name: 'Arbitrum',
            symbol: 'ARB',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/arbitrumone2_32.png',
            aeAddress: 'ct_2GzgKTU6MhFchBBaiUZDEeVtPgkUjdcVy4u6HV95jHo2hTxm82',
            ethAddress: '0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1',
        },
        {
            nameandsymbol: 'VeChain (VEN)',
            name: 'VeChain',
            symbol: 'VEN',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/vechain_28.png',
            aeAddress: 'ct_2p4UJobHCGwwHk8iwayMVkrcGMvLCWF4KPHNRTbGHtbfm43vrL',
            ethAddress: '0xd850942ef8811f2a866692a623011bde52a462c1',
        },
        {
            nameandsymbol: 'TrueUSD (TUSD)',
            name: 'TrueUSD',
            symbol: 'TUSD',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/trueusd_32.png?v=2',
            aeAddress: 'ct_2Cm6gpFNnAcdivSscuDLGiSr3GYpB3XJaR6C7v69zJZ7vqMM4m',
            ethAddress: '0x0000000000085d4780B73119b644AE5ecd22b376',
        },
        {
            nameandsymbol: 'Mantle (MNT)',
            name: 'Mantle',
            symbol: 'MNT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/mantle_32.png',
            aeAddress: 'ct_2uZwiuGvHRnKtbJR9avf9o4XY5WnpjDDXUWzj4a8nFfqkaa9R5',
            ethAddress: '0x3c3a81e81dc49a522a592e7622a7e711c06bf354',
        },
        {
            nameandsymbol: 'Quant (QNT)',
            name: 'Quant',
            symbol: 'QNT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/quantnetwork_28_2.png?v=6',
            aeAddress: 'ct_2Dt6HcmfCJEaxqHZokw1pYNUozzZnmfRSzCxzZG7Kvby7MR3kQ',
            ethAddress: '0x4a220e6096b25eadb88358cb44068a3248254675',
        },
        {
            nameandsymbol: 'Maker (MKR)',
            name: 'Maker',
            symbol: 'MKR',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/mkr-etherscan-35.png',
            aeAddress: 'ct_kW42LfDhTjKyEnT9fgXVrS2PQNEByevrx3SnhVApqR7pnjo5a',
            ethAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        },
        {
            nameandsymbol: 'Graph Token (GRT)',
            name: 'Graph Token',
            symbol: 'GRT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/TheGraph_32.png',
            aeAddress: 'ct_cxdkcQked9AH2oZLPiPjd9P2RuB5uhCkkh7CyGZNQsyXiYp7D',
            ethAddress: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
        },
        {
            nameandsymbol: 'Staked Aave (stkAAVE)',
            name: 'Staked Aave',
            symbol: 'stkAAVE',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/stakedaave_32.png',
            aeAddress: 'ct_qdbn4mU9BW1b1gGwo2KPBPuUDjnh4cGRNC25uwS5FEAVdqGKJ',
            ethAddress: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
        },
        {
            nameandsymbol: 'Render Token (RNDR)',
            name: 'Render Token',
            symbol: 'RNDR',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/Render2_32.png',
            aeAddress: 'ct_PZt8KGUcfToSNWoMPrLS4Fgt68avKYpzd44Am74GTJ5NqszWE',
            ethAddress: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24',
        },
        {
            nameandsymbol: 'Rocket Pool ETH (rETH)',
            name: 'Rocket Pool ETH',
            symbol: 'rETH',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/rocketpooleth_32.png?v=2',
            aeAddress: 'ct_2wiphy9CzMkzE8uCv84bQDAAQJGq3tzZn6KDH87EzpzPtWzSam',
            ethAddress: '0xae78736cd615f374d3085123a210448e74fc6393',
        },
        {
            nameandsymbol: 'Synthetix Network Token (SNX)',
            name: 'Synthetix Network Token',
            symbol: 'SNX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/SynthetixSNX_32.png',
            aeAddress: 'ct_fVrux21Cw8ysJPqsCZkMoWUd28c2WJxBtusAy4jHoQbbvrYj8',
            ethAddress: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
        },
        {
            nameandsymbol: 'Fantom Token (FTM)',
            name: 'Fantom Token',
            symbol: 'FTM',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/fantomtoken_32.png',
            aeAddress: 'ct_Y9VG7PPLvmxNYKzMM6M1XgMKz4eLw7LGts2ndU5kGh1fLHGr1',
            ethAddress: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
        },
        {
            nameandsymbol: 'Theta Token (THETA)',
            name: 'Theta Token',
            symbol: 'THETA',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/theta_28.png',
            aeAddress: 'ct_p13Wi5amRKBu1FKzRohddYEjUUPHermdtXwXR24f8W2mv7dQ',
            ethAddress: '0x3883f5e181fccaf8410fa61e12b59bad963fb645',
        },
        {
            nameandsymbol: 'SAND (SAND)',
            name: 'SAND',
            symbol: 'SAND',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/sand_32.png',
            aeAddress: 'ct_5Axqp46tQDfaj5ruyYH1ivb2m9nkP2BsBFv58YdJz4KJ7nQBN',
            ethAddress: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0',
        },
        {
            nameandsymbol: 'BitTorrent (BTT)',
            name: 'BitTorrent',
            symbol: 'BTT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/bittorrent_32.png',
            aeAddress: 'ct_2ahjyvpU5Sn4ZhX63it2TbUQ9BC6g7VWV9jdguBEFunwMguPw4',
            ethAddress: '0xc669928185dbce49d2230cc9b0979be6dc797957',
        },
        {
            nameandsymbol: 'KuCoin Token (KCS)',
            name: 'KuCoin Token',
            symbol: 'KCS',
            decimals: 6,
            icon: 'https://etherscan.io/token/images/kucointoken_32.png',
            aeAddress: 'ct_CqGgJwMAJPjLeoFgwaGGAr4wVxe54byq6z644DkNnYbuMjEV1',
            ethAddress: '0xf34960d9d60be18cc1d5afc1a6f012a723a28811',
        },
        {
            nameandsymbol: 'BUSD (BUSD)',
            name: 'BUSD',
            symbol: 'BUSD',
            decimals: 18,
            icon: 'https://assets.coingecko.com/coins/images/31273/standard/new_binance-peg-busd.png?1696530096',
            aeAddress: 'ct_2pKpF4mzPAWAXoghyRtMdohBekkAhPbpMCM9Kw3i5zXwDtcZEd',
            ethAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
        },
        {
            nameandsymbol: 'Beam (BEAM)',
            name: 'Beam',
            symbol: 'BEAM',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/beam_32.png',
            aeAddress: 'ct_X5WwnYrBGdgMU3LTQV7p4toaC3LM5Ex4sojA9vCRFCBWF25KY',
            ethAddress: '0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE',
        },
        {
            nameandsymbol: 'Decentraland (MANA)',
            name: 'Decentraland',
            symbol: 'MANA',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/decentraland_32.png?v=1',
            aeAddress: 'ct_27vrYZoG8CeH21PaimF7mPpz6GDwrjZqTrrwEvLH7fe7pHSFdP',
            ethAddress: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
        },
        {
            nameandsymbol: 'Wrapped Decentraland MANA (wMANA)',
            name: 'Wrapped Decentraland MANA',
            symbol: 'wMANA',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/decentraland_32.png?v=1',
            aeAddress: 'ct_BRxrAmmvbRYLicNCzyrqEnz73PQthpymvGC5oZQKmXhqfnZhU',
            ethAddress: '0xfd09cf7cfffa9932e33668311c4777cb9db3c9be',
        },
        {
            nameandsymbol: 'HEX (HEX)',
            name: 'HEX',
            symbol: 'HEX',
            decimals: 8,
            icon: 'https://etherscan.io/token/images/hex_32.png',
            aeAddress: 'ct_n4nKVqDcooQUr4y9BmcdNJATXBLrwj92ceCUTQBH3nLqYEggU',
            ethAddress: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
        },
        {
            nameandsymbol: 'WOO (WOO)',
            name: 'WOO',
            symbol: 'WOO',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/wootrade_32.png?=v2',
            aeAddress: 'ct_sY7fMfy6Z4UiUVPRWiDwun9ru4sWFM1Y9YYYQhE6paRgp2Gvd',
            ethAddress: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
        },
        {
            nameandsymbol: 'Decentralized USD (USDD)',
            name: 'Decentralized USD',
            symbol: 'USDD',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/usdd-tron_32.png',
            aeAddress: 'ct_2gUjb4T32qDX5Z7UdiNNFbVALkXFRfeY9j7yVwZwbwukL3cYKb',
            ethAddress: '0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6',
        },
        {
            nameandsymbol: 'PancakeSwap Token (Cake)',
            name: 'PancakeSwap Token',
            symbol: 'Cake',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/pancake_32.png?v=2',
            aeAddress: 'ct_2VR1R24m2njvFF45KTNbshuBScPxAsdAKL67FbwaPDZUZNnBRZ',
            ethAddress: '0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898',
        },
        {
            nameandsymbol: 'Frax Ether (frxETH)',
            name: 'Frax Ether',
            symbol: 'frxETH',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/fraxethcanonical2_32.png',
            aeAddress: 'ct_KFQexPPXXp45qz8jVXbEVcewY3sY9Fs3c8iS5XM2vVQfY5KJN',
            ethAddress: '0x5e8422345238f34275888049021821e8e08caa1f',
        },
        {
            nameandsymbol: 'Fetch (FET)',
            name: 'Fetch',
            symbol: 'FET',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/fetch_32.png?v=2',
            aeAddress: 'ct_QSZ4v3HSezoyBtRUpNKbsfS3Vk9X27k3AXarQAsn1oTKKKnZb',
            ethAddress: '0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85',
        },
        {
            nameandsymbol: 'dYdX (DYDX)',
            name: 'dYdX',
            symbol: 'DYDX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/dydx2_32.png',
            aeAddress: 'ct_3NNQLoYu7UaSnghBKmrbu9QpuHgV3KMVNaw9SMNyrqdg26pG3',
            ethAddress: '0x92d6c1e31e14520e676a687f0a93788b716beff5',
        },
        {
            nameandsymbol: 'chiliZ (CHZ)',
            name: 'chiliZ',
            symbol: 'CHZ',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/chiliz_32.png?v=29',
            aeAddress: 'ct_2MMDbk2cBFu8Kthskrn766LVVpxekcNpxBsRqzK5QJ7sP1P8D1',
            ethAddress: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
        },
        {
            nameandsymbol: 'Frax (FRAX)',
            name: 'Frax',
            symbol: 'FRAX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/fraxfinanceeth2_32.png',
            aeAddress: 'ct_zygByS99iGDtoVCEC3rPyYoNFXd2sGCMLt3vUPBMEyBN43bFb',
            ethAddress: '0x853d955acef822db058eb8505911ed77f175b99e',
        },
        {
            nameandsymbol: 'Axelar (AXL)',
            name: 'Axelar',
            symbol: 'AXL',
            decimals: 6,
            icon: 'https://etherscan.io/token/images/axelar_32.png?v=2',
            aeAddress: 'ct_2TrCSL6G7fxLvcEqJbmB1XQRRZywMMienPhWa4n22fdUgxUd2c',
            ethAddress: '0x467719ad09025fcc6cf6f8311755809d45a5e5f3',
        },
        {
            nameandsymbol: 'Frax Share (FXS)',
            name: 'Frax Share',
            symbol: 'FXS',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/fraxfxs_new_32.png',
            aeAddress: 'ct_AcgK4zrxwbeiFy7EczHrBv5PP2gbhM23DEhP5GLzy6tBE4yZS',
            ethAddress: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
        },
        {
            nameandsymbol: 'GreenMetaverseToken (GMT)',
            name: 'GreenMetaverseToken',
            symbol: 'GMT',
            decimals: 8,
            icon: 'https://etherscan.io/token/images/stepngmt_32.png',
            aeAddress: 'ct_2ThKhRXDhtmTVffHik4sqCBoXeLKaw656SKW1FWW2SVNfRjDfz',
            ethAddress: '0xe3c408BD53c31C085a1746AF401A4042954ff740',
        },
        {
            nameandsymbol: 'Rocket Pool (RPL)',
            name: 'Rocket Pool',
            symbol: 'RPL',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/Rocketpool_32.png',
            aeAddress: 'ct_6gbZAkHZ7PYoDvoxkL78F2kLsAUXrNgin96uRnFdi1PUXPf5n',
            ethAddress: '0xd33526068d116ce69f19a9ee46f0bd304f21a51f',
        },
        {
            nameandsymbol: 'Blur (BLUR)',
            name: 'Blur',
            symbol: 'BLUR',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/blurio_32.png',
            aeAddress: 'ct_i9dpn21UiCj6rJ7wSEcnXT2h31TrhohqVqv88hWuP5otLLZxE',
            ethAddress: '0x5283d291dbcf85356a21ba090e6db59121208b44',
        },
        {
            nameandsymbol: 'Nexo (NEXO)',
            name: 'Nexo',
            symbol: 'NEXO',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/nexo_32_2.png',
            aeAddress: 'ct_SW6R5NQsk4YEmTpzV4ivc3Hjtr1zuDZYJ13NymkdbRCJjnCK2',
            ethAddress: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
        },
        {
            nameandsymbol: 'Illuvium (ILV)',
            name: 'Illuvium',
            symbol: 'ILV',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/illuvium_32.png',
            aeAddress: 'ct_2rX3XAFivgPFPphF8yxLG1TKdWJwAFJScfKVJfKokCRQRkY5gd',
            ethAddress: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
        },
        {
            nameandsymbol: 'ApeCoin (APE)',
            name: 'ApeCoin',
            symbol: 'APE',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/apecoin_32.png',
            aeAddress: 'ct_2sznvGpsi389ccUtAzqpKHrkdiNef4UDRt8EQoVQHHLSBGEzQV',
            ethAddress: '0x4d224452801aced8b2f0aebe155379bb5d594381',
        },
        {
            nameandsymbol: 'Tether Gold (XAUt)',
            name: 'XAUt',
            symbol: 'XAUt',
            decimals: 6,
            icon: 'https://etherscan.io/token/images/tethergoldnew_32.png',
            aeAddress: 'ct_2mALMjnuRM7bQdxt9TbqeJNmvQYPjsfY6zG1J2YSFuwh6Ck5T',
            ethAddress: '0x68749665ff8d2d112fa859aa293f07a622782f38',
        },
        {
            nameandsymbol: 'Staked Frax Ether (sfrxETH)',
            name: 'sfrxETH',
            symbol: 'sfrxETH',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/sfrxeth2_32.png',
            aeAddress: 'ct_2QHdrcbRAyJG7Fh7FRwdqiCY2EFviFuziVhMCH2iy5H18zMiFb',
            ethAddress: '0xac3e018457b222d93114458476f3e3416abbe38f',
        },
        {
            nameandsymbol: 'Gnosis (GNO)',
            name: 'Gnosis',
            symbol: 'GNO',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/gnosans_32.png?v=2',
            aeAddress: 'ct_2pYpUbToF3eUbkeQwPuQMqL5Aoc1ToYg59DjEcfDTpQX5hTSQA',
            ethAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96',
        },
        {
            nameandsymbol: 'Pepe (PEPE)',
            name: 'Pepe',
            symbol: 'PEPE',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/pepe_32.png?=v1',
            aeAddress: 'ct_GuDXRX3PceZgdnR5tU31WNL9tudSJLCnKbU91UZqvd6o4vHcB',
            ethAddress: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
        },
        {
            nameandsymbol: '1INCH Token (1INCH)',
            name: '1INCH Token',
            symbol: '1INCH',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/1inch_32.png',
            aeAddress: 'ct_gqYbUPeNDJQQ4imL4VhLHtEfpm41AcnGBLEhBfFo4v4AzgjHZ',
            ethAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
        },
        {
            nameandsymbol: 'Coinbase Wrapped Staked ETH (cbETH)',
            name: 'Coinbase Wrapped Staked ETH',
            symbol: 'cbETH',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/cbeth_32.png',
            aeAddress: 'ct_2o7qn6TJtVULb4JiVTzz6xXDz7hx5KzDRtpn4tCiqdTxQnnuK1',
            ethAddress: '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704',
        },
        {
            nameandsymbol: 'Compound Ether (cETH)',
            name: 'Compound Ether',
            symbol: 'cETH',
            decimals: 8,
            icon: 'https://etherscan.io/token/images/compound-eth_28.png',
            aeAddress: 'ct_93hCuXFbSBSFNa23iX7M1GaRFEwyynYF9Fe36kBeLFu2CbXWX',
            ethAddress: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
        },
        {
            nameandsymbol: 'Metis Token (Metis)',
            name: 'Metis Token',
            symbol: 'Metis',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/metisdao_32.png',
            aeAddress: 'ct_kvvt1caDJi9nQXKzKTcczbcL66ZdP7kZt4oWDh1mabB8qEx8R',
            ethAddress: '0x9e32b13ce7f2e80a01932b42553652e053d6ed8e',
        },
        {
            nameandsymbol: 'Paxos Gold (PAXG)',
            name: 'Paxos Gold',
            symbol: 'PAXG',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/paxosgold_32.png',
            aeAddress: 'ct_2SnKtutw1vo31tTwMb69zKk8DqBF7uaGAUjkKXAq9QiZjcBsWc',
            ethAddress: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
        },
        {
            nameandsymbol: 'Rollbit Coin (RLB)',
            name: 'Rollbit Coin',
            symbol: 'RLB',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/rollbitcoin_32.png',
            aeAddress: 'ct_NKrvnTQ26jE23UsGEzJJmBby52wLwjQJyNC7GAY5K4suse4ir',
            ethAddress: '0x046eee2cc3188071c02bfc1745a6b17c656e3f3d',
        },
        {
            nameandsymbol: 'Huobi BTC (HBTC)',
            name: 'Huobi BTC',
            symbol: 'HBTC',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/huobibtc_32.png',
            aeAddress: 'ct_gG5As1jQtiXvVzjkr4RRFhDnNnrUH1he19ZdqFTMr81bkyPYz',
            ethAddress: '0x0316EB71485b0Ab14103307bf65a021042c6d380',
        },
        {
            nameandsymbol: 'APENFT (NFT)',
            name: 'APENFT',
            symbol: 'NFT',
            decimals: 6,
            icon: 'https://etherscan.io/token/images/apenfttron_32.png',
            aeAddress: 'ct_2AbNjLGNhzq92uTUSL7MBdne6YJejbsSx2egAtERDy1wgb9Fp1',
            ethAddress: '0x198d14f2ad9ce69e76ea330b374de4957c3f850a',
        },
        {
            nameandsymbol: 'Ethereum Name Service (ENS)',
            name: 'Ethereum Name Service',
            symbol: 'ENS',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/ens2_32.png?v=2',
            aeAddress: 'ct_YvciyNkkYhTv53dKGkVSRbscPYCZsfcSziuzrGbkXGAPSgAxg',
            ethAddress: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
        },
        {
            nameandsymbol: 'SKALE (SKL)',
            name: 'SKALE',
            symbol: 'SKL',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/skalenetwork_32.png',
            aeAddress: 'ct_2FLRKiPfpLvuN3XDamw3XC6mhEQsdxST5MuADtDpe6ccdUWUQN',
            ethAddress: '0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7',
        },
        {
            nameandsymbol: 'IoTeX Network (IOTX)',
            name: 'IoTeX Network',
            symbol: 'IOTX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/iotex_28.png',
            aeAddress: 'ct_9ZHTNN7shhQ16oHo7DywZydp3SokTMX6Z3cTHHPgjc3SnJw7b',
            ethAddress: '0x6fb3e0a217407efff7ca062d46c26e5d60a14d69',
        },
        {
            nameandsymbol: 'HuobiToken (HT)',
            name: 'HuobiToken',
            symbol: 'HT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/huobi_28.png',
            aeAddress: 'ct_xM1Peaie94QazvobUCaZaaSCc7Ty2MJnckQQBLZZ9hzwyT928',
            ethAddress: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
        },
        {
            nameandsymbol: 'Celo native asset (Wormhole) (CELO)',
            name: 'Celo native asset (Wormhole)',
            symbol: 'CELO',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/celowormhole_32.png',
            aeAddress: 'ct_Uxq35Hhuj7HgNhU3uuhuaQqUNmahTcyhcYD49NALrKnrSAssi',
            ethAddress: '0x3294395e62f4eb6af3f1fcf89f5602d90fb3ef69',
        },
        {
            nameandsymbol: 'Wrapped Celo (wCELO)',
            name: 'Wrapped Celo',
            symbol: 'wCELO',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/wrappedcelo_32.png',
            aeAddress: 'ct_2aXK3bRZ1Nqm3vuT1a8pKxAHS4ifAKRJBVbrNVk52PtwNnSNSE',
            ethAddress: '0xe452e6ea2ddeb012e20db73bf5d3863a3ac8d77a',
        },
        {
            nameandsymbol: 'ELF (ELF)',
            name: 'ELF',
            symbol: 'ELF',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/aelf_28.png',
            aeAddress: 'ct_2XWEG8c5SZtU6uoUpCcHFyCRsvBTNrpJSDw1i7fDNzHFPUDzZU',
            ethAddress: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
        },
        {
            nameandsymbol: 'Pax Dollar (USDP)',
            name: 'Pax Dollar',
            symbol: 'USDP',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/paxos-usdp_32.png',
            aeAddress: 'ct_2p7uZRjv28RRgmYUwPSvMixTLPkBXDpZyqqZkHmPFxWKSkhVaP',
            ethAddress: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
        },
        {
            nameandsymbol: 'Zilliqa (ZIL)',
            name: 'Zilliqa',
            symbol: 'ZIL',
            decimals: 12,
            icon: 'https://etherscan.io/token/images/zilliqa_28_2.png',
            aeAddress: 'ct_qee2aa5QGUgNjmmTZeH7v7gXeHtVNiBuMGtx21ijKdCiyxuQo',
            ethAddress: '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27',
        },
        {
            nameandsymbol: 'HoloToken (HOT)',
            name: 'HoloToken',
            symbol: 'HOT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/holo_28.png',
            aeAddress: 'ct_qwVmtxmh8pP1ECZcaMQQRtXgTBudTapznsBdzEowj3SeQpCaw',
            ethAddress: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
        },
        {
            nameandsymbol: 'BAT (BAT)',
            name: 'BAT',
            symbol: 'BAT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/bat.png',
            aeAddress: 'ct_mMevPPNpDrNgG9Adzpu6txofzKdJDqktNRWWYf4Wvqcp7hcUv',
            ethAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
        },
        {
            nameandsymbol: 'Compound (COMP)',
            name: 'Compound',
            symbol: 'COMP',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/comp_32.png',
            aeAddress: 'ct_2YoWXi3ctD9T8vpFCxfDDfC5wZk1nVM9ME36YTrp1iLK6WPrqn',
            ethAddress: '0xc00e94cb662c3520282e6f5717214004a7f26888',
        },
        {
            nameandsymbol: 'SingularityNET Token (AGIX)',
            name: 'SingularityNET Token',
            symbol: 'AGIX',
            decimals: 8,
            icon: 'https://etherscan.io/token/images/singularitynet_28.png',
            aeAddress: 'ct_3SsfhWUgSKWo8Ewsz2YEq5XQfPefEh5pCUDiYoyuS474HYcWE',
            ethAddress: '0x5b7533812759b45c2b44c19e320ba2cd2681b542',
        },

        {
            nameandsymbol: 'Tellor Tributes (TRB)',
            name: 'Tellor Tributes',
            symbol: 'TRB',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/tellortributes_32.png?v=2',
            aeAddress: 'ct_2kFvRekTv8XHCvCZDttnaV47GMh9eh9X34PTTJkaqUX9KaX7ho',
            ethAddress: '0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0',
        },
        {
            nameandsymbol: 'WQtum (WQTUM)',
            name: 'WQtum',
            symbol: 'WQTUM',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/qtum_28.png',
            aeAddress: 'ct_WL3oCGqeTtbti2VBhrJu5Ho1x3u2GQC3qoFkvGv3LU8Ux5Wno',
            ethAddress: '0x3103df8f05c4d8af16fd22ae63e406b97fec6938',
        },
        {
            nameandsymbol: 'Mask Network (MASK)',
            name: 'Mask Network',
            symbol: 'MASK',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/mask_32.png',
            aeAddress: 'ct_YSY8vGaXk3vzkiouWUKa4nYyF62ZTVKn4ZVGstLKgo8ufH2fn',
            ethAddress: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074',
        },
        {
            nameandsymbol: 'LoopringCoin V2 (LRC)',
            name: 'LoopringCoin V2',
            symbol: 'LRC',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/lrc_32.png',
            aeAddress: 'ct_Bz2oRsfW31VRKfVaaVC2bneEpUx4QFegdpn87T4wxC2QWqHhk',
            ethAddress: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
        },
        {
            nameandsymbol: 'Worldcoin (WLD)',
            name: 'Worldcoin',
            symbol: 'WLD',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/worldcoin_32.png',
            aeAddress: 'ct_oxUyyVB9KUpQR4ZututG621VGsfDiC65wsy7rofJ1mysjqh2p',
            ethAddress: '0x163f8c2467924be0ae7b5347228cabf260318753',
        },
        {
            nameandsymbol: 'EnjinCoin (ENJ)',
            name: 'EnjinCoin',
            symbol: 'ENJ',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/enjin_28_2.png',
            aeAddress: 'ct_ECFqfRPtLQc7puRdC4j3DeNHUJYRBVFMyLbfcK9LbpXVQ7jL2',
            ethAddress: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
        },
        {
            nameandsymbol: 'FLOKI (FLOKI)',
            name: 'FLOKI',
            symbol: 'FLOKI',
            decimals: 9,
            icon: 'https://etherscan.io/token/images/floki_32.png',
            aeAddress: 'ct_ipVoUj1caYRxfES4YzUsMQsk9nrK8i6Afr77T38ctyXXSzTwK',
            ethAddress: '0xcf0c122c6b73ff809c693db761e7baebe62b6a2e',
        },
        {
            nameandsymbol: 'SafePalToken (SFP)',
            name: 'SafePalToken',
            symbol: 'SFP',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/safepal_32.png',
            aeAddress: 'ct_TUddgWPeMe1NfXCEHX5PfTko23vAMvzvhy17U5pkLtAcLaucx',
            ethAddress: '0x12e2b8033420270db2f3b328e32370cb5b2ca134',
        },
        {
            nameandsymbol: 'Ribbon (RBN)',
            name: 'Ribbon',
            symbol: 'RBN',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/ribbon_32.png',
            aeAddress: 'ct_2TE6vbKs4jvYopwEnRyRt2bnJtBByhTZKWRcf5unorf8hESmCL',
            ethAddress: '0x6123b0049f904d730db3c36a31167d9d4121fa6b',
        },
        {
            nameandsymbol: 'Convex Token (CVX)',
            name: 'Convex Token',
            symbol: 'CVX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/convex_32.png',
            aeAddress: 'ct_Q3LSxg8yqhHyydDWcA1FrgHQMzTpBXgbTNZ2R53ntmnUwSdEf',
            ethAddress: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
        },
        {
            nameandsymbol: 'MX Token (MX)',
            name: 'MX Token',
            symbol: 'MX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/mexc_32.png',
            aeAddress: 'ct_qFYcBSK8NoP2q9schqEKdcMTWN29HKUffTWW8tHLrukfHnsFc',
            ethAddress: '0x11eef04c884e24d9b7b4760e7476d06ddf797f36',
        },
        {
            nameandsymbol: 'ZRX (ZRX)',
            name: 'ZRX',
            symbol: 'ZRX',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/zrx_28.png?v=3',
            aeAddress: 'ct_22VEUzxrzCneonrudx9MENcAvaQe5C682Hc6WUhBtRR4g48aWD',
            ethAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
        },
        {
            nameandsymbol: 'Prime (PRIME)',
            name: 'Prime',
            symbol: 'PRIME',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/echelonprime2_32.png',
            aeAddress: 'ct_2AWivSjqAYWGg64TDM6LgWDT3cXoQLxJFGkrWq6fbeqL7fRjdr',
            ethAddress: '0xb23d80f5fefcddaa212212f028021b41ded428cf',
        },
        {
            nameandsymbol: 'Ocean Token (OCEAN)',
            name: 'Ocean Token',
            symbol: 'OCEAN',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/oceantoken_28.png?v=2',
            aeAddress: 'ct_MSJmTUgMaZquvgyPQuhkg3kyeeqS8PDVmfeCqBcWhyERmeN5i',
            ethAddress: '0x967da4048cD07aB37855c090aAF366e4ce1b9F48',
        },
        {
            nameandsymbol: 'Trace (TRAC)',
            name: 'Trace',
            symbol: 'TRAC',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/origintrail_28.png',
            aeAddress: 'ct_27rHu4ukBiQ3vVuyRhvV7z4Q8WwuTMpVkbuyrqVuLapRz9X4E4',
            ethAddress: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
        },
        {
            nameandsymbol: 'yearn.finance (YFI)',
            name: 'yearn.finance',
            symbol: 'YFI',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/yfi_32_2.png',
            aeAddress: 'ct_dPc9Gv8SzD2CQxW8RKjcekxETP9pXJPdKYtesLnAE4dr6pLme',
            ethAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
        },
        {
            nameandsymbol: 'BandToken (BAND)',
            name: 'BandToken',
            symbol: 'BAND',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/bandtoken_32.png',
            aeAddress: 'ct_raRqn8AbRvUQet5C2TdSsZyVNjaq7PYUxddEctdmGGVom17sC',
            ethAddress: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
        },
        {
            nameandsymbol: 'Aragon Network Token (ANT)',
            name: 'Aragon Network Token',
            symbol: 'ANT',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/aragonnetworktoken_32.png?=v2',
            aeAddress: 'ct_1PnNLieJHnXKX3MShkSAMX9gcNgYEhxzqYqpQcqgFp75sWNWX',
            ethAddress: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
        },
        {
            nameandsymbol: 'NXM (NXM)',
            name: 'NXM',
            symbol: 'NXM',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/nxm_32.png?v=2',
            aeAddress: 'ct_2LGRKSsvujwcHvz8gSJhntA85b2gsjuDzWjErwfmAhoH7Eg59c',
            ethAddress: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b',
        },

        {
            nameandsymbol: 'SSV Token (SSV)',
            name: 'SSV Token',
            symbol: 'SSV',
            decimals: 18,
            icon: 'https://etherscan.io/token/images/ssvnetwork_32.png',
            aeAddress: 'ct_2FrusNsx898zj57D2Au3H9PQJ338TpoqMT4y5qqa4Mza5vpQqm',
            ethAddress: '0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54',
        },
    ],
};

export { bridgeConfig, assets };
