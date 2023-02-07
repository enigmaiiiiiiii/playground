
export default (req, res) => {
  const filter = req.query.q ? new RegExp(req.query.q, 'i'): /.*/;
  res.statusCode = 200;
  res.setheader("Content-Type", "application/json");
}
