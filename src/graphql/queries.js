/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTree = /* GraphQL */ `
  query GetTree($id: ID!) {
    getTree(id: $id) {
      id
      name
      description
      posts {
        nextToken
      }
      members {
        nextToken
      }
      administrators {
        nextToken
      }
      parents {
        nextToken
      }
      children {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTrees = /* GraphQL */ `
  query ListTrees(
    $filter: ModelTreeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      text
      picIds
      likes
      memberID
      treeID
      comments {
        nextToken
      }
      member {
        id
        aviId
        createdAt
        updatedAt
      }
      tree {
        id
        name
        description
        createdAt
        updatedAt
      }
      likedBy {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        picIds
        likes
        memberID
        treeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      aviId
      posts {
        nextToken
      }
      trees {
        nextToken
      }
      adminRights {
        nextToken
      }
      likedPosts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aviId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      memberID
      postID
      member {
        id
        aviId
        createdAt
        updatedAt
      }
      post {
        id
        text
        picIds
        likes
        memberID
        treeID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        memberID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTreeMemberConnector = /* GraphQL */ `
  query GetTreeMemberConnector($id: ID!) {
    getTreeMemberConnector(id: $id) {
      id
      treeID
      memberID
      tree {
        id
        name
        description
        createdAt
        updatedAt
      }
      member {
        id
        aviId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTreeMemberConnectors = /* GraphQL */ `
  query ListTreeMemberConnectors(
    $filter: ModelTreeMemberConnectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTreeMemberConnectors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        treeID
        memberID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTreeAdminConnector = /* GraphQL */ `
  query GetTreeAdminConnector($id: ID!) {
    getTreeAdminConnector(id: $id) {
      id
      treeID
      adminID
      tree {
        id
        name
        description
        createdAt
        updatedAt
      }
      admin {
        id
        aviId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTreeAdminConnectors = /* GraphQL */ `
  query ListTreeAdminConnectors(
    $filter: ModelTreeAdminConnectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTreeAdminConnectors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        treeID
        adminID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParentChildConnector = /* GraphQL */ `
  query GetParentChildConnector($id: ID!) {
    getParentChildConnector(id: $id) {
      id
      parentID
      childID
      parent {
        id
        name
        description
        createdAt
        updatedAt
      }
      child {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listParentChildConnectors = /* GraphQL */ `
  query ListParentChildConnectors(
    $filter: ModelParentChildConnectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParentChildConnectors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        parentID
        childID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPostMemberConnector = /* GraphQL */ `
  query GetPostMemberConnector($id: ID!) {
    getPostMemberConnector(id: $id) {
      id
      postID
      memberID
      post {
        id
        text
        picIds
        likes
        memberID
        treeID
        createdAt
        updatedAt
      }
      member {
        id
        aviId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPostMemberConnectors = /* GraphQL */ `
  query ListPostMemberConnectors(
    $filter: ModelPostMemberConnectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostMemberConnectors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        memberID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
