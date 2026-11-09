# Window.HorizontalPercentScrolled

返回或设置水平滚动条位置（以文档宽度的百分比表示）。可读/写 **Long** 类型。



## 语法

express.**HorizontalPercentScrolled**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口水平滚动的百分比。*/
function test() {
    alert(`${ActiveDocument.ActiveWindow.HorizontalPercentScrolled}%`)
}
```


```JavaScript
/*本示例将活动窗口水平滚动的百分比设置为50%。*/
function test() {
    ActiveDocument.ActiveWindow.HorizontalPercentScrolled = 50
}
```
