export default async function (fastify, opts) {
  const data = [ "JAvier", "Santi"]

  fastify.get('/', {
    schema: {
      query: {
        type: "object",
          required: ["name"],
          additionalProperties: false,
          properties: {
            name: { type: "string" },
          },
      }
    }
  },async function (request, reply) {
    return 'hello ' + request.query.name
  })


  fastify.get('/:id', {
    schema: {
      params: {
        type: "object",
          required: ["id"],
          additionalProperties: false,
          properties: {
            id: { type: "number" },
          },
      }
    }
  },async function (request, reply) {
    const name = data[request.params.id];
    if(!name){
      return reply.notFound();
    }
    return 'hello ' + name
  })

  fastify.post('/', {
    schema: {
      body: {
        type: "object",
          required: ["id"],
          additionalProperties: false,
          properties: {
            id: { type: "number" },
          },
      }
    }
  },async function (request, reply) {
    const name = data[request.body.id];
    if(!name){
      return reply.notFound();
    }
    return 'hello ' + name
  })
}
