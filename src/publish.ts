import * as Lambda from "aws-lambda";
import AWS from "aws-sdk";

const { QUEUE_NAME, AWS_REGION } = process.env as {
  QUEUE_NAME: string;
  AWS_REGION: string;
};

export const handler = async (
  event: Lambda.APIGatewayEvent,
  _1: any,
  callback: Lambda.Callback
) => {
  const QUEUE_URL = `https://sqs.${AWS_REGION}.amazonaws.com/${event.requestContext.accountId}/${QUEUE_NAME}`;
  const sqs = new AWS.SQS();

  const message = await sqs
    .sendMessage({ MessageBody: "hoge", QueueUrl: QUEUE_URL })
    .promise();

  return callback(null, message.MessageId);
};
