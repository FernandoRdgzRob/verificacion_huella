import { gql } from '@apollo/client'

export const GET_ALL_VERIFICATIONS = gql`
  query GetAllVerifications {
    getAllVerifications {
      id
      match
      fingerprintA {
        id
        type
        side
        filelink
      }
      fingerprintB {
        id
        type
        side
        filelink
      }
      createdAt
    }
  }
`
