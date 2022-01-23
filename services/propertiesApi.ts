import axios from "axios";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    },
  });

  return data;
}

export const fetchSearchAutoComplete = async (searchTerm: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_PROPERTIES_API_BASE_URL}/auto-complete?query=${searchTerm}`, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    },
  });

  return data;
};