# TaskCluster Tools

This repository contains a collection of useful tools for use with TaskCluster.
Generally, we strive to not add UI to TaskCluster components, but instead offer
well documented APIs that can be easily consumed using a client library for
TaskCluster. See [TaskCluster documentation site](https://docs.taskcluster.net)
for details.

# Developing TaskCluster Tools

## Prerequisites for building TaskCluster Tools

- Node.js v6+

## Getting started

```
git clone https://github.com/taskcluster/taskcluster-tools.git
cd taskcluster-tools
npm install
```

## Code Organization

  - lib/    (code intended for reuse)
  - <app>/  (application specific-code, can be reused)
  - `*.jsx` (file containing JSX)
  - `*.js`  (file with pure Javascript, no JSX syntax or header)

## Grunt Tasks and Configuration

Our grunt file offers compilation of:

 - Javascript/JSX (react.js) files to browserified bundles
 - less files to CSS
 - jade files to HTML

## Testing changes

Install the dependencies needed for grunt and start it up:
* npm install
* grunt develop or (./node_modules/.bin/grunt develop)

```
Note: "grunt develop --force" allows grunt not to bail out when you save a syntax error or something similarly harmless.
```

Grunt allows you to test and see your changes.
The grunt default task builds, watches sources and serves them from
`http://localhost:9000`.


## Available targets

  - `grunt`, the default target build, watches sources and serves the `build/`
    folder on `http://localhost:9000/`.
  - `grunt build`, builds sources into the `build/` folder.
  - `grunt clean`, delete generated files (ie. deletes the `build/` folder).
  - `grunt develop`, it serves on localhost and watches sources


## Configuration with Sublime 2

Install [sublime-react](https://github.com/reactjs/sublime-react), open one of
`.jsx` files the do:

`View` > `Syntax` > `Open all with current extension as...` > `JavaScript (JSX)`


## Testing

Until someone comes up with something better, which probably involves redux or similar,
all testing is manual. Open the tools and check that they work.


## Ngrok Setup (optional)
<!-- TODO: See if we can expose this through an npm script -->

Ngrok allows you to expose a web server running on your local machine to the internet.
Ngrok is used creating a https connection, so that you can login to the taskcluster-tools.
For using ngrok:
  - Create an account (free) on [ngrok](https://ngrok.com/).
  - Install ngrok - npm install ngrok
  - Run ngrok - ngrok http 9000

```
Note: You have to run ngrok in a separate terminal/console.
```
