# DocumentFields.Count

返回一个 **Long** 类型的值，代表该对象中 **DocumentField** 对象的数量，只读。



## 语法

express.**Count**

express   一个代表 **DocumentFields** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上公文域的数量。*/
function test() {
    alert(ActiveDocument.DocumentFields.Count)
}
```
