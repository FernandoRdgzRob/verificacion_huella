module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFingerprint {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVerification {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Fingerprint {
  id: ID!
  type: String!
  side: String!
  filelink: String!
  verificationID: String
}

type FingerprintConnection {
  pageInfo: PageInfo!
  edges: [FingerprintEdge]!
  aggregate: AggregateFingerprint!
}

input FingerprintCreateInput {
  id: ID
  type: String!
  side: String!
  filelink: String!
  verificationID: String
}

input FingerprintCreateOneInput {
  create: FingerprintCreateInput
  connect: FingerprintWhereUniqueInput
}

type FingerprintEdge {
  node: Fingerprint!
  cursor: String!
}

enum FingerprintOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  side_ASC
  side_DESC
  filelink_ASC
  filelink_DESC
  verificationID_ASC
  verificationID_DESC
}

type FingerprintPreviousValues {
  id: ID!
  type: String!
  side: String!
  filelink: String!
  verificationID: String
}

type FingerprintSubscriptionPayload {
  mutation: MutationType!
  node: Fingerprint
  updatedFields: [String!]
  previousValues: FingerprintPreviousValues
}

input FingerprintSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FingerprintWhereInput
  AND: [FingerprintSubscriptionWhereInput!]
  OR: [FingerprintSubscriptionWhereInput!]
  NOT: [FingerprintSubscriptionWhereInput!]
}

input FingerprintUpdateDataInput {
  type: String
  side: String
  filelink: String
  verificationID: String
}

input FingerprintUpdateInput {
  type: String
  side: String
  filelink: String
  verificationID: String
}

input FingerprintUpdateManyMutationInput {
  type: String
  side: String
  filelink: String
  verificationID: String
}

input FingerprintUpdateOneRequiredInput {
  create: FingerprintCreateInput
  update: FingerprintUpdateDataInput
  upsert: FingerprintUpsertNestedInput
  connect: FingerprintWhereUniqueInput
}

input FingerprintUpsertNestedInput {
  update: FingerprintUpdateDataInput!
  create: FingerprintCreateInput!
}

input FingerprintWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  side: String
  side_not: String
  side_in: [String!]
  side_not_in: [String!]
  side_lt: String
  side_lte: String
  side_gt: String
  side_gte: String
  side_contains: String
  side_not_contains: String
  side_starts_with: String
  side_not_starts_with: String
  side_ends_with: String
  side_not_ends_with: String
  filelink: String
  filelink_not: String
  filelink_in: [String!]
  filelink_not_in: [String!]
  filelink_lt: String
  filelink_lte: String
  filelink_gt: String
  filelink_gte: String
  filelink_contains: String
  filelink_not_contains: String
  filelink_starts_with: String
  filelink_not_starts_with: String
  filelink_ends_with: String
  filelink_not_ends_with: String
  verificationID: String
  verificationID_not: String
  verificationID_in: [String!]
  verificationID_not_in: [String!]
  verificationID_lt: String
  verificationID_lte: String
  verificationID_gt: String
  verificationID_gte: String
  verificationID_contains: String
  verificationID_not_contains: String
  verificationID_starts_with: String
  verificationID_not_starts_with: String
  verificationID_ends_with: String
  verificationID_not_ends_with: String
  AND: [FingerprintWhereInput!]
  OR: [FingerprintWhereInput!]
  NOT: [FingerprintWhereInput!]
}

input FingerprintWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFingerprint(data: FingerprintCreateInput!): Fingerprint!
  updateFingerprint(data: FingerprintUpdateInput!, where: FingerprintWhereUniqueInput!): Fingerprint
  updateManyFingerprints(data: FingerprintUpdateManyMutationInput!, where: FingerprintWhereInput): BatchPayload!
  upsertFingerprint(where: FingerprintWhereUniqueInput!, create: FingerprintCreateInput!, update: FingerprintUpdateInput!): Fingerprint!
  deleteFingerprint(where: FingerprintWhereUniqueInput!): Fingerprint
  deleteManyFingerprints(where: FingerprintWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVerification(data: VerificationCreateInput!): Verification!
  updateVerification(data: VerificationUpdateInput!, where: VerificationWhereUniqueInput!): Verification
  updateManyVerifications(data: VerificationUpdateManyMutationInput!, where: VerificationWhereInput): BatchPayload!
  upsertVerification(where: VerificationWhereUniqueInput!, create: VerificationCreateInput!, update: VerificationUpdateInput!): Verification!
  deleteVerification(where: VerificationWhereUniqueInput!): Verification
  deleteManyVerifications(where: VerificationWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  fingerprint(where: FingerprintWhereUniqueInput!): Fingerprint
  fingerprints(where: FingerprintWhereInput, orderBy: FingerprintOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fingerprint]!
  fingerprintsConnection(where: FingerprintWhereInput, orderBy: FingerprintOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FingerprintConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  verification(where: VerificationWhereUniqueInput!): Verification
  verifications(where: VerificationWhereInput, orderBy: VerificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Verification]!
  verificationsConnection(where: VerificationWhereInput, orderBy: VerificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VerificationConnection!
  node(id: ID!): Node
}

type Subscription {
  fingerprint(where: FingerprintSubscriptionWhereInput): FingerprintSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  verification(where: VerificationSubscriptionWhereInput): VerificationSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  name: String
  lastname: String
  password: String!
  isAdmin: Boolean!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  name: String
  lastname: String
  password: String!
  isAdmin: Boolean!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  lastname_ASC
  lastname_DESC
  password_ASC
  password_DESC
  isAdmin_ASC
  isAdmin_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String
  lastname: String
  password: String!
  isAdmin: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  name: String
  lastname: String
  password: String
  isAdmin: Boolean
}

input UserUpdateInput {
  email: String
  name: String
  lastname: String
  password: String
  isAdmin: Boolean
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  lastname: String
  password: String
  isAdmin: Boolean
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  isAdmin: Boolean
  isAdmin_not: Boolean
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Verification {
  id: ID!
  fingerprintA: Fingerprint!
  fingerprintB: Fingerprint!
  match: Boolean!
  createdBy: User!
  createdAt: DateTime!
}

type VerificationConnection {
  pageInfo: PageInfo!
  edges: [VerificationEdge]!
  aggregate: AggregateVerification!
}

input VerificationCreateInput {
  id: ID
  fingerprintA: FingerprintCreateOneInput!
  fingerprintB: FingerprintCreateOneInput!
  match: Boolean!
  createdBy: UserCreateOneInput!
}

type VerificationEdge {
  node: Verification!
  cursor: String!
}

enum VerificationOrderByInput {
  id_ASC
  id_DESC
  match_ASC
  match_DESC
  createdAt_ASC
  createdAt_DESC
}

type VerificationPreviousValues {
  id: ID!
  match: Boolean!
  createdAt: DateTime!
}

type VerificationSubscriptionPayload {
  mutation: MutationType!
  node: Verification
  updatedFields: [String!]
  previousValues: VerificationPreviousValues
}

input VerificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VerificationWhereInput
  AND: [VerificationSubscriptionWhereInput!]
  OR: [VerificationSubscriptionWhereInput!]
  NOT: [VerificationSubscriptionWhereInput!]
}

input VerificationUpdateInput {
  fingerprintA: FingerprintUpdateOneRequiredInput
  fingerprintB: FingerprintUpdateOneRequiredInput
  match: Boolean
  createdBy: UserUpdateOneRequiredInput
}

input VerificationUpdateManyMutationInput {
  match: Boolean
}

input VerificationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fingerprintA: FingerprintWhereInput
  fingerprintB: FingerprintWhereInput
  match: Boolean
  match_not: Boolean
  createdBy: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [VerificationWhereInput!]
  OR: [VerificationWhereInput!]
  NOT: [VerificationWhereInput!]
}

input VerificationWhereUniqueInput {
  id: ID
}
`
      }
    