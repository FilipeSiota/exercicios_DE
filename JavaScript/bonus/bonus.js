async function a() {
    b();
    await c();
    await d();
    alertUser('a');
}
a();

function b() {
    return;
    alertUser('b');
}

function c() {
    return new Promise((resolve) => {
        resolve();
        alertUser('c');
    });
}

function d() {
    return new Promise((resolve) => {
        alertUser('d');
    });
}

function alertUser(message) {
    console.log("A função é: " + message);
}