# ListRows.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ListRows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

ListRow

## 示例


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第一行的索引。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListRows.Item(1).Index)
}
```


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第三行删除。*/
function test() {
    let listObj = Application.ActiveSheet.ListObjects.Item(1)
    listObj.ListRows.Item(3).Delete()
}
```
