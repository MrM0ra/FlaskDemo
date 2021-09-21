from flask import Flask, request, redirect, url_for, render_template, jsonify
from flask_cors import CORS

#Init app
app = Flask(__name__)
CORS(app)
#App's secret key
app.secret_key = "thisissupposedtobesecret"
n=7
tasks = [
	{'id':'1','name': 'do homework', 'completed': False},
	{'id':'2','name': 'shower', 'completed': True},
	{'id':'3','name': 'eat lunch', 'completed': False},
	{'id':'4','name': 'kill the radio star', 'completed': True},
	{'id':'5','name': 'finish expo', 'completed': False},
	{'id':'6','name': 'what video did', 'completed': True}
]

@app.route('/')
def index():
    return jsonify(
		{'Tasks addition':'/task', 'method':'POST', 'body/JSON':'name -> string,completed -> boolean'},
		{'Tasks deletion':'/task/id', 'method':'DELETE'},
		{'Tasks search':'/task/id', 'method':'GET'},
		{'Get all tasks':'/task', 'method':'GET'}
		)

@app.route('/task', methods=['POST'])
def addTask():
	global n
	taskName=request.json['taskName']
	taskComp=request.json['completed']
	a = {}
	a['name'] = taskName
	a['completed'] = taskComp
	a['id'] = n
	n+=1
	tasks.append(a)
	return jsonify({taskName:'added'})

@app.route('/task/<id>', methods=['DELETE'])
def delTask(id):
	flag=False
	for i in tasks:
		if (i['id'] == id):
			flag=True
			tasks.remove(i)
	if(flag):
		return jsonify({id:'deleted'})
	else:
		return jsonify({id:'not found'})

@app.route('/task', methods=['GET'])
def getTask():
	return jsonify(tasks)

@app.route('/task/<id>', methods=['GET'])
def getTaskByName(id):
	for i in tasks:
		if (i['id'] == id):
			flag=True
			return jsonify(i)
	
	return jsonify({id:'not found'})

#Run server
if __name__=="__main__":
	#Run app
	app.run(debug=True)