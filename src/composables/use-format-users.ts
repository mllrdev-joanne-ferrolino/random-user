import { IUser } from "@/models/IUser";

export default () => {
  function mapUser(result: any) {
    const user: IUser = {
      name: [result.name.first, result.name.last].join(" "),
      email: result.email,
      picture: result.picture.thumbnail,
      login: result.login.username,
    };
    return user;
  }

  return { mapUser };
};
