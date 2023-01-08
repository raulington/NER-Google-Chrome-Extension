# NER-Google-Chrome-Extension

This is a google chrome extension I made that employs named entity recognition using the StanfordNLP software.

The Jupyter notebook gives a simple example of how named entity recognition is employed with the NLTK software and the StanfordNLP software.

To try this you will need Stanford NER files downloaded through [here](https://nlp.stanford.edu/software/CRF-NER.html) and NLTK will need to be installed.

Some variables are defined using filepaths that refer to the location of Stanford NER files in my system as well as the location of the java.exe in my system, so those variables will need to be changed based on the users location of those files.

To test this out, go to chrome://extensions/ and turn on developer mode. From there you can upload the chrome extension by clicking on "Load unpacked"

To run the server, run the following commands
```
cd drf_notes_api

python manage.py runserver
```

Here is a basic overview of how the extension works:

![image](https://user-images.githubusercontent.com/68880159/211222517-d072aa5f-ea84-438b-be92-56764f54fe4f.png)


## DISCLAIMER:
This chrome extension is not made to be published for commercial use. The REST API is not validating for cross-site-request forgery attacks. It is also trusting all external domains. This is because in settings.py, it has the following flag set to true.
```
CORS_ORIGIN_ALLOW_ALL = True
```

