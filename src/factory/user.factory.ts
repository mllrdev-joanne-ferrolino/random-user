import { IUser } from "@/models/IUser";

export default function toUser(result: any): IUser {
  return {
    name: [result.name.first, result.name.last].join(" "),
    email: result.email,
    picture: result.picture.thumbnail,
    login: result.login.username,
  };
}
