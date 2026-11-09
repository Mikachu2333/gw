# Tab.ColorIndex

返回或设置一个 **Variant** 值，它代表指定的工作表或图表选项卡的颜色。



## 语法

express.**ColorIndex**

express   一个代表 **Tab** 对象的变量。

## 类型

XlColorIndex

## 说明


返回 **Tab** 对象后，可以使用 **ColorIndex** 属性来确定图表或工作表的选项卡设置。

颜色可指定为当前调色板中颜色的索引值 1 到 56，也可指定为下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量之一：

* **xlColorIndexNone** 
* **xlColorIndexAutomatic** 



## 示例


```JavaScript
/*本示例为ET判断第一个工作表的标签的颜色索引是否设置为无，并通知用户。*/
function test() {
    // Determine if color index of 1st tab is set to none.
    if (Worksheets.Item(1).Tab.ColorIndex == xlColorIndexNone) {
        alert("The color index is set to none for the first worksheet tab.")
    } else {
        alert("The color index for the tab of the first worksheet is not set none.")
    }
}
```


```JavaScript
/*本示例将工作表 Sheet1 选项卡的颜色设置为黄色。*/
function test() {
    Worksheets.Item("Sheet1").Tab.ColorIndex = 6
}
```
