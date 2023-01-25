import qs from "qs";
const baseUrl = "http://localhost:4000/";

export async function getApi(url) {
  return await fetch(baseUrl + url).then((data) => data.json());
}

export async function postApi(url, data) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "*/*",
  };
  return await fetch(baseUrl + url, {
    method: "POST",
    body: qs.stringify(data),
    headers,
  }).then((data) => data.json());
}

export async function deleteApi(url) {
  return await fetch(baseUrl + url, { method: "DELETE" }).then((data) =>
    data.json()
  );
}
