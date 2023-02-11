export const trending = (req, res) => res.send("Recommended Video");
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const watch = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit Video");
};
export const remove = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
