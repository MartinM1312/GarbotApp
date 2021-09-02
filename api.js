const API = 'https://garbot-api.herokuapp.com/plant';
const hAPI = 'https://garbot-api.herokuapp.com/plant/hum';
const tAPI = 'https://garbot-api.herokuapp.com/plant/lum';
const envAPI = 'https://garbot-api.herokuapp.com/plant/env';

export const deletePlant = async id => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
  });
};

export const getPlants = async () => {
  const res = await fetch(API, {
    method: 'GET',
  });

  return await res.json();
};

export const getEnvMeasures = async () => {
  const res = await fetch(envAPI);
  const aux = await res.json();

  return aux;
};

export const createPlant = async newPlant => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPlant),
  });
  return await res.json();
};

export const getPlant = async plantId => {
  const res = await fetch(`${API}/${plantId}`);
  return await res.json();
};

export const updatePlant = async (plantId, newPlant) => {
  console.log(plantId, newPlant);
  const res = await fetch(`${API}/${plantId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPlant),
  });
  return res;
};

export const getPlantHum = async plantId => {
  const res = await fetch(`${hAPI}/${plantId}`, {
    method: 'GET',
  });
  return await res.json({});
};

export const getPlantLum = async plantId => {
  const res = await fetch(`${tAPI}/${plantId}`, {
    method: 'GET',
  });
  return await res.json({});
};
