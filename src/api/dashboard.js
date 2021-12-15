import request from "@/utils/request";

export function getDataStats(params) {
  return request({
    url: "/dashboard/data_stats",
    method: "get",
    params,
  });
}
