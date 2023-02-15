let videos = [
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
    views: 1,
    id: 2,
  },
  {
    title: "Title #3",
    rating: 5,
    comments: 43,
    createAt: "50 minutes ago",
    views: 249,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");

export const watch = (req, res) => {
  const id = req.params.id;
  // const { id } = req.params;
  const video = videos[id - 1];
  console.log("Show video", id);
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  // const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const remove = (req, res) => {
  const id = req.params.id;
  return res.send("Delete Video");
};
