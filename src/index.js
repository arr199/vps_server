import Fastify from "fastify";

const port = Number(process.env.PORT ?? 3000);

const fastify = Fastify({
  logger: true,
});

fastify.get("/api", function (req, res) {
  res.send({ hello: "world" });
});

fastify.listen({ port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
