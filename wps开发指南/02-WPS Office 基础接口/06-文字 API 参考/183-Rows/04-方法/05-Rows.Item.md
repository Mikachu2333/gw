# Rows.Item

返回集合中的单个 **Row** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Rows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Row

## 示例


```JavaScript
/*本示例删除活动文档中第一个表格中的第一行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(1).Delete()
}
```


```JavaScript
/*本示例显示所选表格行的第二行的行高。*/
function test() {
    alert(`${Selection.Rows.Item(2).Height} 磅`)
}
```
