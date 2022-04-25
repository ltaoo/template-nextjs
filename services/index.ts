import { IUser } from "@/types";
import request from "@/utils/request";

/**
 * 获取所有用户
 * @param body
 */
export function fetchUsers() {
  return request.post("/api/users") as Promise<{
    list: IUser[];
  }>;
}

/**
 * 新增用户
 * @param body
 */
export function addUser(body: { name: string }) {
  return request.post("/api/users/add", body);
}
