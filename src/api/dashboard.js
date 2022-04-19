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

// 生产追溯
export function getProData(params) {
  return request({
    url: "/sany_bgdatas/GetKantime",
    method: "get",
    params,
  });
}

// 设备生产信息
export function getStatusOne(params) {
  return request({
    url: "/sany_equipmentstatuss/GetStatusOne",
    method: "get",
    params,
  });
}

// 日产数据1
export function getDaysData1(params) {
  return request({
    url: "/sany_prodstatisticsdays/GetStatus",
    method: "get",
    params,
  });
}

// 月产数据1
export function getMonthsData1(params) {
  return request({
    url: "/sany_prodstatisticsmonths/GetStatus",
    method: "get",
    params,
  });
}