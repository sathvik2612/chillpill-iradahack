question('what is this', p =>  {
  p.play('This is a virtual health assistant by 404 finders. (Powered by chillpill|Voice support is provided by chillpill)');
});

question('what is Alan (AI|Platform|)', p => {
  p.play('Alan (AI|Platform) is a platform that will allow you to voice enable any application. Be it mobile app on iOS or Android, or a web page.');
});

intent('Go back', p => {
  p.play({"command": "navigate", "screen": "back"});
  p.play('Going back');
});

intent('what is your speciality', p => {
  p.play('My speciality is i can book appointments offline.');
  p.play('There are many websites for online consultation but no offline booking. this is how i am different from');
  
  });
intent('alexa', p => {
  p.play('alexa is a voice assistant developed by amazon.');
  
  
  });
intent('what are general timings for appointment', p => {
  p.play('timings vary from day to day and doctot to doctor sir, i request you to check in ');
  
  
  });
intent('which cities you are currently in', p => {
  p.play('Presently we are only in hyderabad');
  
  
  });
intent('login', p => {
  p.play({command:"login"});
  
  
  });
intent('appointment', p => {
  p.play('taking you to appointments page.choose one of our services.');
  p.play({command:"appointment"});
  
  
  });

intent('fill login detils', p => {
  p.play('Sorry, sir. I am not allowed do that, as it breaks privacy.');
  
  
  });
intent('eye specialists', p => {
  p.play('I am showing you the top most eye-specialists in the city.');
  
  p.play({command:"eye specialists"});
  });
intent('emergency',p=>{
  p.play('Sending mails, our team will shortly contact nearest hospital.');
  p.play({command:"mails"});
});
intent('show location of jamie', p => {
  p.play('Showing location of jamie williams');
  p.play({command:"jamie"});
  
  
  });
intent('show location of steve', p => {
  p.play('Showing location of steve harvey');
  p.play({command:"steve"});
  
  
  });
intent('pay for offline appointment', p => {
  p.play('paying to book your offline appointment');
  p.play({command:"payoffline"});
  
  
  });
intent('pay for (video consultation| online appointment)', p => {
  p.play('paying to book your online appointment');
  p.play({command:"payonline"});
  
  
  });