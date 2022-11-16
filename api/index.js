export default function handler(req, res) {
  const { firstName = 'Rick', lastName = 'Sanchez' } = req.query;
  return res.send(`Hello ${firstName} ${lastName}!`);
}
