
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//iterating over names array//

for(var name in names) 
{
    var firstletter = names[name].charAt(0).toLowerCase();
    if(firstletter!='j')
    {
      helloSpeaker.speak(names[name])
    }
    else
    {
      byeSpeaker.speak(names[name])
    }
}

