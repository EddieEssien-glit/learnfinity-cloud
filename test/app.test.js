const test = require("node:test");
const assert = require("node:assert");
test("app loads", () => assert.ok(require("../index.js")));