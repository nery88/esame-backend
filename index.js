var count=0;
var social = [

  {
    token:count++,
    name:'anto',
    surname:'maggiore',
    friend:[],
    requestE:[],
    requestR:[2],
    post:[{idp:2, message:"ciao"}]
  },
  {
    token:count++,
    name:'luca',
    surname:'corso',
    requestE:[],
    requestR:[1],
    post:[{idp:1,message:"<3"}]
  }
]

exports.allsocial = function() {
  return social;
}
//console.log (allsocial());






exports.registration = function (newmember){
  newmember.token=count++;
  newmember.friend=[];
  newmember.requestE=[];
  newmember.requestR=[];
  newmember.post=[{idp:2,message:":)"}]
  social.push(newmember);


  return social;
}

//console.log(registration({name:"cicco",surname:"palla"}));

exports.addpost= function (newid,newpost) {
  for (var i = 0; i < social.length; i++) {
    if(social[i].token===newid){
      newpost.idpost++;
      social[i].post.push({post:newpost})

    }

  }
  return social;
}
//console.log("addpost",addpost(2,{message:":P"}));
