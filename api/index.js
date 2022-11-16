export default function handler(req, res) {
  const { name = 'World', lastName = 'Sanchez' } = req.query;
  return res.send(`Hello ${name} ${lastName}!`);
}
