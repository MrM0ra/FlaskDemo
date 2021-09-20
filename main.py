from flask import Flask, request, redirect, url_for, render_template, jsonify

#Init app
app = Flask(__name__)

#App's secret key
app.secret_key = "thisissupposedtobesecret"

tasks = [
	{'name': 'do homework', 'completed': False},
	{'name': 'shower', 'completed': True},
	{'name': 'eat', 'completed': False},
	{'name': 'kill the radio star', 'completed': True},
	{'name': 'what video did', 'completed': True}
]

@app.route('/')
def index():
    return '<h1>Hello World</h1>'

@app.route('/task', methods=['POST'])
def addTask():
	taskName=request.json['taskName']
	taskComp=request.json['completed']
	a = {}
	a['name'] = taskName
	a['completed'] = taskComp
	tasks.append(a)
	return jsonify({taskName:'added'})

@app.route('/task', methods=['DELETE'])
def delTask():
	taskName=request.json['taskName']
	flag=False
	for i in tasks:
		if (i['name'] == taskName):
			flag=True
			tasks.remove(i)
	if(flag):
		return jsonify({taskName:'deleted'})
	else:
		return jsonify({taskName:'not found'})

#Run server
if __name__=="__main__":
	#Run app
	app.run(debug=True)