import request from "@/utils/request";

export function getDateTime(params) {
  return request({
    url: "/sany_equipmentstatuss/GetDateTime",
    method: "get",
    params,
  });
}

export function getStatus(params) {
  return request({
    url: "/sany_equipmentstatuss/GetStatus",
    method: "get",
    params,
  });
}
