/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTree = /* GraphQL */ `
  mutation CreateTree(
    $input: CreateTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    createTree(input: $input, condition: $condition) {
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
export const updateTree = /* GraphQL */ `
  mutation UpdateTree(
    $input: UpdateTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    updateTree(input: $input, condition: $condition) {
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
export const deleteTree = /* GraphQL */ `
  mutation DeleteTree(
    $input: DeleteTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    deleteTree(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTreeMemberConnector = /* GraphQL */ `
  mutation CreateTreeMemberConnector(
    $input: CreateTreeMemberConnectorInput!
    $condition: ModelTreeMemberConnectorConditionInput
  ) {
    createTreeMemberConnector(input: $input, condition: $condition) {
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
export const updateTreeMemberConnector = /* GraphQL */ `
  mutation UpdateTreeMemberConnector(
    $input: UpdateTreeMemberConnectorInput!
    $condition: ModelTreeMemberConnectorConditionInput
  ) {
    updateTreeMemberConnector(input: $input, condition: $condition) {
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
export const deleteTreeMemberConnector = /* GraphQL */ `
  mutation DeleteTreeMemberConnector(
    $input: DeleteTreeMemberConnectorInput!
    $condition: ModelTreeMemberConnectorConditionInput
  ) {
    deleteTreeMemberConnector(input: $input, condition: $condition) {
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
export const createTreeAdminConnector = /* GraphQL */ `
  mutation CreateTreeAdminConnector(
    $input: CreateTreeAdminConnectorInput!
    $condition: ModelTreeAdminConnectorConditionInput
  ) {
    createTreeAdminConnector(input: $input, condition: $condition) {
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
export const updateTreeAdminConnector = /* GraphQL */ `
  mutation UpdateTreeAdminConnector(
    $input: UpdateTreeAdminConnectorInput!
    $condition: ModelTreeAdminConnectorConditionInput
  ) {
    updateTreeAdminConnector(input: $input, condition: $condition) {
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
export const deleteTreeAdminConnector = /* GraphQL */ `
  mutation DeleteTreeAdminConnector(
    $input: DeleteTreeAdminConnectorInput!
    $condition: ModelTreeAdminConnectorConditionInput
  ) {
    deleteTreeAdminConnector(input: $input, condition: $condition) {
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
export const createParentChildConnector = /* GraphQL */ `
  mutation CreateParentChildConnector(
    $input: CreateParentChildConnectorInput!
    $condition: ModelParentChildConnectorConditionInput
  ) {
    createParentChildConnector(input: $input, condition: $condition) {
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
export const updateParentChildConnector = /* GraphQL */ `
  mutation UpdateParentChildConnector(
    $input: UpdateParentChildConnectorInput!
    $condition: ModelParentChildConnectorConditionInput
  ) {
    updateParentChildConnector(input: $input, condition: $condition) {
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
export const deleteParentChildConnector = /* GraphQL */ `
  mutation DeleteParentChildConnector(
    $input: DeleteParentChildConnectorInput!
    $condition: ModelParentChildConnectorConditionInput
  ) {
    deleteParentChildConnector(input: $input, condition: $condition) {
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
export const createPostMemberConnector = /* GraphQL */ `
  mutation CreatePostMemberConnector(
    $input: CreatePostMemberConnectorInput!
    $condition: ModelPostMemberConnectorConditionInput
  ) {
    createPostMemberConnector(input: $input, condition: $condition) {
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
export const updatePostMemberConnector = /* GraphQL */ `
  mutation UpdatePostMemberConnector(
    $input: UpdatePostMemberConnectorInput!
    $condition: ModelPostMemberConnectorConditionInput
  ) {
    updatePostMemberConnector(input: $input, condition: $condition) {
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
export const deletePostMemberConnector = /* GraphQL */ `
  mutation DeletePostMemberConnector(
    $input: DeletePostMemberConnectorInput!
    $condition: ModelPostMemberConnectorConditionInput
  ) {
    deletePostMemberConnector(input: $input, condition: $condition) {
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
