export const timeSchema = {
  type: "object",
    properties: {
      epoch: {
        description: "The current server time, in epoch seconds, at the time of processing the request.",
        type: "number"
      }
    },
    required: ["epoch"],
  }