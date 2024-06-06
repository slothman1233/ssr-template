import { RANDOMDATA } from "../RequestPathName";

export const getrandom = () =>
  getFetchData({
    url: RANDOMDATA,
    opts: {},
    method: "post",
    contentType: "application/json",
  });

export const getrandom1 = () =>
  getFetchData({
    url: RANDOMDATA,
    opts: {},
  });

// export const getrandom1 = () =>
//   new Promise((resolve, reject) => {
//     service
//       .get<any>(RANDOMDATA1)
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((e: any) => {
//         reject(e);
//       });
//   });
