function echo(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error('was rejected'));
            }
        }, 200);
    });
}

module.exports = {
    echo
}