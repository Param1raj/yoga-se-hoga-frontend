const HostAndPort = "https://yoga-backend-service.onrender.com";

export const Login_Api = `${HostAndPort}/user/login`;
export const Signup_Api = `${HostAndPort}/user/signup`;
export const Email_Api = "api/";
export const Me = `${HostAndPort}/user/me`;
export const Admin_Login_Api = `${HostAndPort}/admin/login`;

const VideoRoute = `${HostAndPort}/video`;

export const Create_Video = `${VideoRoute}/add`;
export const All_Video = `${VideoRoute}/videos`;
export const Videos = `${VideoRoute}/type`;
export const Base_Single_Video = `${VideoRoute}`;
export const first_Video = `${VideoRoute}/course/first`;
export const Get_Next_Video = `${VideoRoute}/content`;
export const Delete_Video = VideoRoute;
export const Update_Video = VideoRoute;

const UserRoute = `${HostAndPort}/user`;

export const User_Login = `${UserRoute}/login`;
export const User_Signup = `${UserRoute}/signup`;
export const All_Users = `${UserRoute}/users`;
export const Delete_User = `${UserRoute}`;

export const BlogRoute = `${HostAndPort}/blog`;
export const Add_Blog = `${BlogRoute}/add`;
