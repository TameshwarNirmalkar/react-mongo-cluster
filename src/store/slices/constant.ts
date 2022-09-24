export interface UserStateI {
  error: null | string;
  status: string;
  user: null | object;
  isScrollValueMoreThanHeaderHeight: boolean;
  userList: Array<object>;
  isLoading: boolean;
}
