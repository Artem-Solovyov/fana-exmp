import { SUBSCRIPTION_URL } from "@/constants";

export const subscribeToMailerLite = async (email: string) => {
  const data = {
    fields: {
      email: email,
    },
  };

  const result = await fetch("https://connect.mailerlite.com/api", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYWNjMWUwNWNiMjE3ODU2OGEzM2QxNDAzMTA3MDE4MTg2ZjI1NzM4OGM3MWVmZjljMTNiZjBiOTdiOTUyZGZlZDEyYTFmNzM0YWIxZTc3OGMiLCJpYXQiOjE3MjU0MzU4OTUuNTc5MjIzLCJuYmYiOjE3MjU0MzU4OTUuNTc5MjI1LCJleHAiOjQ4ODExMDk0OTUuNTcwMzM1LCJzdWIiOiI4MDMzMDgiLCJzY29wZXMiOltdfQ.MpCz_Bi6djtdALAgBc_sHf1j2nWG05eP1ZpdgryqfjdRKk5uAu9tFq6VbPX1rcL2mQtAQrF5P-PMpdIp8AchsmBRyAPZmeF5nz5b9Nau8Lf7YIo-p-cpDEygQOV-mbkMcFpITR94uUfs5pblJ--TCXJrrJQWvHgdes0q3pRf0XY9X7JrJr9FquVWTqVbL0fIEHPsw-F-wFoUXZPuidZlSNA9fnFJAKkwdQBnY3VIv05FNhKv3ieMJgH2pmNleE7WaaDoI0dCzF-xeOHdm0tbpECO5XxLmX0xQlmRnhnx5BwU9etUJdGXGNXLymNjEg7utxsRp3uHp8WOpvkSR0-mi7B9bzrj-a2r3xx7A6ahNkiLz1y0nKrxIP9gBuh0xdGUMNbl_2KVAdAYce0FJ7YEMM-yB-Am3hSCl9dvl2BGLZ4-pMbIR_VbZPWEScfYyDUAFrWX3DXXcBWlbhkkXMYP4yeoqg3DKzfVAvbQhFECA9zmrypY4aKmRrKTuzQQYMoyliZ8e356zYCGQbFsVJskqnLSnxDoWsh4m-bvvKYt3Md-TWaYFcnkOL-vsFWV2z_z1rStivVHqEcgpuNmkurEtIDIMRaWiD3Qek6JRxnVkjSbIGj1lFcNBOphisteHgIve53g_Wn8uz_xbHjpxIXgH2DtRqpV4lsGFRWIOlew0Es",
    },
    body: JSON.stringify(data),
  });

  return await result.json();
};
