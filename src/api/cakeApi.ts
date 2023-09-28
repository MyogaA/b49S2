import axios from "axios";

interface MenuItem {
  name: string;
  imageUrl: string;
  categories: string;
  description: string;
  badge: string;
}

export const fetchData = async (): Promise<MenuItem[]> => {
  try {
    const response = await axios.get<MenuItem[]>(
      "https://api.npoint.io/624c99ed50dcd45fb160"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
