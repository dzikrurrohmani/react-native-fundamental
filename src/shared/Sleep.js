export const sleep = (fn, ms) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      fn(resolve, reject);
    }, ms)
  );
