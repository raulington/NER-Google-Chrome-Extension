# NER-Google-Chrome-Extension

This is a google chrome extension I made that employs named entity recognition using the StanfordNLP software.

To try this you will need Stanford NER files downloaded through [here](https://nlp.stanford.edu/software/CRF-NER.html) and NLTK will need to be installed.

Some variables are defined using filepaths that refer to the location of Stanford NER files in my system as well as the location of the java.exe in my system, so those variables will need to be changed based on the users location of those files.

To test this out, upload the extension to chrome://extensions/

To run the server, run the following commands
```
cd drf_notes_api

python manage.py runserver
```

Here is a basic overview of how the extension works:

![image](https://user-images.githubusercontent.com/68880159/211222517-d072aa5f-ea84-438b-be92-56764f54fe4f.png)
