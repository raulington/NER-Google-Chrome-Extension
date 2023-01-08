from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import nltk
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker')
nltk.download('words')
from nltk.tag import StanfordNERTagger
from nltk.tokenize import word_tokenize
import os
java_path = "C:/Program Files/Java/jdk-13.0.2/bin/java.exe"
os.environ['JAVAHOME'] = java_path
model = 'C:/Users/rauld/Documents/VsCode/Research-Extension/ext/stanford-ner-2020-11-17/classifiers/english.all.3class.distsim.crf.ser.gz'
jar = 'C:/Users/rauld/Documents/VsCode/Research-Extension/ext/stanford-ner-2020-11-17/stanford-ner.jar'

st = StanfordNERTagger(model, jar,encoding='utf-8')
#1/7/2023 Disable csrf validation in sandbox
@csrf_exempt
def getRoutes(request):
	# request = document.body.innerHTML
	print('got request from extension')
	for key, value in request.POST.items():
		print ("%s %s" % (key, value))

	#changed from GET to POST because we were exceeding URI limit with GET

	print('request method '+request.method)
	body_unicode = request.body.decode('utf-8')
	jsonRequestPayloadObject=json.loads(body_unicode)
	text=jsonRequestPayloadObject["textPayload"]
	#print('got msg text '+text)
	print("got message from NER Chrome Extension")
	tokenized_text = nltk.word_tokenize(text)
	classified_text = st.tag(tokenized_text)
	entities = []


	from itertools import groupby
	for tag, chunk in groupby(classified_text, lambda x:x[1]):
		if tag != "O":
			entities.append(' '.join(w for w, t in chunk))
	print('hello')
	print(entities)

	return JsonResponse(entities, safe=False)