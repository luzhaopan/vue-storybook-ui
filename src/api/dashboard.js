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

// 日产数据
export function getDaysData(params) {
  return request({
    url: "/sany_prodStatisticsdays/GetStatus",
    method: "get",
    params,
  });
}

// 月产数据
export function getMonthsData(params) {
  return request({
    url: "/sany_prodstatisticsmonths/GetStatus",
    method: "get",
    params,
  });
}

// 工单看板内容
export function getTable(params) {
  return request({
    url: "/sany_wipboards/GetTable",
    method: "get",
    params,
  });
}
