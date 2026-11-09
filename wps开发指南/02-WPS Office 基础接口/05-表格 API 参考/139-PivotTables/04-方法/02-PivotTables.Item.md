# PivotTables.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **PivotTables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。

## 说明


对象的文本名称就是 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Name)** 和 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Value)** 属性的值。



## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一个数据透视表上的 age 字段设置为行字段。*/
function test() {
    Worksheets.Item("sheet1").PivotTables().Item(1).PivotFields("age").Orientation = xlRowField
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表值字段的数量。*/
function test() {
    alert(ActiveSheet.PivotTables().Item(1).DataFields().Count)
}
```
