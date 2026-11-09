# Options.AnimateScreenMovements

如果 WPS 激活动态鼠标功能、使用动态光标，并且激活后台保存与查找和替换操作之类的动态操作效果，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AnimateScreenMovements**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 以激活屏幕上的动态移动功能。*/
function test() {
    Options.AnimateScreenMovements = true
}
```


```JavaScript
/*本示例显示“文件”菜单“选项”对话框中“常规”选项卡的“提供动画反馈”选项的当前状态。*/
function test() {
    alert(Options.AnimateScreenMovements)
}
```
