# COMAddIn.Description

获取或设置指定的 **COMAddin** 对象的说明性 **String** 值。可读/写。



## 语法

express.**Description**

express   一个代表 **COMAddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于各组件，显示加载项“example.Test1”的说明文本。*/
function test() {
    alert(`The description of this COMAddIn is "${Application.COMAddIns.Item("example.Test1").Description}"`)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 COM 加载项的说明文本。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.COMAddIns.Count; i++) {
        str += Application.COMAddIns.Item(i).Description + "\n"
    }
    alert(str)
}
```
