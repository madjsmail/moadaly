#/usr/bin/sh
# Build pyArabic package

default: all
# Clean build files
clean:
	
backup: 
	
#create all files 
all: 

# Publish to github
publish:
	git push origin master 

server:
	python3 -m http.server 8000
validate:
	# validate json files
	python tools/validate_json.py

build_data:
	# generate static js data from available json files
	python tools/convert_json.py


