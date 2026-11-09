# Application.AlwaysUseClearType

返回或设置一个 **Boolean** 值，该值表示是否使用 ClearType 显示菜单、功能区和对话框文本中的字体。可读/写 **Boolean** 类型。



## 语法

express.**AlwaysUseClearType**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


即使关闭 Windows 操作系统的 ClearType 设置，将此属性设置为 **True** 也会替代 Windows 设置，并在所有 WPS Office 应用程序中使用 ClearType。



## 示例


```JavaScript
/*本示例演示是否使用 ClearType 显示菜单、功能区和对话框文本中的字体。*/
function test() {
    if (Application.AlwaysUseClearType) {
        alert("正在使用 ClearType 显示菜单、功能区和对话框文本中的字体。")
    }
}
```


```JavaScript
/*本示例演示将 AlwaysUseClearType 属性设置为false。*/
function test() {
    Application.AlwaysUseClearType = false
}
```
