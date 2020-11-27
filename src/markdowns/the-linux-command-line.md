---
title: "The Linux Command Line"
category: "Linux"
type: "TextBook"
---

# The Linux Command Line

## 1 - What Is the Shell?

`[nm ~]#` - indication of superuser privileges

`date` - time and date

`cal` - calendar

`df` - free space on disk drives

`free` - amount of free memory

`[ exit | Ctrl-d ]` - end session

## 2 - Navigation

`pwd` - print current working directory

`cd` - change directory

`ls` - list directory contents

### hierarchical directory structure

tree-like of directories (folders)

### root directory

the first directory inthe file system

### Change the Working Directory

Absolute Pathnames - starts from the root directory

Relative pathnames - starts from the working directory

`cd` - to home driectory

`cd -` - to previous directory

`cd ~username` - to home directory of the user

`./` - can be omitted

### Important Facts About Filenames

1. can be hidden
2. are case sensitive
3. extensions can be omitted
4. avoid using spaces

## 3 - Exploring the System

`ls` - list directory contents

`file` - determine file type

`less` - view file contents

`ls Downloads/ Git/ React/`

### A Longer Look at Long Format

`-rw-r--r--` - access rights to the file

```md
- rw- r-- r-- 0 123 456 789

// 0: file (-) || directory (d) // 123: owner access rights // 456: members of the file group // 789: everyone else
```

`1` - number of hard links

`zhirenjin` - usename of file's ownder

`staff` - name of the group that owns the file

### What is "Text"

numbers represent information

`reset` - initialize terminal

### Symbolic Links

easier version update

## 4 - Manipulating Files and Directories

`cp` - copy files and directories

`mv` - move/rename files and directories

`mkdir` - create directories

`rm` - remove files and directories

`ln` - create hard and symbolic links 




