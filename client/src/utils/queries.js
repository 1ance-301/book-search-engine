import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books($title: String) {
    books(title: $username) {
      bookId
      authors
      description
      title
      image
      link
      }
    }
  }
`;

export const QUERY_BOOK = gql`
  query book($id: ID!) {
    book(_id: $id) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
    }
  }
`;