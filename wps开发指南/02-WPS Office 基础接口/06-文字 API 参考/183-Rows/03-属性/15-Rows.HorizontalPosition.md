# Rows.HorizontalPosition

返回或设置由 **RelativeHorizontalPosition** 属性指定的项目与行边缘之间的水平距离。可读写 **Single** 类型。



## 语法

express.**HorizontalPosition**

express   一个代表 **Rows** 对象的变量。

## 类型

number（float 精度）

## 说明


该属性可以是一个以磅为单位表示度量的数字，也可以是 **WdTablePosition** 常量之一。如果 **[WrapAroundText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/WrapAroundText)** 属性为 **msoFalse** ，则该属性无效。



## 示例


```JavaScript
/*本示例将活动文档中第一个表格与右边距水平对齐。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let Rows = ActiveDocument.Tables.Item(1).Rows
        Rows.RelativeHorizontalPosition = wdRelativeHorizontalPositionMargin
        Rows.HorizontalPosition = wdTableRight
    }
}
```


```JavaScript
/*本示例显示所选表格行是否与页面的左侧水平对齐。*/
function test() {
    let selection = Selection.Rows
    selection.RelativeHorizontalPosition = wdRelativeHorizontalPositionPage
    alert(selection.HorizontalPosition == wdTableLeft)
}
```
