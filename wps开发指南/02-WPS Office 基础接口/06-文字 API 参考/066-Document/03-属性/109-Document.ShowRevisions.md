# Document.ShowRevisions

如果在屏幕上显示对指定文档的修订，则该属性值为 **True** 。 **Boolean** 类型，可读写。




## 语法

express.**ShowRevisions**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对活动文档进行设置，以便能标记对该文档的修改，并在屏幕上显示修订标记。*/
function test()
{
ActiveDocument.TrackRevisions = true
ActiveDocument.ShowRevisions = true

}
```
