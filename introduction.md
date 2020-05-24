# Deno

## What is Deno

* A javascript and typescript runtime based on the V8 engine javascript engine and Rust programming language.
* Created by Ryan Dahl, creator of Node.js.

## Deno Features

* Use TypeScript or Javascript
* Secure by defulat (security flags)
* De-centralized packaging (biggest complain of NodeJs)
  * No more NPM packages/package.json
  * Packages are imported from URL : import { Application } from 'http://deno.land/x/oak/mod.ts'
  * Cached to harddrive on load
* Standard Libraries
  * Extensive standard library for things like fs, datetime, http, etc.
  * eg: import { serve } from 'http://deno.land/x/std/http/server.ts'
* Modern JS
* ES modules
  * Import syntax over the common js require syntax that nodejs uses
* Top level First Class Await
  * Normally, with async await you have to wrap your await inside an asyncronous function and have to label it as async but with deno you can use await in the global scope without haing to wrap it in as an async function.
* Build-in Testing
* Browser compatibility API
* Execute Wasam Binaries: web assembly binaries

## Installation

* Using HomeBrew macOS
  * $ brew install deno

* install VSCode deno extention from justjavac


## References

* (Deno Doco)[https://deno.land/]
* (10 Things I Regret About Node.js - Ryan Dahl)[https://www.youtube.com/watch?v=M3BM9TB-8yA]
* (Deno Crash course)[https://www.youtube.com/watch?v=NHHhiqwcfRM]