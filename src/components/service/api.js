import qs from "qs";
const baseUrl = "http://localhost:4000/";

export async function getApi(url) {
  try {
    const res = await fetch(baseUrl + url);
    return res.json();
  } catch (err) {
    return err;
  }
}

export async function postApi(url, data) {
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
    };

    const res = await fetch(baseUrl + url, {
      method: "POST",
      body: qs.stringify(data),
      headers,
    });

    return res.json();
  } catch (err) {
    return err;
  }
}

export async function deleteApi(url) {
  try {
    const data = await fetch(baseUrl + url, { method: "DELETE" });
    return data.json();
  } catch (err) {
    return err;
  }
}
