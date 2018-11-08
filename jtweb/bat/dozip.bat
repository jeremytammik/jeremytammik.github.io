@echo off
C:
cd C:\j8\doc\job\home

cd zip
rem ren *.zip *.bak
del jt???.zip
cd ..

ff *.htm *.js *.css *.gif *.jpg |zip -@ zip\jtall
ff *.htm *.js *.css |zip -@ zip\jthtm
ff -p img\009 *.gif *.jpg |zip -@ zip\jtimg
ff -p img\072 *.gif *.jpg |zip -@ zip\jtimg
ff -p img\144 *.gif *.jpg |zip -@ zip\jtimg
cd ..

zip home\zip\jteng bio02en.rtf
zip home\zip\jtdeu bio02.rtf
