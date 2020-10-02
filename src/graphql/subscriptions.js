/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      name
      location
      description
      image
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          message
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      name
      location
      description
      image
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          message
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      name
      location
      description
      image
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          message
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
