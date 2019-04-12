import { helloResolver } from "./hello";

describe("Hello", () => {
    it("Returns correctly", async () => {
        const actual = await helloResolver.hello(undefined, { name: "World" }, undefined, undefined);
        expect(actual).toBe("Hello World!");
    });
});