import Fastify from "fastify";

const port = Number(process.env.PORT ?? 3000);

const fastify = Fastify({
  logger: true,
});

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const opts = {
  schema: {
    body: {
      type: "object",
      properties: {
        someKey: { type: "string" },
        someOtherKey: { type: "number" },
      },
    },
  },
};

fastify.get("/api", opts, function (req, res) {
  res.send({ hello: "world" });
});

fastify.listen({ port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
