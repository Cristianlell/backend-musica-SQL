const { IncomingWebhook } = require('@slack/webhook');
const url = process.env.SLACK_WEBHOOK
const webHook = new IncomingWebhook(url);

const loggerStream = {
     write: message => {
          webHook.send({
               text: message
          });
     }
}

module.exports = loggerStream


