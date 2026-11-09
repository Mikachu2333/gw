# Window.VerticalPercentScrolled

返回或设置垂直滚动条的位置（以文档长度的百分比表示）。可读写 **Long** 类型。



## 语法

express.**VerticalPercentScrolled**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*以下示例显示活动窗口垂直滚动的百分比。*/
function test() {
    alert(`${ActiveDocument.ActiveWindow.VerticalPercentScrolled}%`)
}
```


```JavaScript
/*以下示例将活动窗口垂直滚动 10 %。*/
function test() {
    let window = ActiveDocument.ActiveWindow
    window.VerticalPercentScrolled = window.VerticalPercentScrolled + 10
}
```
