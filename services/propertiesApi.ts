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