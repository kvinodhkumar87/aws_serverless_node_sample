"use strict";

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is a test app",
      input: event
    })
  };
};
