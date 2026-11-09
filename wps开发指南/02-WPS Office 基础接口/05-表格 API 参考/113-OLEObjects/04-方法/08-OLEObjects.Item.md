# OLEObjects.Item

从集合中返回一个对象，它代表集合包含的某个对象。



## 语法

express.**Item(Index)**

express   一个代表 **OLEObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Object

## 说明


对象的文本名称就是 **Name** 和 **Value** 属性的值。



## 示例


```JavaScript
/*此示例将工作表 Sheet1 中的第一个 OLE 对象删除。*/
function test() {
    Application.Worksheets.Item("Sheet1").OLEObjects().Item(1).Delete()
}
```


```JavaScript
/*此示例显示第一张工作表中的第二个 OLE 对象的高度。*/
function test() {
    alert(Worksheets.Item(1).OLEObjects().Item(2).Height)
}
```
