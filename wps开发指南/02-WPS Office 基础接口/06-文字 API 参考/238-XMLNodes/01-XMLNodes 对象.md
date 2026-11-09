# XMLNodes 对象

 **[XMLNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/obj)** 对象的集合，该集合代表 **“XML 结构”** 任务窗格的树视图中的所有节点，这些节点表示用户已应用于文档的元素。树视图中的每个节点都是 **[XMLNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/obj)** 对象的一个实例。树视图的层次结构表明节点是否包含子节点。

## 说明


可以返回所选内容、范围或整篇文档 **XMLNodes** 集合。 **XMLNode** 对象显示在 **XMLNodes** 集合顺序是开始或结束标记中指定的选定内容、范围或文档中的显示的顺序相同。

 **XMLNodes** 集合的 **Item** 方法用于返回单个 **XMLNode** 对象。 使用 **Validate** 方法验证 XML 元素有效根据所应用的架构和必需的子元素存在，以及按要求的顺序。 一旦运行的 **Validate** 方法，请使用 **ValidationStatus** 属性来验证是否某个元素是否有效，要给用户需要解决以使文档中的 XML 的用户显示一条消息的 **ValidationErrorText** 属性符合 XML 架构规则。

使用 **Add** 方法添加到所选内容、 范围或文档的 XML 元素。

由于 XML 区分大小写，因此 ，在 **Add** 方法的 Name 参数中键入的 XML 元素的类型必须与在 Namespace 参数中引用的架构中显示的内容完全相同。


## 示例


```JavaScript
/*本示例将新增文档上新增段落中文档部分的文本设置为第一个文档上所有XML元素中的文本。*/
function test() {
    let document = Application.Documents.Add()
    let xmlNodes = Application.Documents.Item(1).XMLNodes
    for (let i = 1; i <= xmlNodes.Count; i++) {
        document.Paragraphs.Add().Range.Text = xmlNodes.Item(i).Text
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第五个XML元素的名称为“Data”，则通知用户是否删除该XML元素。*/
function test() {
    let xmlNode = Application.Documents.Item(1).XMLNodes.Item(5)
    if (xmlNode.BaseName == "Data") {
        let result = MsgBox("是否删除名为“Data”的XML元素吗？", jsOKCancel)
        if (result == jsResultOK) {
            xmlNode.Delete()
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/member/Add) | 返回一个 **XMLNode** 对象，该对象代表新添加的元素。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/member/Item) | 返回集合中的单个 **[XMLNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中 XML 元素的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/member/Parent) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |