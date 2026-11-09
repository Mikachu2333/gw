# Range.Comment

返回一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象，它代表与区域左上角单元格相关联的批注。



## 语法

express.**Comment**

express   一个代表 **Range** 对象的变量。

## 类型

Comment

## 示例


```JavaScript
/*本示例给 A1 单元格添加批注 a1，显示批注的文本*/
function test() {
    Range("A1").AddComment("a1")
    alert(Range("A1").Comment.Text())
}
```


```JavaScript
/*本示例给 A1 单元格添加批注 comment1，A2 单元格添加批注 comment2，显示 A1 单元格批注的下一条批注*/
function test() {
    Range("A1").AddComment("comment1")
    Range("A2").AddComment("comment2")
    alert(Range("A1").Comment.Next().Text())
}
```
