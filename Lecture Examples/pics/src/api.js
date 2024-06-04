import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID OnNKq6e_OhYd6YAxu5CtYwNteGGBQbfEU6qXecIaYBs",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
