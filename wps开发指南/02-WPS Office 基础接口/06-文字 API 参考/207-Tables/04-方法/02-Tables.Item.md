# Tables.Item

返回集合中的单个 **Table** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Tables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Table

## 示例


```JavaScript
/*本示例显示活动文档中第一个表格的列数。*/
function test() {
    alert(Application.ActiveDocument.Tables.Item(1).Columns.Count)
}
```


```JavaScript
/*本示例删除第一个文档中的第二个表格。*/
function test() {
    Application.Documents.Item(1).Tables.Item(2).Delete()
}
```
