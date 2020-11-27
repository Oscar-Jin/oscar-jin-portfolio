---
title: "Learn Enough Command Line to Be Dangerous"
category: "CLI"
type: "Textbook"
---

# Learn Enough Command Line to Be Dangerous

*This paper is not intended for publication purposes. It remains public for the use of private reference and desired demonstration of one’s knowledge. It will not be suited for the purpose of any research nor for the reference of any kind. It is recommend to assimilate the original material instead. Links are provided below.*

[Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)

## Abou the author

### Michael Hartl

Physics Ph.D. at Caltech

Graduate of Harvard

## Chapter 1 Basics

### Magic

programming + command line + text editor + version control = Wizard

> Command line sophistication is a must

## 1.1 Introduction

### CLI (command line interface)

most powerful way to interact with a computer

### UNIX

family of OS - Linux, Android, iOS, macOS

serve most of the World Wide Web

## 1.2 Running a terminal

[Using Z Shell on Macs with the Learn Enough Tutorials](https://www.learnenough.com/command-line-tutorial/basics)

### Elements of a command

prompt | command | option | argument

### Prompt

- ends with `%` or `$`

- customizable

### 1.2.1 Exercises

- do it

- try later if got stuck

## 1.3 Our first command

`echo goodbye`

`echo 'goodbye'`

`echo "goodbye"`

quotes are not required by `echo`

`Ctrl-C` - get out of trouble

`yes` - provide answer "y"

`tail` - display last part of file

## 1.4 Man pages

shell - program to run command

`man` - display manual

`q` - exit page

SYNOPSIS - brief summary

### Technical sophistication

- develop with exposure

## 1.5 Editing the line

### Command History

`↑` - retrieve previous command

`↓` - goes back

### Moving around

`^A` - move ahead

`^E` - move end

`^U` - clear input

`⌥ Click` - move cursor

## 1.6 Cleaning up

`clear | ^L`

`exit | ^D`

## Chapter 2 Manipulating files

[Jargon File](http://www.catb.org/jargon/html/)

## 2.1 Redirecting and appending

`echo "Oscar is the best" > about.txt`

`cat about.txt`

`echo "He is the coolest" >> about.txt`

`diff about.txt readme.md`

## 2.2 Listing

`ls`

`ls about.txt`

`touch` - change modification time but used on

`ls *.json`

`*` - one of the wildcard character

`-l` - long format

`-a` - show all

`tr` - time reversed

### Foo, bar baz

Metasyntatic variable

## 2.3 Renaming, copying, deleting

`mv about.txt aboutMe.txt`

`cp aboutMe.txt about.txt`

`rm aboutMe.txt`

### Tab completion

`tab`

## 2.4 Summary

`>` - redirect output to filename

`>>` - append output to filename

`cat <file>` - print contenst of file

`diff <f1> <f2>` - diff files 1 and 2

`ls` - list directory or file

`ls -l` - list long form

`ls -rtl` - long by reverse modification time

`ls -a` - list all (including hidden)

`touch <file>` - create an empty file

`mv <old> <new>` - rename from old to new

`cp <old> <new>` - copy old to new

`rm <file>` - remove (delete) file

`rm -f <file>` - force-remove file

## 3 Inspecting files

### files

- create ✓
- manipulate ✓
- examine ←

## Downloading a file

`curl` - not core to UNIX but widely available

`which` - locate program file

### Repeat previous commands

`!!` - run previous command

`!ls` - run previous command start with

`Ctrl-R` - interactive search

## 3.2 Making head and tails of it

`head` - show firtst 10 lines

`tail` - show last 10 lines

`wc` - line, character, byte count

`head sonnets.txt > sonnets_head.txt; wc sonnets_head.txt` - redirection

`head sonnets.txt | wc` - piping 

`|` - pipe symbol

## 3.3 Less is more

`/` - search
`n` - next match
`N` - previous match

`G` - move to end
`1G` - move to beginning
`99G` - move to line 99


## 3.4 Greping 

`grep` - search for substring

`grep rose sonnets.txt | wc` => 10 lines

`grep -i rose sonnets.txt | wc` => 12 lines

### Grepping process

`ps` - process status

`ps aux | grep Dictionary` - grep pid

`kill 8690` - terminate process

`pkill Dictionary`

## 4 Directories 

## 4.1 Structure

`/` - foward slash, to seperate directory names

`~` - home directory

*the home key used to be the same key for '~''*

`root` - spueruser, avoid in regular usage

`sudo` - grant superuser privilege

### "sudo" make me a sandwich

`sudo !!`

`!ls`

## 4.2 Making directories

`mkdir` - make directory

`mkdir -p` - make intermediate directory as well

## 4.3 Navigating directories

`cd ..` - change directory one level up

`cd` and `cd ~` are equivalent

`find` - fild files 

`find . -name '*.txt'` 

`open` - mac, open with default app

`cd -` - previous directory

### Combining commands 

`;` - sequential run

`&&` - run only after success

## 4.4 Renaming, copying, and deleting directories

`mv foo/ bar/`

`cp ../foo .` 

### Grep redux

`grep -ri oscar folerName/`


## 5 Conclusion

proceed, with confidence


[1.  Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line) COMPLETE

[2. Learn Enough Text Editor to Be Dangerous](https://www.learnenough.com/text-editor)

[3. Learn Enough Git to Be Dangerous](https://www.learnenough.com/git)











