// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const API_KEY = process.env.API_KEY;

  const URL = `https://api.unsplash.com/photos/random?Accept-Version=v1&client_id=${API_KEY}&username=theluckyneko`;

  try {
    const resp = await fetch(URL);
    const result = await resp.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: result }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
