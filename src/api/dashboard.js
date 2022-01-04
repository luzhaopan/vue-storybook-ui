import request from "@/utils/request";

export function getDateTime(params) {
  return request({
    url: "/sany_equipmentstatuss/GetDateTime",
    method: "get",
    params,
  });
}
