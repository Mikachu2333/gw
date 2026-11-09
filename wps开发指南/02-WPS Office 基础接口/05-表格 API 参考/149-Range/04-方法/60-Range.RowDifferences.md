# Range.RowDifferences

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示每行中与比较单元格内容不同的所有单元格。



## 语法

express.**RowDifferences(Comparison)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Comparison | 必选 | any | 用于与指定区域进行比较的单个单元格。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例选定工作表 Sheet1 上第一行中与单元格 D1 内容不同的单元格。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    let c1 = ActiveSheet.Rows.Item(1).RowDifferences(ActiveSheet.Range("D1"))
    c1.Select()
}
```


```JavaScript
/*本示例将 A2:E2 单元格区域的值设置为 2，G2 单元格的值设置为 5，显示 G2 单元格所在行与其值不相等的单元格地址*/
function test() {
    Range("A2:E2").Value2 = 2
    Range("G2").Value2 = 5
    alert(Rows.Item(Range("G2").Row).RowDifferences(Range("G2")).Address())
}
```
