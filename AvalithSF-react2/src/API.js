export const getAllProducts = async () => {
  try {
    const url = 'https://fakestoreapi.com/products';
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return error.message;
  }
};

export const postNewProduct = async (newProduct) => {
  try {
    const url = 'https://fakestoreapi.com/products';

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return error.message;
  }
};
