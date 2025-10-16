import axios from 'axios';

async function getCatFact() {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cat fact');
  }
}

export default getCatFact;
