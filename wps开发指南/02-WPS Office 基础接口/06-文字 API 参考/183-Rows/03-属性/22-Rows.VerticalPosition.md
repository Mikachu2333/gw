# Rows.VerticalPosition

返回或设置由 **RelativeVerticalPosition** 属性指定的项目与行边缘之间的垂直距离。可读写 **Single** 类型。



## 语法

express.**VerticalPosition**

express   一个代表 **Rows** 对象的变量。

## 类型

number（float 精度）

## 说明


该属性可以是一个以磅为单位表示度量的数字，也可以是任何有效的 **[WdFramePosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFramePosition)** 常量。



## 示例


```JavaScript
/*本示例将活动文档中的第一个表格与页面顶端垂直对齐。*/
function test() {
    let rows = ActiveDocument.Tables.Item(1).Rows
    rows.RelativeVerticalPosition = wdRelativeVerticalPositionPage
    rows.VerticalPosition = wdTableTop
}
```


```JavaScript
/*本示例显示所选表格行是否与底边距垂直对齐。*/
function test() {
    let rows = Selection.Rows
    rows.RelativeVerticalPosition = wdRelativeVerticalPositionMargin
    alert(rows.VerticalPosition == wdTableBottom)
}
```
