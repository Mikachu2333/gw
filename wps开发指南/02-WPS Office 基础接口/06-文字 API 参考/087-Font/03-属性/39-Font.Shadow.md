# Font.Shadow

如果将指定字体设置为阴影格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**Shadow**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例对所选内容应用阴影和加粗格式。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.Shadow = msoTrue
        Selection.Font.Bold = msoTrue
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的字体是否应用阴影格式。*/
function test() {
    alert(ActiveDocument.Content.Font.Shadow === msoTrue)
}
```
