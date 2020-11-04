from flask import Flask
import sys
import pathlib
import transpyle
from transpyle.general.code_reader import CodeReader
from flask import Flask, request, jsonify
from datetime import datetime
import os

app = Flask(__name__)

# Test endpoint
@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/transpile", methods=['POST'])
def transpile():
    print("request: " + request)
    file_name = request.json['data']

    path = file_name.rsplit("\\", 1)[0]
    name = file_name.rsplit("\\", 1)[1][:-3]
    file = os.path.join(path, name + ".cpp")

    path = pathlib.Path(file_name)
    code_reader = CodeReader()
    code = code_reader.read_file(path)

    print(code)

    # This code was copied from the example in the transpyle library documentation
    from_language = transpyle.general.Language.find('Python 3.6')
    to_language = transpyle.general.Language.find('C++14')
    translator = transpyle.AutoTranslator(from_language, to_language)
    cpp_code = translator.translate(code, path)

    print(cpp_code)

    f = open(file, "w+")
    f.write(cpp_code)
    f.close()

    return jsonify(cpp_code)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)
