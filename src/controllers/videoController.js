import Video from "../models/Video";

// Video.find({}, (error, videos) => {
//   if(error) {
//     return res.render("server-error")
//   }
//     return res.render("home", { pageTitle: "Home", videos})
// })
export const trending = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
  }
};

export const search = (req, res) => res.send("Search Video");

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title: title,
      description: description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const watch = (req, res) => {
  const id = req.params.id;
  // const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching ${title}` });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  return res.render("edit", { pageTitle: `Editing ${title}` });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  // const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const remove = (req, res) => {
  const id = req.params.id;
  return res.send("Delete Video");
};
