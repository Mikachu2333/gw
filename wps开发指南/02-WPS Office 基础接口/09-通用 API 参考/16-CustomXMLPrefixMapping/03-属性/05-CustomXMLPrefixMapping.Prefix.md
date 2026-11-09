# CustomXMLPrefixMapping.Prefix

获取 **CustomXMLPrefixMapping** 对象的前缀。只读。



## 语法

express.**Prefix**

express   一个代表 **CustomXMLPrefixMapping** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示第一个文档上第三个 CustomXMLPart 对象中第一个 CustomXMLPrefixMapping 对象的前缀。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(3)
    alert(customXMLPart.NamespaceManager.Item(1).Prefix)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上所有 CustomXMLPart 对象中所有 CustomXMLPrefixMapping 对象的前缀。*/
function test() {
    let customXMLParts = ActiveDocument.CustomXMLParts
    for (let i = 1; i <= customXMLParts.Count; i++) {
        let mappings = customXMLParts.Item(i).NamespaceManager
        for (let j = 1; j <= mappings.Count; j++) {
            Selection.TypeText(mappings.Item(j).Prefix + "\n")
        }
    }
}
```
