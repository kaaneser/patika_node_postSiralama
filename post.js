const args = process.argv.slice(2);
const posts = [
    {desc: 'Desc 1', author: 'postAuthor 1'},
    {desc: 'Desc 2', author: 'postAuthor 2'},
]

const listPost = () => {
    posts.map((post) => {
        console.log('Post:' + post.desc + '\tAuthor: ' + post.author);
    });
};

const addPost = (post) => {
    const promise = new Promise((res, rej) => {
        posts.push(post);
        res(posts);
    });

    return promise;
};

async function showAllPosts() {
    try {
        await addPost({desc: args[0], author: args[1]});
        listPost();
    } catch (err) {
        console.log('Hata!: ' + err);
    }
}

showAllPosts();
