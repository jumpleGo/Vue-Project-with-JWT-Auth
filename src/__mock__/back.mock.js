export function mockBackend() {
    let users = [
    { id: 1, email: 'test@mail.ru', password: 'test', permissions:{showAllUsers: false}}, 
    { id: 2, email: 'admin@mail.ru', password: 'admin',  permissions:{showAllUsers: true}}
    ];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.endsWith('/backend-api/auth') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);

                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            email: user.email,
                            permissions: user.permissions,
                            token: 'some-generated-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/backend-api/users') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer some-generated-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        reject('Unauthorised');
                    }

                    return ;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}