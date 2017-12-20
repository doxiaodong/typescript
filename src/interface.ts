// Base

interface User1 {
  username: string
  avatar?: string
  lastLogin: number
}
const user1: User1 = {
  username: 'dd',
  avatar: 'https://avatars2.githubusercontent.com/u/6927481?s=40&v=4',
  lastLogin: Date.now(),
}

// Readonly
interface User2 {
  readonly username: string
}
const user2: User2 = {
  username: 'dd'
}
// user2.username = 'cc';

// Function
// 不推荐
interface GetUserInfoFunc1 {
  (username: string): User2
}
const getUserInfo1: GetUserInfoFunc1 = (username) => {
  return { username }
}

// 推荐
type GetUserInfoFunc2 = (username: string) => User2
const getUserInfo2: GetUserInfoFunc2 = (username) => {
  return { username }
}

// 推荐
function getUserInfo3(username: string): User2 {
  return { username }
}

// Implements
interface User3 {
  getUsername(): string
}

class User3 implements User3 {
  getUsername() {
    return 'dd'
  }
}

// Extends
interface User4 extends User3 {
  sex: 'male' | 'female'
}

const user4: User4 = {
  sex: 'male',
  getUsername() {
    return 'dd'
  }
}

// 补充
interface HtmlNode {
  [index: string]: any
  length: number
}
