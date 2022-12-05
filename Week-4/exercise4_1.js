const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending"
  };
  class MyPromise {
    constructor(cb) {
      this.value;
      this.state = STATE.PENDING;
      this.thenCbs = [];
      this.catchCbs = [];
  
      this.runCallBacks = () => {
        if (this.state === STATE.FULFILLED) {
          this.thenCbs.forEach((callBack) => {
            callBack(this.value);
          });
          this.thenCbs = [];
        }
  
        if (this.state === STATE.REJECTED) {
          this.catchCbs.forEach((callBack) => {
            callBack(this.value);
          });
          this.catchCbs = [];
        }
      };
  
      const onSuccess = (value) => {
        if (this.state !== STATE.PENDING) {
          return;
        } else {
          this.value = value;
          this.state = STATE.FULFILLED;
          this.runCallBacks();
        }
      };
      const onFail = (value) => {
        if (this.state !== STATE.PENDING) {
          return;
        } else {
          this.value = value;
          this.state = STATE.REJECTED;
          this.runCallBacks();
        }
      };
  
      try {
        cb(onSuccess, onFail);
      } catch (err) {
        onFail(err);
      }
    }
  
    then(thenCb, catchCb) {
      return new MyPromise((resolve, reject) => {
        this.thenCbs.push((result) => {
          if (thenCb == null) {
            resolve(result);
            return;
          }
          try {
            resolve(thenCb(result));
          } catch (error) {
            reject(error);
          }
        });
        this.catchCbs.push((result) => {
          if (catchCb == null) {
            reject(result);
            return;
          }
  
          try {
            resolve(catchCb(result));
          } catch (error) {
            reject(error);
          }
        });
        this.runCallBacks();
      });
    }
  
    catch(cb) {
      return this.then(undefined, cb);
    }
  
    finally(cb) {
      return this.then((result) => {
        cb();
        return result;
      });
    }
  }
  
  const getNumber = () => {
    let randomNum = Math.floor(Math.random() * 1000);
  
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        if (randomNum % 5 !== 0) {
          resolve(randomNum);
        } else {
          reject(randomNum);
        }
      }, 2000);
    });
  };
  
  getNumber()
    .then((value) => {
      console.log(`The random number ${value} generated is not divisible by 5`);
    })
    .catch((value) => {
      console.log(`The random number ${value} generated is divisible by 5`);
    })
    .finally(() => {
      console.log("Done");
    });
