exports.post = function(req) {
    var lineSource = req.body.events[0];
    var id = lineSource.source.userId;
    console.log('Event: '+lineSource.type);
    if(lineSource.type == 'follow'){
        console.log(lineSource);
        lineApi.pushMessage(id, 'Thank for Add Friend');
    }else if(lineSource.type == 'unfollow'){
    }else if(lineSource.type == 'message'){
        if(_.includes(lineSource.message.text, 'name') ||  _.includes(_.lowerCase(lineSource.message.text), 'what')){
            lineApi.pushMessage(id, "I'm Pikachu");
            console.log(lineSource);
            lineApi.replyMessage(lineSource.replyToken,{type:'text',text:'test'})
        }
    }else if(lineSource.type == 'postback'){
    }
    // res.sendStatus(200)
};