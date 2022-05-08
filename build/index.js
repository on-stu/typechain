import { exit, init } from "myPackage";
class Block {
    constructor(data) {
        this.data = data;
    }
    static hello() {
        return "hi";
    }
}
init({ urls: "hello" });
exit(1);
