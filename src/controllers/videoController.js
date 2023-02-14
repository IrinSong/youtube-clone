export const trending = (req, res) => {
  const videos = [
    {
      title: "Title #1",
      rating: 5,
      comments: 3,
      createAt: "4 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Title #2",
      rating: 4,
      comments: 1,
      createAt: "2 minutes ago",
      views: 12,
      id: 1,
    },
    {
      title: "Title #3",
      rating: 5,
      comments: 43,
      createAt: "50 minutes ago",
      views: 249,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const watch = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit Video");
};
export const remove = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
