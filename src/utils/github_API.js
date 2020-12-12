const BASE_URL = 'https://api.github.com/users';


export function getRepos(repo) {
    return fetch(`${BASE_URL}/${repo}/repos`, {
        method: 'GET',
        headers: {}
    })
        .then(res => res.json())
}
