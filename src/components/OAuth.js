//env 설정시
// const CLIENT_ID = process.env.REACT_APP_KAKAO_ID;
// const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const REST_API_KEY = "75e088caeb12f87f945b64b6df403621";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
