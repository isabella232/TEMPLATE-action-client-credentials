const { makeEventMock } = require("../__mocks__/event-client-credentials");
const { apiMock } = require("../__mocks__/api-client-credentials");

const { onExecuteCredentialsExchange } = require("./integration.action");

describe("Action integration", () => {
  let consoleLogMock;
  let eventMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log").mockImplementation();
    eventMock = makeEventMock();
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
    jest.clearAllMocks();
  });

  describe("onExecutePostLogin", () => {
    it("executes", async () => {
      expect(async () => {
        await onExecuteCredentialsExchange(eventMock, apiMock);
      }).not.toThrow();
    });
  });
});
