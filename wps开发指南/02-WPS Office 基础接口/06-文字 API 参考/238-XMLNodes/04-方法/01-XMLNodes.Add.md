# XMLNodes.Add

返回一个 **XMLNode** 对象，该对象代表新添加的元素。




## 语法

express.**Add(Name, Namespace, Range)**

express   一个代表 **XMLNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 在 Namespace 参数指定的 XML 架构中的元素的名称。由于 XML 区分大小写，因此，Name 参数所指定的元素的拼写必须和它在架构中所显示的完全一样。如果与 Namespace 参数中指定的架构中的任何元素名称都不匹配，则显示错误。 |
| Namespace | 必选 | string | 架构中定义的架构名称。Namespace 参数区分大小写，因此必须严格按照它在架构中所显示的那样进行拼写。如果在附加到文档的任何架构中都找不到指定的命名空间，则显示错误。 |
| Range | 可选 | any | 要应用元素的区域。默认为将元素标记置于插入点或选定内容的周围（如果已选择文本）。 |

## 返回值

XMLNode

## 示例


```JavaScript
/* 以下示例将选定文本添加到示例元素，该示例元素来自活动文档中所引用的第一个架构*/
function test(){
    Application.ActiveDocument.XMLNodes.Add ("example",ActiveDocument.XMLSchemaReferences.Item(1).NamespaceURI,Selection.Range)
}
```
