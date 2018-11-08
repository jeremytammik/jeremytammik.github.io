@echo off
ff *.htm *.js *.css *.gif *.jpg >tar.lst
tar -cvf jet.tar <tar.lst
rem gzip jet.tar
