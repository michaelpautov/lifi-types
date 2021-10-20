import { Token } from './base.types';
export interface BaseEstimate {
    type: string;
    fromAmount: string;
    toAmount: string;
    fees: {
        included: boolean;
        percentage: string | null;
        token: Token;
        amount: string;
    };
}
export declare type DepositEstimate = BaseEstimate;
export interface SwapEstimate extends BaseEstimate {
    type: 'swap';
    data: unknown;
}
export interface CrossEstimate extends BaseEstimate {
    type: 'cross';
    data: unknown;
}
export declare type WithdrawEstimate = BaseEstimate;
export interface FailedEstimate {
    type: 'error';
    error: string;
    message: string;
}
export declare type Estimate = SwapEstimate | DepositEstimate | CrossEstimate | WithdrawEstimate;
export declare type Status = 'NOT_STARTED' | 'ACTION_REQUIRED' | 'PENDING' | 'FAILED' | 'DONE';
declare type AcceptableMessages = string | unknown;
export declare type ProcessMessage = AcceptableMessages | {
    message: AcceptableMessages;
    footer: AcceptableMessages;
};
export interface Process {
    startedAt: number;
    doneAt?: number;
    failedAt?: number;
    errorMessage?: unknown;
    errorCode?: unknown;
    message: ProcessMessage;
    status: Status;
    [key: string]: unknown;
}
export interface Execution {
    status: Status;
    process: Array<Process>;
    fromAmount?: number;
    toAmount?: number;
}
export declare const emptyExecution: Execution;
interface ActionBase {
    type: string;
    chainId: number;
    amount: string;
    token: Token;
}
export interface DepositAction extends ActionBase {
    type: 'deposit';
}
export interface WithdrawAction extends ActionBase {
    type: 'withdraw';
    toAddress: string;
}
export interface SwapAction extends ActionBase {
    type: 'swap';
    tool: string;
    toToken: Token;
}
export interface CrossAction extends ActionBase {
    type: 'cross';
    tool: string;
    toChainId: number;
    toToken: Token;
    toAddress: string;
}
export declare type Action = DepositAction | WithdrawAction | SwapAction | CrossAction;
export interface Step {
    action: Action;
    estimate?: Estimate;
    execution?: Execution;
}
export interface SwapStep {
    action: SwapAction;
    estimate: SwapEstimate;
}
export interface CrossStep {
    action: CrossAction;
    estimate: CrossEstimate;
}
export {};
