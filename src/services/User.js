const request = async (url, method, body) => {
  const token = localStorage.getItem("token");

  const postOptions = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const result = await fetch(url, postOptions).then((result) => {
    if (result.ok) {
      if (method !== "DELETE") {
        return result.json();
      }
      return result;
    }
    throw result.status;
  });

  return result;
};

export const getUsers = async () => {
  const url = "http://localhost:8000/api/users";

  const users = await request(url, "GET");

  return users;
};

export const updateUser = async (user) => {
  const url = "http://localhost:8000/api/users";

  const users = await request(url, "POST", user);

  return users;
};
export const deleteUser = async (id) => {
  const url = "http://localhost:8000/api/users/" + id;

  const users = await request(url, "DELETE");

  return users;
};
