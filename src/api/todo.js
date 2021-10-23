const API_URL = process.env.REACT_APP_API;
const BASE_PATH = "/todo-items";

const listUrl = (activity_id) =>
  `${API_URL}${BASE_PATH}?activity_group_id=${activity_id}`;
const addUrl = () => `${API_URL}${BASE_PATH}`;
const detailUrl = (id) => `${API_URL}${BASE_PATH}/${id}`;
const removeUrl = (id) => `${API_URL}${BASE_PATH}/${id}`;
const updateUrl = (id) => `${API_URL}${BASE_PATH}/${id}`;

/**
 * list of priority is : very-high, high, normal, low, very-low | defalut value is very-high
 * {
 *    activity_group_id: 5,
 *    title: '',
 *    priority:
 * }
 */
const add = (data) =>
  fetch(addUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const getDetail = (id) => fetch(detailUrl(id)).then((res) => res.json());

const getList = (activity_id) =>
  fetch(listUrl(activity_id)).then((res) => res.json());

const remove = (id) =>
  fetch(removeUrl(id), { method: "DELETE" }).then((res) => res.json());

/**
 * list of priority is : very-high, high, normal, low, very-low
 *
 * {
 *    title: '',
 *    is_active: 1,
 *    priority: 'normal'
 * }
 */
const update = (id, data) =>
  fetch(updateUrl(id), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export { add, getList, getDetail, remove, update };
