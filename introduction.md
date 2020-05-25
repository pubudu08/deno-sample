# Deno

## What is Deno

- A javascript and typescript runtime based on the V8 engine javascript engine and Rust programming language.
- Created by Ryan Dahl, creator of Node.js and Bert Bedler (a Node.js core contributor and co-founder of Strong Loop)

## But why? Isn't it exactly what Node does?

JS( both language itself and echosystem around it) has changed significtly since Node was designed in 2009. Notably:

- Promises, Async, Await
- ES modules
- Typed Arrays

## Node has problems

- A poorly designed module system with centralized distribution
  - It was deifned as an afterthought. The core design element of Node was based around the idea of non-blocking IO, essentially it is a programmable web-server which originaly did not have a module system. It was tacked on as they were needed by users. The resulting software displays lack of design. Yes, you have a NPM server to get your modules but it is centralised and not webby, the web is all about decentralisation.
- Lots of legacy APIs that must be supported
- Security
  - When you run a node program, there is no sense of security around it to begin with. All the programs are unsecure initially. Anybody can access to your SSH keys, no permissions. But somehow, if you run it on web browser it is secure.(V8 :P )
  - Node could have been secure.

## Deno attempts to correct design mistakes in Node by radically breaking compatibility

- No, you can't run Node apps on Deno! breaking compatibility.
- ES modules are the one and only module system
  - HTTP URLs are used to link to third party code
  - Deno has the ability to fetch resources itself, so it is its own package manager.
- Deno is secure by default
  - Users must give extra permission to access the disk, network or otherwise do privillaged operations.
- Deno maintains browser compatibility
  - The subset of Deno programs which are written completely in JS and do not use the global Deno object should also run in a modern web browser without change.

## Deno Features

- Use TypeScript or Javascript
- Secure by defulat (security flags)
- De-centralized packaging (biggest complain of NodeJs)
  - No more NPM packages/package.json
  - Packages are imported from URL : <code> import { Application } from 'http://deno.land/x/oak/mod.ts' </code>
  - Cached to harddrive on load
- Standard Libraries
  - Extensive standard library for things like fs, datetime, http, etc.
  - eg: <code> import { serve } from 'http://deno.land/x/std/http/server.ts' </code>
- Modern JS
- ES modules
- Top level First Class Await
  - Normally, with async await you have to wrap your await inside an asyncronous function and have to label it as async but with deno you can use await in the global scope without haing to wrap it in as an async function.
- Build-in Testing
- Browser compatibility API
- Execute Wasam Binaries: web assembly binaries

## Installation

- Using HomeBrew macOS

  - <code> \$ brew install deno </code>

- install VSCode deno extention from justjavac

## References

- [Deno Doco](https://deno.land/)
- [Deno Crash course](https://www.youtube.com/watch?v=NHHhiqwcfRM)
- [Ryan Dahl. Deno, a new way to JavaScript. JS Fest 2019 Spring](https://www.youtube.com/watch?v=z6JRlx5NC9E)
- [Welcome to Deno.land](https://www.dotconferences.com/2019/12/bert-belder-deno)
- [10 Things I Regret About Node.js - Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA)
