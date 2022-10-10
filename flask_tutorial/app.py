from flask import Flask
from flask import jsonify
from flask import request, make_response , make_summary

app =Flask(__name__)


@app.route('/hello')
def hello():
    data= {
  "id": 0,
  "user_id": "user1234",
  "keywords": [
    "hammer",
    "nails",
    "tools"
  ],
  "description": "A hammer and nails set",
  "image": "https://placekitten.com/200/300",
  "lat": 51.2798438,
  "lon": 1.0830275,
  "date_from": "2022-10-09T00:08:00.273Z",
  "date_to": "2022-10-09T00:08:00.273Z"
}
        
    return jsonify (data)

@app.route('/items', methods = ['GET'])
def ReturnJSON():
    if(request.method == 'GET'):
        data= {"itemId": '1', "itemName": 'name', "description": 'some text'}  
       # return jsonify(data)
         data = make_summary()
    return make_response(jsonify(data), 200)
        


if __name__ == "__main__":
    app.run()