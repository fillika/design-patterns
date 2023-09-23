import api from "./api";
import createFrog from "./createFrog";

async function init() {
  try {
    const frogs = await api.fetchFrogs();
    return frogs.map(createFrog);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default init;
