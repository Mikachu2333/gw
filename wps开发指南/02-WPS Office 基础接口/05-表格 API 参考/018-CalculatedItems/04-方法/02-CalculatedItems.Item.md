# CalculatedItems.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **CalculatedItems** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 **PivotItem** 对象。

## 说明


对象的文本名称就是 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Name)** 和 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Value)** 属性的值。



## 示例


```JavaScript
/*此示例隐藏第一张工作表上第一张数据透视表中字段“name”的第一个计算项。*/
function test() {
    let pvtItem = Application.Worksheets.Item(1).PivotTables(1).PivotFields("name").CalculatedItems().Item(1)
    pvtItem.Visible = false
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表的字段“name”中名为“公式2”的计算项的公式。*/
function test() {
    let pvtItem = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("name").CalculatedItems().Item("公式2")
    alert(pvtItem.Formula)
}
```
