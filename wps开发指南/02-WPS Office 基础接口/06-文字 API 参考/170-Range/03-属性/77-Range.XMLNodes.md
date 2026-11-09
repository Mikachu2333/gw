# Range.XMLNodes

返回一个 **XMLNodes** 集合，该集合代表指定区域中的 XML 元素（包括任何只是部分属于该区域的元素）。只读。




## 语法

express.**XMLNodes**

express   一个代表 **Range** 对象的变量。

## 类型

XMLNodes

## 示例


```JavaScript
/*以下示例访问活动文档的开头 200 个字符中包含的 XML 元素。*/
function test()
{
let objRange = ActiveDocument.Range(1, 200)

let objNode = objRange.XMLNodes.Item(1)
}
```
