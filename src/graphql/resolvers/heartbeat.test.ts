import { heartbeatResolver } from "./heartbeat";

describe("Heartbeat", () => {
    it("Returns correctly", async () => {
        const actual = await heartbeatResolver.heartbeat(undefined, undefined, undefined, undefined);
        expect(actual).toBeTruthy();
    });
});