export const user = [
  {
    title: "基本信息",
    selected: true,
    info: {
      姓名: "罗以兴",
      出生: "1993-08-25",
      性别: "男",
      电话: "19112766817",
      邮箱: "owyyh@qq.com",
      地址: "重庆市渝北区春华大道龙湖公园时光",
      学校: "重庆邮电大学",
      专业: "软件工程",
      学位: "本科",
    },
  },
  {
    title: "个人优势",
    info: `多年的前端开发经验，熟悉Vue、Node、Jquery、JavaScript、ES6、H5、CSS3、uniapp、vite、pinia、微信小程序等前端技术。
    熟练掌握页面架构与布局，熟练掌握Git版本控制工具，能够独立开发Web端功能，具有良好的团队合作精神，具有强烈的责任心和强烈的学习能力。`,
  },
  {
    title: "个人爱好",
    info: {
      游戏: "英雄联盟，炉石传说，崩坏星穹铁道",
      运动: "跑步，羽毛球",
      音乐: "流行音乐，传统民乐",
      电影: "科幻片，喜剧片",
      动漫: "瑞克和莫蒂",
    },
  },
];

export const difficulty = [
  {
    title: "函数重载",
    info:`在JavaScript中，重载是指在同一个作用域内定义多个同名函数，但是这些函数的参数不同。然而，JavaScript不支持真正的函数重载，因为它不关心函数的参数类型，只关心参数的数量。如果定义了两个同名的函数，后面定义的会覆盖前面的定义。
    为了实现类似的功能，可以使用一个函数来检查参数并根据参数调用不同的内部函数。
    以下是一个使用不同参数个数来实现类似重载效果的例子：`,
    img: "src/assets/img/overload.png",
  },
  {
    title: "apply, call与bind",
    info:`call、apply、bind作用是改变函数执行时的上下文，简而言之就是改变函数运行时的this指向。call 方法 改变this的指向, 立即执行函数, 第一个参数是表示要绑定的对象, 如果调用时不传参, 比如call()call(null)call(undefined)这三种的this都指向window，apply方法 也是改变this的指向, 立即执行, 与call方法不同的是 apply方法传入的第二个参数是数组，bind()的作用与call()和apply()一样，都是可以改变函数运行时上下文，区别是call()和apply()在调用函数之后会立即执行，而bind()方法调用并改变函数运行时上下文后，返回一个新的函数，供我们需要时再调用。`,
    img: "src/assets/img/applyCallBind.png",
  },
  {
    title: "位运算权限应用",
    info:`位运算在权限系统的中的应用`,
    img: "src/assets/img/cal.png",
  },
];
