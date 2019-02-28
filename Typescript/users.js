var usrs = [
    {
        id: 1,
        name: 'Xyz'
    }, {
        id: 2,
        name: 'Abc',
        address: 'asasyaus'
    }
];
var users;
users = [
    {
        id: 1,
        name: 'Bob',
        email: 'bob@bob.bob'
    },
    {
        id: 2,
        name: 'John',
        email: 'john@john.john'
    },
    {
        id: 3,
        name: 'Roger',
        email: 'roger@roger.roger'
    }
];
// fetch user name for a specific user
var getUserName = function (u) {
    return u.name;
};
// fetch all
var getAllUsers = function () {
    return users;
};
// fetch user by email
var getUsersByEmail = function (email) {
    return users.filter(function (u) { return u.email; });
};
// get user ids
var getUserIds = function (users) {
    return users.map(function (u) { return u.id; });
};
// create user object
var u = { id: 1, name: 'Test', email: 'test@tt.tt' };
var uName = getUserName(u);
console.log(uName);
// get usr ids
var ids = getUserIds(users);
console.log(ids);
// iterate of the array of users ids
console.log('##### Iterate on User Ids #####');
ids.forEach(function (i) {
    console.log("Id => " + i);
});
