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

Or Option 2 (uses Python and gives slightly more meaningful error messages): make an executable file called <code>rem</code> or <code>trash</code> somewhere in your <code>$PATH</code> (updated version 1 Oct 2018, in collaboration with Dave Abrahams: see [here](https://gist.github.com/dabrahams/14fedc316441c350b382528ea64bc09c)):

```python
#!/usr/bin/env python
import os
import sys
import subprocess

if len(sys.argv) > 1:
    files = []
    for arg in sys.argv[1:]:
        if os.path.exists(arg):
            p = os.path.abspath(arg).replace('\\', '\\\\').replace('"', '\\"')
            files.append('the POSIX file "' + p + '"')
        else:
            sys.stderr.write(
                "%s: %s: No such file or directory\n" % (sys.argv[0], arg))
    if len(files) > 0:
        cmd = ['osascript', '-e',
               'tell app "Finder" to move {' + ', '.join(files) + '} to trash']
        r = subprocess.call(cmd, stdout=open(os.devnull, 'w'))
        sys.exit(r if len(files) == len(sys.argv[1:]) else 1)
else:
    sys.stderr.write(
        'usage: %s file(s)\n'
        '       move file(s) to Trash\n' % os.path.basename(sys.argv[0]))
    sys.exit(64) # matches what rm does on my system
```

Now, either way, to move <code>blah.txt</code> to Trash, simply type <code>rem blah.txt</code>. Wildcards and lists of files are permitted. You even get the sound effects!

(This makes use of Applescript and works for me on OS X Tiger and Leopard. Thanks to kw for pointing out the problem with Option 1 and leading me to think of an alternative - 3 July 2008. And thanks for icke for showing me how to make the bash version work all the time - 6 Nov 2008.)
