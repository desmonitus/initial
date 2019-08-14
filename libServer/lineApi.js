const lineBot = require('@line/bot-sdk');
const URL = 'https://api.line.me/v2/bot';
const token = properties.get('TOKEN');
const client_bot = new lineBot.Client({
    channelAccessToken: token
});
const request = require('request');
var LineApi = new Object();
LineApi.pushMessage = function(userId, msg){
    console.log(msg)
    client_bot.pushMessage(userId,{type:'text',text:msg});
}
LineApi.broadcastMessage = function(msg){
    let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {'+token+'}'
  }
  let body = JSON.stringify({
    messages: [{
      type: 'text',
      text: msg
    }]});
    request.post({
    url: URL+'/message/broadcast ',
    headers: headers,
    body: body
  }, (err, res, body) => {
  });
}
LineApi.broadcastMessageObject = function(obj){
    let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {'+token+'}'
  }
  let body = JSON.stringify( {messages: [obj]});
    request.post({
    url: URL+'/message/broadcast ',
    headers: headers,
    body: body
  }, (err, res, body) => {
        console.log(err);
  });
}
LineApi.replyMessage = function(replyToken, object){
     client_bot.replyMessage(replyToken,object);
}
module.exports = LineApi;