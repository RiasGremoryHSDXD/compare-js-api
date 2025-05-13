export default async function handler(req, res) {
  const { face_token1, face_token2 } = req.body;

  const params = new URLSearchParams({
    api_key: process.env.FACEPP_KEY,
    api_secret: process.env.FACEPP_SECRET,
    face_token1,
    face_token2,
  });

  const response = await fetch("https://api-us.faceplusplus.com/facepp/v3/compare", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const result = await response.json();
  res.status(response.status).json(result);
}
