from flask import Flask, jsonify,request

app = Flask(__name__)

items = {"Henry": "1", "Mark":"2"}

#@app.route("/")
#def hello_world():
#    return "<p>Hello, World!</p>"



@app.route('/', method=['GET'])
def ReturnJSON():
    if (request.method =='GET'):
        
       # return items
        #return jsonify(items)
        return jsonify({'items' : items})

@app.route('/', methods=['POST'])
def addOne():
    if (request.method= ['POST'])
        new_item == request.get_json()
        items.append(new_item)
        return jsonify({'items' : items})