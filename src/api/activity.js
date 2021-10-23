const API_URL = process.env.REACT_APP_API;
const email = process.env.REACT_APP_EMAIL;
const BASE_PATH = "/activity-groups";

const listUrl = () =>
  `${API_URL}${BASE_PATH}?email=${encodeURIComponent(email)}`;
const addUrl = () => `${API_URL}${BASE_PATH}`;
const detailUrl = (id) => `${API_URL}${BASE_PATH}/${id}`;
const removeUrl = (id) => `${API_URL}${BASE_PATH}/${id}`;
const updateUrl = (id) => `${API_URL}${BASE_PATH}/${id}`;

/**
 * {
 *    title: '',
 *    email:
 * }
 */
const add = (title) =>
  fetch(addUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, title }),
  }).then((res) => res.json());

const getDetail = (id) => fetch(detailUrl(id)).then((res) => res.json());

const getList = () => fetch(listUrl()).then((res) => res.json());

const remove = (id) =>
  fetch(removeUrl(id), { method: "DELETE" }).then((res) => res.json());

/**
 * {
 *    title:''
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
