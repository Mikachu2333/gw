# CustomXMLParts.Count

获取一个 **Long** 类型的值，指示 **CustomXMLParts** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **CustomXMLParts** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上 CustomXMLPart 对象的数量。*/
function test() {
    alert(ActiveDocument.CustomXMLParts.Count)
}
```
