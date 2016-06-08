---
title: Moving files to trash from the Mac command line
tags:
- Computing
---
Ever wished you could move files to the trash from the command line on the Mac? Here's how.

First, buy a Mac. Then

Option 1 (uses bash): add the following to your <code>~/.bash_profile</code>:

```bash
function rem {
  for b in "$@"
  do
    osascript -e "tell app \"Finder\" to delete POSIX file \"${PWD}/$b\""
  done
}
```

Then type <code>source ~/.bash_profile</code> in Terminal.

Or Option 2 (uses Python and gives slightly more meaningful error messages): make an executable file called <code>rem</code> somewhere in your <code>$PATH</code>:

```python
#!/usr/bin/env python
import os
import sys
if len(sys.argv) > 1:
    for arg in sys.argv[1:]:
        if os.path.exists(arg):
            os.system('osascript -e \'tell app "Finder" '
                      + 'to move the POSIX file "'
                      + os.path.abspath(arg) + '" to trash\'')
        else:
            print "Error:", os.path.abspath(arg), "does not exist"
else:
    print "usage: rem file(s)"
    print "       move file(s) to Trash"
```

Now, either way, to move <code>blah.txt</code> to Trash, simply type <code>rem blah.txt</code>. Wildcards and lists of files are permitted. You even get the sound effects!

(This makes use of Applescript and works for me on OS X Tiger and Leopard. Thanks to kw for pointing out the problem with Option 1 and leading me to think of an alternative - 3 July 2008. And thanks for icke for showing me how to make the bash version work all the time - 6 Nov 2008.)
