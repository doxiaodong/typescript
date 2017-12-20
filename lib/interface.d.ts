interface User1 {
    username: string;
    avatar?: string;
    lastLogin: number;
}
declare const user1: User1;
interface User2 {
    readonly username: string;
}
declare const user2: User2;
interface GetUserInfoFunc1 {
    (username: string): User2;
}
declare const getUserInfo1: GetUserInfoFunc1;
declare type GetUserInfoFunc2 = (username: string) => User2;
declare const getUserInfo2: GetUserInfoFunc2;
declare function getUserInfo3(username: string): User2;
interface User3 {
    getUsername(): string;
}
declare class User3 implements User3 {
}
interface User4 extends User3 {
    sex: 'male' | 'female';
}
declare const user4: User4;
