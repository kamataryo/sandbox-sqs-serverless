import * as Lambda from "aws-lambda";

export const handler = (
  event: Lambda.SQSEvent,
  _1: any,
  callback: Lambda.Callback
) => {
  console.log(JSON.stringify(event.Records));
  return callback(null, true);
};
