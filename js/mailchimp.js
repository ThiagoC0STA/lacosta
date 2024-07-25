const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);

  const response = await fetch(
    "https://us14.api.mailchimp.com/3.0/lists/a4b491374c/members/",
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            "anystring:02a7f826f65ba10e0f476c58f31b9ee3-us14"
          ).toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const responseData = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(responseData),
  };
};
