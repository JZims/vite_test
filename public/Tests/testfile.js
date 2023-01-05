
function createUser(user) {
    console.log(user.email);
    return user.name;
}
createUser({ name: "", email: "", isActive: true });
