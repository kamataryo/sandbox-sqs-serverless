import * as Lambda from "aws-lambda";
import AWS from "aws-sdk";

const sqs = new AWS.SQS();
const { QUEUE_NAME, AWS_REGION } = process.env as {
  QUEUE_NAME: string;
  AWS_REGION: string;
};

export const handler = async (
  _0: any,
  context: Lambda.Context,
  callback: Lambda.Callback
) => {
  const ACCOUNT_ID = context.invokedFunctionArn.split(":")[4];
  const QUEUE_URL = `https://sqs.${AWS_REGION}.amazonaws.com/${ACCOUNT_ID}/${QUEUE_NAME}`;

  const message = await sqs
    .sendMessage({ MessageBody: "hoge", QueueUrl: QUEUE_URL })
    .promise();

  return callback(null, message.MessageId);
};
