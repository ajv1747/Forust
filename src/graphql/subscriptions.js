/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTree = /* GraphQL */ `
  subscription OnCreateTree {
    onCreateTree {
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
export const onUpdateTree = /* GraphQL */ `
  subscription OnUpdateTree {
    onUpdateTree {
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
export const onDeleteTree = /* GraphQL */ `
  subscription OnDeleteTree {
    onDeleteTree {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateTreeMemberConnector = /* GraphQL */ `
  subscription OnCreateTreeMemberConnector {
    onCreateTreeMemberConnector {
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
export const onUpdateTreeMemberConnector = /* GraphQL */ `
  subscription OnUpdateTreeMemberConnector {
    onUpdateTreeMemberConnector {
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
export const onDeleteTreeMemberConnector = /* GraphQL */ `
  subscription OnDeleteTreeMemberConnector {
    onDeleteTreeMemberConnector {
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
export const onCreateTreeAdminConnector = /* GraphQL */ `
  subscription OnCreateTreeAdminConnector {
    onCreateTreeAdminConnector {
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
export const onUpdateTreeAdminConnector = /* GraphQL */ `
  subscription OnUpdateTreeAdminConnector {
    onUpdateTreeAdminConnector {
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
export const onDeleteTreeAdminConnector = /* GraphQL */ `
  subscription OnDeleteTreeAdminConnector {
    onDeleteTreeAdminConnector {
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
export const onCreateParentChildConnector = /* GraphQL */ `
  subscription OnCreateParentChildConnector {
    onCreateParentChildConnector {
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
export const onUpdateParentChildConnector = /* GraphQL */ `
  subscription OnUpdateParentChildConnector {
    onUpdateParentChildConnector {
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
export const onDeleteParentChildConnector = /* GraphQL */ `
  subscription OnDeleteParentChildConnector {
    onDeleteParentChildConnector {
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
export const onCreatePostMemberConnector = /* GraphQL */ `
  subscription OnCreatePostMemberConnector {
    onCreatePostMemberConnector {
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
export const onUpdatePostMemberConnector = /* GraphQL */ `
  subscription OnUpdatePostMemberConnector {
    onUpdatePostMemberConnector {
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
export const onDeletePostMemberConnector = /* GraphQL */ `
  subscription OnDeletePostMemberConnector {
    onDeletePostMemberConnector {
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
