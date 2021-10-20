// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  comparison: (where?: ComparisonWhereInput) => Promise<boolean>;
  fingerprint: (where?: FingerprintWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  comparison: (where: ComparisonWhereUniqueInput) => ComparisonNullablePromise;
  comparisons: (args?: {
    where?: ComparisonWhereInput;
    orderBy?: ComparisonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Comparison>;
  comparisonsConnection: (args?: {
    where?: ComparisonWhereInput;
    orderBy?: ComparisonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ComparisonConnectionPromise;
  fingerprint: (
    where: FingerprintWhereUniqueInput
  ) => FingerprintNullablePromise;
  fingerprints: (args?: {
    where?: FingerprintWhereInput;
    orderBy?: FingerprintOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Fingerprint>;
  fingerprintsConnection: (args?: {
    where?: FingerprintWhereInput;
    orderBy?: FingerprintOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FingerprintConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createComparison: (data: ComparisonCreateInput) => ComparisonPromise;
  updateComparison: (args: {
    data: ComparisonUpdateInput;
    where: ComparisonWhereUniqueInput;
  }) => ComparisonPromise;
  updateManyComparisons: (args: {
    data: ComparisonUpdateManyMutationInput;
    where?: ComparisonWhereInput;
  }) => BatchPayloadPromise;
  upsertComparison: (args: {
    where: ComparisonWhereUniqueInput;
    create: ComparisonCreateInput;
    update: ComparisonUpdateInput;
  }) => ComparisonPromise;
  deleteComparison: (where: ComparisonWhereUniqueInput) => ComparisonPromise;
  deleteManyComparisons: (where?: ComparisonWhereInput) => BatchPayloadPromise;
  createFingerprint: (data: FingerprintCreateInput) => FingerprintPromise;
  updateFingerprint: (args: {
    data: FingerprintUpdateInput;
    where: FingerprintWhereUniqueInput;
  }) => FingerprintPromise;
  updateManyFingerprints: (args: {
    data: FingerprintUpdateManyMutationInput;
    where?: FingerprintWhereInput;
  }) => BatchPayloadPromise;
  upsertFingerprint: (args: {
    where: FingerprintWhereUniqueInput;
    create: FingerprintCreateInput;
    update: FingerprintUpdateInput;
  }) => FingerprintPromise;
  deleteFingerprint: (where: FingerprintWhereUniqueInput) => FingerprintPromise;
  deleteManyFingerprints: (
    where?: FingerprintWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  comparison: (
    where?: ComparisonSubscriptionWhereInput
  ) => ComparisonSubscriptionPayloadSubscription;
  fingerprint: (
    where?: FingerprintSubscriptionWhereInput
  ) => FingerprintSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type FingerprintOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "type_ASC"
  | "type_DESC"
  | "side_ASC"
  | "side_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ComparisonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "match_ASC"
  | "match_DESC"
  | "coincidence_ASC"
  | "coincidence_DESC"
  | "timestamp_ASC"
  | "timestamp_DESC";

export interface ComparisonCreateInput {
  id?: Maybe<ID_Input>;
  firstFingerprint: FingerprintCreateOneInput;
  secondFingerprint: FingerprintCreateOneInput;
  match: Boolean;
  coincidence: Int;
  timestamp: DateTimeInput;
}

export interface FingerprintUpdateDataInput {
  type?: Maybe<String>;
  side?: Maybe<String>;
}

export type ComparisonWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface FingerprintUpdateOneRequiredInput {
  create?: Maybe<FingerprintCreateInput>;
  update?: Maybe<FingerprintUpdateDataInput>;
  upsert?: Maybe<FingerprintUpsertNestedInput>;
  connect?: Maybe<FingerprintWhereUniqueInput>;
}

export interface FingerprintUpdateManyMutationInput {
  type?: Maybe<String>;
  side?: Maybe<String>;
}

export interface ComparisonUpdateInput {
  firstFingerprint?: Maybe<FingerprintUpdateOneRequiredInput>;
  secondFingerprint?: Maybe<FingerprintUpdateOneRequiredInput>;
  match?: Maybe<Boolean>;
  coincidence?: Maybe<Int>;
  timestamp?: Maybe<DateTimeInput>;
}

export interface ComparisonUpdateManyMutationInput {
  match?: Maybe<Boolean>;
  coincidence?: Maybe<Int>;
  timestamp?: Maybe<DateTimeInput>;
}

export interface FingerprintWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  type?: Maybe<String>;
  type_not?: Maybe<String>;
  type_in?: Maybe<String[] | String>;
  type_not_in?: Maybe<String[] | String>;
  type_lt?: Maybe<String>;
  type_lte?: Maybe<String>;
  type_gt?: Maybe<String>;
  type_gte?: Maybe<String>;
  type_contains?: Maybe<String>;
  type_not_contains?: Maybe<String>;
  type_starts_with?: Maybe<String>;
  type_not_starts_with?: Maybe<String>;
  type_ends_with?: Maybe<String>;
  type_not_ends_with?: Maybe<String>;
  side?: Maybe<String>;
  side_not?: Maybe<String>;
  side_in?: Maybe<String[] | String>;
  side_not_in?: Maybe<String[] | String>;
  side_lt?: Maybe<String>;
  side_lte?: Maybe<String>;
  side_gt?: Maybe<String>;
  side_gte?: Maybe<String>;
  side_contains?: Maybe<String>;
  side_not_contains?: Maybe<String>;
  side_starts_with?: Maybe<String>;
  side_not_starts_with?: Maybe<String>;
  side_ends_with?: Maybe<String>;
  side_not_ends_with?: Maybe<String>;
  AND?: Maybe<FingerprintWhereInput[] | FingerprintWhereInput>;
  OR?: Maybe<FingerprintWhereInput[] | FingerprintWhereInput>;
  NOT?: Maybe<FingerprintWhereInput[] | FingerprintWhereInput>;
}

export interface FingerprintCreateOneInput {
  create?: Maybe<FingerprintCreateInput>;
  connect?: Maybe<FingerprintWhereUniqueInput>;
}

export interface FingerprintCreateInput {
  id?: Maybe<ID_Input>;
  type: String;
  side: String;
}

export interface ComparisonSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ComparisonWhereInput>;
  AND?: Maybe<
    ComparisonSubscriptionWhereInput[] | ComparisonSubscriptionWhereInput
  >;
  OR?: Maybe<
    ComparisonSubscriptionWhereInput[] | ComparisonSubscriptionWhereInput
  >;
  NOT?: Maybe<
    ComparisonSubscriptionWhereInput[] | ComparisonSubscriptionWhereInput
  >;
}

export type FingerprintWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface FingerprintSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<FingerprintWhereInput>;
  AND?: Maybe<
    FingerprintSubscriptionWhereInput[] | FingerprintSubscriptionWhereInput
  >;
  OR?: Maybe<
    FingerprintSubscriptionWhereInput[] | FingerprintSubscriptionWhereInput
  >;
  NOT?: Maybe<
    FingerprintSubscriptionWhereInput[] | FingerprintSubscriptionWhereInput
  >;
}

export interface ComparisonWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  firstFingerprint?: Maybe<FingerprintWhereInput>;
  secondFingerprint?: Maybe<FingerprintWhereInput>;
  match?: Maybe<Boolean>;
  match_not?: Maybe<Boolean>;
  coincidence?: Maybe<Int>;
  coincidence_not?: Maybe<Int>;
  coincidence_in?: Maybe<Int[] | Int>;
  coincidence_not_in?: Maybe<Int[] | Int>;
  coincidence_lt?: Maybe<Int>;
  coincidence_lte?: Maybe<Int>;
  coincidence_gt?: Maybe<Int>;
  coincidence_gte?: Maybe<Int>;
  timestamp?: Maybe<DateTimeInput>;
  timestamp_not?: Maybe<DateTimeInput>;
  timestamp_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  timestamp_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  timestamp_lt?: Maybe<DateTimeInput>;
  timestamp_lte?: Maybe<DateTimeInput>;
  timestamp_gt?: Maybe<DateTimeInput>;
  timestamp_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ComparisonWhereInput[] | ComparisonWhereInput>;
  OR?: Maybe<ComparisonWhereInput[] | ComparisonWhereInput>;
  NOT?: Maybe<ComparisonWhereInput[] | ComparisonWhereInput>;
}

export interface FingerprintUpdateInput {
  type?: Maybe<String>;
  side?: Maybe<String>;
}

export interface FingerprintUpsertNestedInput {
  update: FingerprintUpdateDataInput;
  create: FingerprintCreateInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface FingerprintSubscriptionPayload {
  mutation: MutationType;
  node: Fingerprint;
  updatedFields: String[];
  previousValues: FingerprintPreviousValues;
}

export interface FingerprintSubscriptionPayloadPromise
  extends Promise<FingerprintSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = FingerprintPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = FingerprintPreviousValuesPromise>() => T;
}

export interface FingerprintSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<FingerprintSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = FingerprintSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = FingerprintPreviousValuesSubscription>() => T;
}

export interface Fingerprint {
  id: ID_Output;
  type: String;
  side: String;
}

export interface FingerprintPromise extends Promise<Fingerprint>, Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<String>;
  side: () => Promise<String>;
}

export interface FingerprintSubscription
  extends Promise<AsyncIterator<Fingerprint>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  type: () => Promise<AsyncIterator<String>>;
  side: () => Promise<AsyncIterator<String>>;
}

export interface FingerprintNullablePromise
  extends Promise<Fingerprint | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<String>;
  side: () => Promise<String>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface FingerprintPreviousValues {
  id: ID_Output;
  type: String;
  side: String;
}

export interface FingerprintPreviousValuesPromise
  extends Promise<FingerprintPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<String>;
  side: () => Promise<String>;
}

export interface FingerprintPreviousValuesSubscription
  extends Promise<AsyncIterator<FingerprintPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  type: () => Promise<AsyncIterator<String>>;
  side: () => Promise<AsyncIterator<String>>;
}

export interface FingerprintConnection {
  pageInfo: PageInfo;
  edges: FingerprintEdge[];
}

export interface FingerprintConnectionPromise
  extends Promise<FingerprintConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<FingerprintEdge>>() => T;
  aggregate: <T = AggregateFingerprintPromise>() => T;
}

