# Worksheet.Tab

返回一个工作表的 **[Tab](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/obj)** 对象。



## 语法

express.**Tab**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Tab

## 示例


```JavaScript
/*此示例确定第一张工作表选项卡的颜色索引是否设置为无，并通知用户。*/
function test() {
    // Determine if color index of 1st tab is set to none.
    if (Worksheets.Item(1).Tab.ColorIndex == xlColorIndexNone) {
        alert("The color index is set to none for the 1st worksheet tab.")
    } else {
        alert("The color index for the tab of the 1st worksheet is not set none.")
    }
}
```


```JavaScript
/*此示例显示活动工作表选项卡的颜色。*/
function test() {
    alert(Application.ActiveSheet.Tab.Color)
}
```
