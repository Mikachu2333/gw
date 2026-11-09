# Options.UseLocalUserInfo

返回或设置一个 **Boolean** 类型的值；如果 WPS 根据“选项”对话框“用户信息”选项卡中的“姓名”和“缩写”设置来识别文档作者，则为 **True** ；如果 WPS 根据用户登录 Office 的账户信息来识别作者，则为 **False** 。可读写。



## 语法

express.**UseLocalUserInfo**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


对应于 WPS 中“选项”对话框的“用户信息”选项卡上的“在修订中使用该用户信息”复选框的设置。



## 示例


```JavaScript
/*本示例显示 WPS 是否根据“选项”对话框“用户信息”选项卡中的“姓名”和“缩写”设置来识别文档作者。*/
function test() {
    alert(Options.UseLocalUserInfo)
}
```


```JavaScript
/*本示例切换 WPS 中“选项”对话框的“用户信息”选项卡上的“在修订中使用该用户信息”复选框的状态。*/
function test() {
    Options.UseLocalUserInfo = !Options.UseLocalUserInfo
}
```
