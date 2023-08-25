const ICONO_SERVER_URL = "http://52.213.82.137:3690";
const load = async () => {
  return {
    awaited: {
      results: search("Kids doing cool skateboard tricks")
    }
  };
};
async function search(query) {
  console.log("search function launching");
  try {
    const bearer = await authenticate();
    console.log({ bearer });
    const response = await fetch(`${ICONO_SERVER_URL}/api/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${bearer}`
      },
      body: JSON.stringify({ query, nb_results: 1 })
    });
    console.log({ response });
    const json = await response.json();
    return json.results;
  } catch (e) {
    console.log("Error in search function");
    console.log(e);
    return [e];
  }
}
async function authenticate() {
  const response = await fetch(`${ICONO_SERVER_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ username: "user1", password: "password1" })
  });
  const data = await response.json();
  return data.access_token;
}
export {
  load
};
