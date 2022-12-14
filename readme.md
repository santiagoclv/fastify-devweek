# [Fastify](https://www.fastify.io/)

In fastify everything is a plugin, like in Express everything is a middleware.

Basicly a fastify plugin encapsulate its functionalities and only another plugin registered inside or that inherit from it can access its functionalities. What helps with this case:  Almost everytime is better to start from a monolith but later we want to move to microservices **and everything is anger and pain-**. This plugin architecture helps split applications without much refactor.

Fastify generate a optimized data structure (radix-tree) that is used to match the routes. Using [find-my-way](https://github.com/delvedor/find-my-way) (support route params and wildcards)- Almost 20 times faster that the matchers from express.

Using [fast-json-stringify](https://github.com/fastify/fast-json-stringify) insted of using JSON.stringify to serialize what requires to specify the JSONSchema for output. Also it is used for validations and it is up to 5 times faster than JSON.stringify.

It has support for middlewares from Express, and they run up to 30% faster than on express. It is because also another library that Fastify uses called [reusify](https://github.com/mcollina/reusify), this library gives the abitity to run functions without closures.

[benchmarks](https://www.fastify.io/benchmarks/)

## Demo

```markdown
npm install fastify-cli --global
fastify generate ./hello-api --esm --standardlint
cd hello-api
npm install
fastify print-routes app.js
```


## Sources & Material

[What if I told you that HTTP can be fast? → WebExpo](https://webexpo.net/prague2017/talk/what-if-i-told-you-that-http-can-be-fast/)
