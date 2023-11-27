import axios from "axios";

const url = "https://dummyjson.com/products";

export const getAllProducts = async (req, res) => {
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error getting products");
  }
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(url + `/${id}`);
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).send("Product not found");
    } else {
      res.status(500).send("Product error");
    }
  }
};

export const createProduct = async (req, res) => {
  try {
    const newElement = req.body;
    const response = await axios.post(url + `/add`, newElement);
    res.json(response.data);
  } catch (error) {
    console.error("Error creating new product:", error);
    res.status(500).send("Error creating new product:");
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const update = req.body;

  try {
    const response = await axios.put(url + `/${id}`, update);
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).send("Not found for update");
    } else {
      res.status(500).send("Not found for update");
    }
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.put(url + `/${id}`);
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).send("Not found for delete");
    } else {
      res.status(500).send("Not found for delete");
    }
  }
};