export interface FingerprintConnectionSubscription
  extends Promise<AsyncIterator<FingerprintConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<FingerprintEdgeSubscription>>>() => T;
  aggregate: <T = AggregateFingerprintSubscription>() => T;
}

export interface ComparisonSubscriptionPayload {
  mutation: MutationType;
  node: Comparison;
  updatedFields: String[];
  previousValues: ComparisonPreviousValues;
}

export interface ComparisonSubscriptionPayloadPromise
  extends Promise<ComparisonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ComparisonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ComparisonPreviousValuesPromise>() => T;
}

export interface ComparisonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ComparisonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ComparisonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ComparisonPreviousValuesSubscription>() => T;
}

export interface ComparisonPreviousValues {
  id: ID_Output;
  match: Boolean;
  coincidence: Int;
  timestamp: DateTimeOutput;
}

export interface ComparisonPreviousValuesPromise
  extends Promise<ComparisonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  match: () => Promise<Boolean>;
  coincidence: () => Promise<Int>;
  timestamp: () => Promise<DateTimeOutput>;
}

export interface ComparisonPreviousValuesSubscription
  extends Promise<AsyncIterator<ComparisonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  match: () => Promise<AsyncIterator<Boolean>>;
  coincidence: () => Promise<AsyncIterator<Int>>;
  timestamp: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface Comparison {
  id: ID_Output;
  match: Boolean;
  coincidence: Int;
  timestamp: DateTimeOutput;
}

