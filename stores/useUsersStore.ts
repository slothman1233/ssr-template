import { defineStore } from "pinia";

interface UsersState {
  name: string;
  age: number;
  sex: string;
}

/**
  * 如何创建store：
      调用pinia的defineStore()函数即可，该函数接收两个参数：
      name：一个字符串，必传，该store的唯一id
      options：一个对象，store的配置项，比如配置store内的数据，修改数据的方法等等
  
  * pinia的优点：
      我们可以定义任意数量的store，因为其实一个store就是一个函数，这也是pinia的好处之一，让我们的代码扁平化了，这和Vue3的实现思想是一样的。
*/

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore("users", {
  // 添加state，state接收的是一个箭头函数返回的值，state不能接收一个对象
  state: () => ({
    name: "梨花",
    age: 25,
    sex: "男",
  }),

  /* 
    计算值
    添加getters，接收一个对象，该对象里面是各种方法，
    你可以把它想象成Vue中的计算属性，它的作用就是返回一个结果，
    
    getters也是会被缓存的，

    在getters中的，各个方法之间相互调用采用this关键字即可

  */
  getters: {
    // 定义一个getAddAge()方法，该方法默认接收一个state参数(即：上面的那个state)
    getAddAge: (state) => {
      return state.age + 1;
    },

    /*
        * 调用其他getters中的方法（在getter中如何使用this）
          一般情况下，getter仅仅依赖于state，但是有时候也会依赖其他getter，
          所以呢，如果getter定义为【非箭头函数】，就可以【通过this拿到整个store实例】
  
          因为，箭头函数没有自己的this绑定，而是继承了外部的this绑定，所以箭头函数中无法使用this
      */
    getNameAge(state) {
      // 必须要指定类型 不然ts不会识别 会报错
      const age: number = this.getAddAge; // 调用其他getters中的方法
      // console.log("getters中的this=", this);

      return age + state.age;
    },

    /*
        getter可以通过，返回一个函数xxx来接收参数，这个函数xxx的返回值也就是此getter最终的值
        在执行此操作时，getter 不再缓存，它们只是调用的函数
      */
    plusAgeBy: (state) => {
      return (moreNum: string) => {
        console.log("传递给getter的参数是=", moreNum);
        return state.age + moreNum;
      };
    },
  },

  /*
      添加actions，属性值是一个对象，该对象里面是各种方法，包括同步、异步方法
  
      特殊之处：actions中的方法内部的this指向的是当前store，即：
        在`defineStore`中，state对象中的属性，会被绑定到this上，可以通过this.name来访问和修改name属性，
        这里state对象中定义了name、age、sex属性，因此可以通过this.name、this.age、this.sex 来访问和修改这些属性
    */
  actions: {
    saveName(name: string) {
      this.name = name;
    },

    async asyncSetAge(age: number) {
      await Utils.sleep(1000);
      this.age = age;
    },
  },

  //persist定义要做判断，因为localStorage是客户端参数，所以需要加process.client
  persist: process.client && {
    storage: localStorage,
    //只持久化 times 属性
    // paths: ["times"],
  },
});
