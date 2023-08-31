const HostAndPort = "http://localhost:8000";

export const Login_Api = `${HostAndPort}/user/login`;
export const Signup_Api = `${HostAndPort}/user/signup`;
export const Email_Api = "api/";
export const Me = `${HostAndPort}/user/me`;
export const Admin_Login_Api = `${HostAndPort}/admin/login`;

const VideoRoute = `${HostAndPort}/video`;

export const Create_Video = `${VideoRoute}/add`;
export const All_Video = `${VideoRoute}/videos`;
export const All_Free_Videos = `${VideoRoute}/free`;
export const Base_Single_Video = `${VideoRoute}`;
export const first_Video = `${VideoRoute}/course/first`;
export const Get_Next_Video = `${VideoRoute}/content`;

const UserRoute = `${HostAndPort}/user`;

export const User_Login = `${UserRoute}/login`;
export const User_Signup = `${UserRoute}/signup`;
