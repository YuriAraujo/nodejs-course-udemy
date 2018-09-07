let getUser = (id, callback) => {
    let user = {
        id: 2,
        name: 'Yuri'
    };
    setTimeout(() => callback(user), 3000);
};

getUser(2, (user) => console.log(user));