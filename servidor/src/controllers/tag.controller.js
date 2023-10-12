import Tag from "../models/tag.js";

export const getTags = async (req, res) => {
  const tags = await Tag.find();
  res.json(tags);
};

export const getTag = async (req, res) => {
    const findTag = await Tag.findById(req.params.id);
    if (!findTag) return res.status(404).json({message: "tag not found"})
    res.json(findTag);
};

export const createTag = async (req, res) => {
  const { title } = req.body; // aca se esta solicitando el body del request
  const newTag = Tag({
    // aca estamos creando una variable que se igualara al Schema que le indiquemos
    title,
  });
  await newTag.save(); // aca estamos esperando y guardando la informacion que nos llega, y resivimos un mensaje si salio bien y si no nos llegara el mensaje de error
  res.status(201).json({
    //el .json es para que nos devuelva la informacion en un json y no en texto plano
    message: "tag created",
  });
};

export const updateTag = async (req,res) =>{
    const findTag= await Tag.findByIdAndUpdate(req.params.id,req.body);
    if (!findTag) return res.status(404).json({message: "tag not found"})
    res.status(200).json({
        //el .json es para que nos devuelva la informacion en un json y no en texto plano
        message: "tag update",
      });
}

export const deleteTag = async (req,res) =>{
    const findTag=await Tag.findByIdAndDelete(req.params.id);
    if (!findTag) return res.status(404).json({message: "tag not found"})
    res.sendStatus(204);
}
