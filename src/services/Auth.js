const postRequest = async (url, body) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Access-Control-Expose-Headers": "Authorization",
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const result = await fetch(url, postOptions).then((result) => {
    const token = result.headers.get("Authorization");
    token && localStorage.setItem("token", token);

    if (result.ok) return result.json();
    throw result.status;
  });

  return result;
};

export const signUpUser = async (newUser) => {
  const url = "http://localhost:8000/api/auth/signUp";
  const user = await postRequest(url, newUser);
  return user;
};

export const signInUser = async ({ email, password }) => {
  const url = "http://localhost:8000/api/auth/signIn";
  const user = await postRequest(url, { email, password });

  return user;
};
