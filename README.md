# JSCN-CLI
A CLI interface for supporting the [JavaScript Coding Nights](www.meetup.com/JS-Coding-Nights-Munich/) Meetup group.

## To run:
```
npm run jscn -- --help
npm run jscn -- list-meetups

# --or--

./node_modules/.bin/babel-node -- index.js --help
./node_modules/.bin/babel-node -- index.js list-meetups
```

## Feature Ideas (Please invent your own too!):

- Show a list of projects, including one that's being featured
- Upon project selection, clone the relevant project source repository into a new folder at your cwd.  If the meetup topic involves external resources rather than cloning a repo, display those resources in the browser
- Desktop notifications with node-notifier for attendee communication during the event such as...
- LFG ("Looking for Group"): auto-group creation and/or notification
- Share your work with others via automatic pull requests via `jscn submit` (will probably require first doing something like `jscn init` to enter your github api auth token)
- Submit feedback or topic/project proposals for future meetups, including the ability to tell me that my project ideas are awful.
