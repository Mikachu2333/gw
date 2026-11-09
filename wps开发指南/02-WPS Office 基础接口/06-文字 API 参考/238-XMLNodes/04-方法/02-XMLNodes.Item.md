# XMLNodes.Item

返回集合中的单个 **[XMLNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **XMLNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

XMLNode

## 示例


```JavaScript
/*本示例将活动文档中第三个XML元素的文本设置为“test”。*/
function test() {
    ActiveDocument.XMLNodes.Item(3).Text = "test"
}
```


```JavaScript
/*本示例显示选中内容中第二个XML元素的类型是否为wdXMLNodeElement。*/
function test() {
    alert(Selection.XMLNodes.Item(2).NodeType == wdXMLNodeElement)
}
```