export interface ComparisonPromise extends Promise<Comparison>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstFingerprint: <T = FingerprintPromise>() => T;
  secondFingerprint: <T = FingerprintPromise>() => T;
  match: () => Promise<Boolean>;
  coincidence: () => Promise<Int>;
  timestamp: () => Promise<DateTimeOutput>;
}

export interface ComparisonSubscription
  extends Promise<AsyncIterator<Comparison>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstFingerprint: <T = FingerprintSubscription>() => T;
  secondFingerprint: <T = FingerprintSubscription>() => T;
  match: () => Promise<AsyncIterator<Boolean>>;
  coincidence: () => Promise<AsyncIterator<Int>>;
  timestamp: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ComparisonNullablePromise
  extends Promise<Comparison | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstFingerprint: <T = FingerprintPromise>() => T;
  secondFingerprint: <T = FingerprintPromise>() => T;
  match: () => Promise<Boolean>;
  coincidence: () => Promise<Int>;
  timestamp: () => Promise<DateTimeOutput>;
}

export interface AggregateFingerprint {
  count: Int;
}

export interface AggregateFingerprintPromise
  extends Promise<AggregateFingerprint>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateFingerprintSubscription
  extends Promise<AsyncIterator<AggregateFingerprint>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateComparison {
  count: Int;
}

export interface AggregateComparisonPromise
  extends Promise<AggregateComparison>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateComparisonSubscription
  extends Promise<AsyncIterator<AggregateComparison>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface FingerprintEdge {
  node: Fingerprint;
  cursor: String;
}

export interface FingerprintEdgePromise
  extends Promise<FingerprintEdge>,
    Fragmentable {
  node: <T = FingerprintPromise>() => T;
  cursor: () => Promise<String>;
}

export interface FingerprintEdgeSubscription
  extends Promise<AsyncIterator<FingerprintEdge>>,
    Fragmentable {
  node: <T = FingerprintSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ComparisonConnection {
  pageInfo: PageInfo;
  edges: ComparisonEdge[];
}

export interface ComparisonConnectionPromise
  extends Promise<ComparisonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ComparisonEdge>>() => T;
  aggregate: <T = AggregateComparisonPromise>() => T;
}

export interface ComparisonConnectionSubscription
  extends Promise<AsyncIterator<ComparisonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ComparisonEdgeSubscription>>>() => T;
  aggregate: <T = AggregateComparisonSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ComparisonEdge {
  node: Comparison;
  cursor: String;
}

export interface ComparisonEdgePromise
  extends Promise<ComparisonEdge>,
    Fragmentable {
  node: <T = ComparisonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ComparisonEdgeSubscription
  extends Promise<AsyncIterator<ComparisonEdge>>,
    Fragmentable {
  node: <T = ComparisonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Fingerprint",
    embedded: false
  },
  {
    name: "Comparison",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;