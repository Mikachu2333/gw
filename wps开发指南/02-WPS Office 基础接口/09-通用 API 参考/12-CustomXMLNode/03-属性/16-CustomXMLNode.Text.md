# CustomXMLNode.Text

获取或设置当前节点的文本。可读/写。



## 语法

express.**Text**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点的文本。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    alert(customXMLNode.Text)
}
```


```JavaScript
/*本示例运行于文字组件，设置活动文档的第一个内容控件映射到的自定义 XML 部件包含的指定 XML 节点的文本。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]/ns0:subject[1]")
    customXMLNode.Text = "example"
}
```
