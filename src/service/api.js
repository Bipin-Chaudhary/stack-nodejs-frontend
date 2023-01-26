import qs from "qs";
const baseUrl = "/api";

export async function getApi() {
  try {
    const res = await fetch(baseUrl + '/stack');
    return res.json();
  } catch (err) {
    return err;
  }
}

export async function postApi(data) {
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
    };

    const res = await fetch(baseUrl + '/stack', {
      method: "POST",
      body: qs.stringify(data),
      headers,
    });

    return res.json();
  } catch (err) {
    return err;
  }
}

export async function deleteApi() {
  try {
    const data = await fetch(baseUrl + '/stack', { method: "DELETE" });
    return data.json();
  } catch (err) {
    return err;
  }
}
