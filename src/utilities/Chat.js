export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect: function connect() {
      console.log("✅ Connecting...");
    },
    disconnect: function disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}
