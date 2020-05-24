let file = await Deno.open("greet.txt"); // this returns a promise hence the top level await
await Deno.copy(file, Deno.stdout);

file.close();
