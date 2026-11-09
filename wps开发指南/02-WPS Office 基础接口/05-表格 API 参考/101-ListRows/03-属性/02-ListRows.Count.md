# ListRows.Count

返回一个 **Integer** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **ListRows** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上包含 C2 单元格的列表中行的数量。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C2").ListObject
    alert(listObj.ListRows.Count)
}
```
