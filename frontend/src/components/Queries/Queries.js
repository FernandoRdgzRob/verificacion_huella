import { gql } from '@apollo/client'

export const GET_ALL_VERIFICATIONS = gql`
  query GetAllVerifications {
    getAllVerifications {
      id
      match
      coincidence
    }
  }
`
