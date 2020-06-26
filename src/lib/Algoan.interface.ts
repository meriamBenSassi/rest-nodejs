import { EventName, AnalysisAlerts } from './Algoan.enum';

/**
 * Service account body
 */
export interface IServiceAccount {
  id: string;
  clientId: string;
  clientSecret: string;
  createdAt: string;
}

/**
 * Subscription interface
 * https://developers.algoan.com/api/#operation/getResthookSubs
 */
export interface ISubscription {
  id: string;
  eventName: EventName;
  secret?: string;
  status: SubscriptionStatus;
  target: string;
}

/**
 * Subscription statuses
 */
export type SubscriptionStatus = 'ACTIVE' | 'DISABLE' | 'INACTIVE';

/**
 * BanksUser
 */
export interface IBanksUser {
  id: string;
  status: BanksUserStatus;
  redirectUrl: string;
  redirectUrlCreatedAt: number;
  redirectUrlTTL: number;
  callbackUrl: string;
  plugIn?: PlugIn;
  scores: Score[];
  analysis: Analysis;
}

/**
 * BanksUser statuses
 */
export type BanksUserStatus = 'NEW' | 'SYNCHRONIZING' | 'FINISHED' | 'ACCOUNTS_SYNCHRONIZED';

/**
 * List of plug-in linked to the aggregation process
 */
export interface PlugIn {
  budgetInsightBank?: {
    baseUrl: string;
    token: string;
  };
}

/**
 * Algoan Score
 */
export interface Score {
  createdAt: string;
  score: number;
  type: string;
  version: string;
}

/**
 * State of user banking and financial information
 */
export interface Analysis {
  alerts: AnalysisAlerts[];
  regularCashFlows: RegularCashFlow[];
  reliability: ReliabilityStatus;
}

/**
 * Regular monthly estimated cash-flows
 */
export interface RegularCashFlow {
  amount: number;
  category: {
    frequency: number;
    name: string;
  };
  configuration: 'A' | 'B' | 'C' | 'D';
  homogeneity: number;
}

/**
 * Reliability result statuses
 */
export type ReliabilityStatus = 'LOW' | 'MEDIUM' | 'HIGH';

/**
 * BanksUser Account
 */
export interface BanksUserAccount {
  id: string;
  balance: number;
  balanceDate: string;
  connectionSource: string;
  currency: string;
  type: 'CHECKINGS' | 'SAVINGS' | 'LOAN' | 'CREDIT_CARD';
  usage: 'PROFESSIONAL' | 'PERSONAL';
  bank?: string;
  bic?: string;
  iban?: string;
  loanDetails?: LoanDetails;
  name?: string;
  reference?: string;
  savingsDetails?: string;
  status?: 'MANUAL' | 'ACTIVE' | 'ERROR' | 'NOT_FOUND' | 'CLOSED';
}

/**
 * Loan Details
 */
export interface LoanDetails {
  amount: number;
  debitedAccountId: string;
  endDate: number;
  interestRate: number;
  payment: number;
  remainingCapital: number;
  startDate: number;
  type:
    | 'AUTO'
    | 'CONSUMER'
    | 'CONSTRUCTION'
    | 'MORTGAGE'
    | 'OTHER'
    | 'HOMEEQUITY'
    | 'COMMERCIAL'
    | 'STUDENT'
    | 'MILITARY'
    | 'SMB';
}

/**
 * BanksUser transation
 */
export interface BanksUserTransaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  type: BanksUserTransactionType;
  banksUserCardId?: string;
  currency?: string;
  reference?: string;
  simplifiedDescription?: string;
  userDescription?: string;
}

/**
 * BanksUser Transaction type
 */
export type BanksUserTransactionType =
  | 'ATM'
  | 'BANK_FEE'
  | 'CASH'
  | 'CHECK'
  | 'CREDIT'
  | 'CREDIT_CARD_PAYMENT'
  | 'DEBIT'
  | 'DEPOSIT'
  | 'DIRECT_DEBIT'
  | 'DIRECT_DEPOSIT'
  | 'DIVIDEND'
  | 'ELECTRONIC_PAYMENT'
  | 'INTEREST'
  | 'INTERNAL_TRANSFERT'
  | 'POINT_OF_SALE'
  | 'POTENTIAL_TRANSFER'
  | 'REPEATING_PAYMENT'
  | 'OTHER'
  | 'UNKNOWN';

/**
 * Multiple Resource Creation Response Scheme
 */
export interface MultiResourceCreationResponse<T> {
  elements: { resource: T; status: number }[];
  metadata: { failure: number; sucess: number; total: number };
}
