const express = require('express');
const cors = require('cors');
const request = require('request');
const { response } = require('express');
const app = express();


app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

//user trial
request
  .get('http://google.com/img.png')
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(request.put('http://mysite.com/img.png'))

  const res=request.post({url:'http://api.sawolabs.com/api/v1/userverify/', date: {'user_id': ['user_id']}}, function(err,httpResponse,body){ 
    if (res.status_code == 200){
        response_data = res.json()
        if (response_data['verification_token']==payload_sent_from_sdk['verification_token']){
                 console.log("request access")
        }
    }
   })
  



app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));