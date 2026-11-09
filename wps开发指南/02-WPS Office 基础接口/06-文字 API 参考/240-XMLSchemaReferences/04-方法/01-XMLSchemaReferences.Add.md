# XMLSchemaReferences.Add

返回一个 **XMLSchemaReference** 对象，该对象代表应用于文档的架构。



## 语法

express.**Add(NamespaceURI, Alias, FileName, InstallForAllUsers)**

express   一个代表 **XMLSchemaReferences** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NamespaceURI | 可选 | any | 架构中定义的架构名称。_Namespace_ 参数区分大小写，因此必须严格按照它在架构中所显示的那样进行拼写。如果在附加到文档的任何架构中都找不到指定的命名空间，则显示错误。 |
| Alias | 可选 | any | 在 **“模板和加载项”** 对话框中的 **“架构”** 选项卡上显示的架构名称。 |
| FileName | 可选 | any | 架构的路径和文件名。可以为本地文件路径、网络路径或 Internet 地址。 |
| InstallForAllUsers | 可选 | boolean | 如果登录到计算机上的所有用户都能访问和使用新架构，则为 **True** 。默认值为 **False** 。 |

## 返回值

XMLSchemaReference

## 示例


```JavaScript
/*本示例将指定的架构附加到活动文档中。本示例假设在 FileName 参数所指定的路径中已有一个 xsd 文件。*/
function test() {
    ActiveDocument.XMLSchemaReferences.Add(null, null, "D:\\示例\\Simplesample\\Simplesample.xsd", true)
}
```


```JavaScript
/*本示例将指定的架构附加到活动文档中，并显示该架构的URI。*/
function test() {
    let reference = ActiveDocument.XMLSchemaReferences.Add("SimpleSample", "example", "D:\\示例\\Simplesample\\Simplesample.xsd", false)
    alert(reference.NamespaceURI)
}
```
