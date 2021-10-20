import { ChainKey, CoinKey } from './base.types';
export interface Chain {
    key: ChainKey;
    name: string;
    coin: CoinKey;
    id: number;
    visible: boolean;
    exchange?: Exchange;
    faucetUrls?: string[];
    metamask: AddEthereumChainParameter;
}
export interface AddEthereumChainParameter {
    chainId: string;
    blockExplorerUrls: string[];
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
}
export interface Exchange {
    name: string;
    webUrl: string;
    graph: string;
    tokenlistUrl: string;
}
export declare const supportedChains: Array<Chain>;
export declare const getChainByKey: (chainKey: ChainKey) => Chain;
export declare const getChainById: (chainId: number) => Chain;
