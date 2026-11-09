# Range.NavigateArrow

定位追踪箭头，此箭头指定引用单元格、从属单元格或错误源单元格。选定引用单元格、从属单元格或错误源单元格并返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表新选定区域。本方法应用于没有可见追踪箭头的单元格时将出错。



## 语法

express.**NavigateArrow(TowardPrecedent, ArrowNumber, LinkNumber)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TowardPrecedent | 可选 | any | 指定定位的方向：如果该值为 **True** ，则定位到引用单元格；如果该值为 **False** ，则定位到从属单元格。 |
| ArrowNumber | 可选 | any | 指定要定位的箭头编号；对应于单元格公式中编号的引用。 |
| LinkNumber | 可选 | any | 如果箭头是外部引用箭头，则该参数表示要跟踪的外部引用。如果省略该参数，则跟踪第一个外部引用。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例将第一个追踪箭头从工作表 Sheet1 上的单元格 A1 定位到该单元格的引用单元格。本示例应在单元格 A1 包含公式的工作表中运行，该单元格包含对单元格 D1、D2 和 D3 的引用（例如，公式“=D1\*D2\*D3”）。运行本示例之前，先显示“公式”工具栏，选中单元格 A1，并单击“追踪引用单元格”按钮。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Range("A1").Select()
    ActiveCell.NavigateArrow(true, 1, 1)
}
```


```JavaScript
/*本示例将第一个追踪箭头从活动工作表上的单元格 A2 定位到该单元格的引用单元格。*/
function test() {
    let range = Application.ActiveSheet.Range("A2")
    alert(range.NavigateArrow(false, 2, 2))
}
```
