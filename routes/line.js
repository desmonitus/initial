const message = [];


exports.post = function(req) {
    var lineSource = req.body.events[0];
    var id = lineSource.source.userId;
    console.log('Event: '+lineSource.type);
    if(lineSource.type == 'follow'){
        console.log(lineSource);
        lineApi.pushMessage(id, 'Thank for Add Friend');
    }else if(lineSource.type == 'unfollow'){
    }else if(lineSource.type == 'message'){
        var command = lineSource.message.text.split(' ');
        if(_.includes(lineSource.message.text, 'name') ||  _.includes(_.lowerCase(lineSource.message.text), 'what')){
            lineApi.pushMessage(id, "I'm Pikachu");
        }else if(lineSource.message.text.substring(0,1)=='/'){
            if(_.upperCase(lineSource.message.text.substring(1,2))=='L'){
                if(!poontFunc.isEmpty(lineSource.message.text.substring(3))){
                    var msg = new Object();
                    msg.id = message.length;
                    msg.text = lineSource.message.text.substring(3);
                    message.push(msg);
                    lineApi.replyMessage(lineSource.replyToken,{type:'text',text:'complete'})
                }
            }else if(_.upperCase(lineSource.message.text.substring(1,2))=='S'){
                console.log(lineSource);
                var result = '';
                if(message.length!=0){
                    _.forEach(message , function(obj){
                        result += "id:"+obj.id+" = text:"+obj.text+'\n';
                    });
                }else{
                    result = 'No Data.'
                }
                console.log(result)
                lineApi.replyMessage(lineSource.replyToken,{type:'text',text:result.toString()})
            }else if(_.upperCase(lineSource.message.text.substring(1,2))=='D'){
                var id = lineSource.message.text.substring(3);
                if(!poontFunc.isEmpty(id)) {
                    _.pullAllBy(message, [{ 'id': _.toNumber(id) }], 'id');
                    lineApi.replyMessage(lineSource.replyToken,{type:'text',text:'complete'})
                }
            }else if(_.upperCase(lineSource.message.text.substring(1,2))=='H'){
                var result = '[Help]\n'+
                             '/l ตามด้วย message ที่ต้องการบันทึก เช่น /l สวัสดี\n' +
                             '/s เพื่อดู message ที่บันทึกทั้งหมด\n'+
                             '/d ตามด้วย id ของ message ที่ต้องการลบ เช่น /d 1';
                lineApi.replyMessage(lineSource.replyToken,{type:'text',text:result})
            }
        }
    }else if(lineSource.type == 'postback'){
    }
    // res.sendStatus(200)
};