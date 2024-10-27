import type { Credentials } from '@aws-sdk/client-sts';
import type { CredentialsClient } from './CredentialsClient';
export declare function exportCredentials(creds?: Partial<Credentials>, outputCredentials?: boolean): void;
export declare function unsetCredentials(): void;
export declare function exportRegion(region: string): void;
export declare function exportAccountId(credentialsClient: CredentialsClient, maskAccountId?: boolean, maskArn?: boolean): Promise<string>;
export declare function sanitizeGitHubVariables(name: string): string;
export declare function defaultSleep(ms: number): Promise<unknown>;
declare let sleep: typeof defaultSleep;
export declare function withsleep(s: typeof sleep): void;
export declare function reset(): void;
export declare function verifyKeys(creds: Partial<Credentials> | undefined): boolean;
export declare function retryAndBackoff<T>(fn: () => Promise<T>, isRetryable: boolean, maxRetries?: number, retries?: number, base?: number): Promise<T>;
export declare function errorMessage(error: unknown): string;
export declare function isDefined<T>(i: T | undefined | null): i is T;
export {};
