# Range.XMLParentNode

返回一个 **XMLNode** 对象，该对象代表区域的父级 XML 节点。只读。




## 语法

express.**XMLParentNode**

express   一个代表 **Range** 对象的变量。

## 类型

XMLNode

## 示例


```JavaScript
/*以下示例返回指定区域的父节点。*/
function test()
{
let objRange = ActiveDocument.Range(1, 200)
let objNode = objRange.XMLParentNode
}
```
