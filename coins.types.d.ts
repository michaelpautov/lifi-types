import { ChainKey, Coin, CoinKey, Token } from './base.types';
export declare const defaultCoins: Array<Coin>;
export declare const findDefaultCoin: (coinKey: CoinKey) => Coin;
export declare const findDefaultCoinOnChain: (coinKey: CoinKey, chainKey: ChainKey) => Token;
export declare const defaultTokens: {
    [ChainKey: string]: Array<Token>;
};
export declare const wrappedTokens: {
    [ChainKey: string]: Token;
};
export declare const BASES_TO_CHECK_TRADES_AGAINST: {
    eth: Token[];
    dai: Token[];
    pol: Token[];
    bsc: Token[];
    okt: never[];
    ftm: Token[];
    ava: never[];
    arb: never[];
    hec: never[];
    opt: never[];
    one: Token[];
    rop: Token[];
    rin: Token[];
    gor: Token[];
    kov: never[];
    mum: Token[];
    arbt: never[];
    optt: never[];
    bsct: never[];
    hect: never[];
    onet: Token[];
};
