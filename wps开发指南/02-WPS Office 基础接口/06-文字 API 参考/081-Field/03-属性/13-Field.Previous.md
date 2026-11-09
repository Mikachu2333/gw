# Field.Previous

返回集合中的上一个对象。只读。



## 语法

express.**Previous**

express   一个代表 **Field** 对象的变量。

## 类型

Field

## 示例


```JavaScript
/*本示例显示活动文档中倒数第二个域的域代码。*/
function test() {
    let field = ActiveDocument.Fields.Item(ActiveDocument.Fields.Count).Previous
    alert("Field code = " + field.Code.Text)
}
```


```JavaScript
/*本示例显示活动文档中第一个域的类型是否为wdFieldListNum。*/
function test() {
    let field = ActiveDocument.Fields.Item(2).Previous
    alert(field.Type == wdFieldListNum)
}
```
