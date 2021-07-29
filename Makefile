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

md2html:
	pandoc -s -r markdown -w html README.md -o README.html
md2rst:
	pandoc -s -r markdown -w rst README.md -o docs/README.rst
