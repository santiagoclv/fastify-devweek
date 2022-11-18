
Tener Node instalado Instalar Node 
> https://nodejs.org/en/download/

- GET /hello -> retorna hello world
- GET /hello?name=santi -> retorna hello santi (query strings)
- GET /hello/:id -> retorna hello santi (rutas dinamicas)
- POST /hello con body { id } -> retorna hello santi
- Input route Validations

```markdown
npm install fastify-cli --global
fastify generate ./hello-api --esm --standardlint
cd hello-api
npm install
fastify print-routes app.js
```

## Demo Code

```js
const data = ["santiago", "jorge", "marcelo", "javier"];

fastify.get(
    "/",
    async function (request, reply) {
      return { hello: request.query.name };
    }
  );

fastify.get(
    "/:id",
    {
      schema: {
        params: {
          type: "object",
          required: ["id"],
          additionalProperties: false,
          properties: {
            id: { type: "number" },
          },
        },
      },
    },
    async function (request, reply) {
      const name = data[request.params.id];
      if(!name){
        return reply.notFound();
      }
      return "hola " + name;
    }
  );

  fastify.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["name"],
          additionalProperties: false,
          properties: {
            name: { type: "string" },
          },
        },
        response: {
          201: {
            description: 'Successful response',
            type: 'object',
            properties: {
              name: { type: 'string' }
            }
          }
        },
      },
    },
    async function (request, reply) {
      return { hello: 1 }
    }
  );
```