export default {
  get: function (context, url, params) {
    return new Promise((resolve, reject) => {
      context.$http.get(url, params).then((res) => {
        if (res.status === 200) {
          if (res.data.resultCode === 0) {
            resolve(res.data.data);
          } else {
            reject(res.data.errcode);
          }
        }
      });
    });
  }
};
