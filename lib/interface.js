// Base
const user1 = {
    username: 'dd',
    avatar: 'https://avatars2.githubusercontent.com/u/6927481?s=40&v=4',
    lastLogin: Date.now(),
};
const user2 = {
    username: 'dd'
};
const getUserInfo1 = (username) => {
    return { username };
};
const getUserInfo2 = (username) => {
    return { username };
};
// 推荐
function getUserInfo3(username) {
    return { username };
}
class User3 {
    getUsername() {
        return 'dd';
    }
}
const user4 = {
    sex: 'male',
    getUsername() {
        return 'dd';
    }
};
