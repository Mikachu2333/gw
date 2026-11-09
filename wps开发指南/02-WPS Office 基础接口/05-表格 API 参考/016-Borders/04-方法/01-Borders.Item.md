# Borders.Item

返回一个 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/obj)** 对象，它代表单元格区域或样式的边框之一。



## 语法

express.**Item(Index)**

express   一个代表 **Borders** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | XlBordersIndex | XlBordersIndex 的常量之一。 |

## 返回值

Border

## 说明


| **XlBordersIndex** 可为下列 **XlBordersIndex** 常量之一。 |
| ------------------------------------------------ |
| **xlDiagonalDown**                               |
| **xlDiagonalUp**                                 |
| **xlEdgeBottom**                                 |
| **xlEdgeLeft**                                   |
| **xlEdgeRight**                                  |
| **xlEdgeTop**                                    |
| **xlInsideHorizontal**                           |
| **xlInsideVertical**                             |



## 示例


```JavaScript
/*本示例设置 Sheet1 工作表中单元格区域 A1:G1 的底部边界的颜色。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:G1").Borders.Item(xlEdgeBottom).Color = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例将活动工作簿的第一个样式对象顶部边界设置为绿色。*/
function test() {
    ActiveWorkbook.Styles.Item(1).Borders.Item(xlEdgeTop).Color = RGB(0, 255, 0)
}
```
