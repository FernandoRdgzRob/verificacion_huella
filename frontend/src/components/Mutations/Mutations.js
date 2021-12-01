import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation LogIn($input: LogInInput!) {
    logIn(input: $input) {
      token
      user {
        id
        name
      }
    }
  }
`

export const CREATE_VERIFICATION = gql`
  mutation CreateVerification($input: CreateVerificationInput!) {
    createVerification(input: $input) {
      id
    }
  }
`
