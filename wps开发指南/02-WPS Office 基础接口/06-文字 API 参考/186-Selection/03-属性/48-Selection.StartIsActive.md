# Selection.StartIsActive

如果选定内容的开始部分处于活动状态，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**StartIsActive**

express   一个代表 **Selection** 对象的变量。

## 类型

boolean

## 说明


如果选定内容没有折叠为插入点，则其开始部分和结束部分都处于活动状态。如果调用下列方法，选定内容的活动结尾将会移动： **[EndKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/EndKey)** 、 **[Extend](#TODO)** （带 *Characters* 参数）、 **[HomeKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/HomeKey)** 、 **[MoveDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveDown)** 、 **[MoveLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveLeft)** 、 **[MoveRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveRight)** 和 **[MoveUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveUp)** 。  

此属性等效于将 **[Flags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Flags)** 属性与 **wdSelStartActive** 常量配合使用。但是，使用 **Flags** 属性需要二元运算，这比使用 **StartIsActive** 属性更复杂。

为了确保在扩展期间任何当前选定的文本保持选中状态，首先使所选内容的末尾处于活动状态。例如，如果选择了一个段落的前三个单词，但所选内容的开头处于活动状态，则 **MoveRight** 方法调用将取消对前两个单词的选择。



## 示例


```JavaScript
/*本示例将当前选定内容扩展到接下来的两个单词。*/
function test() {
    Selection.StartIsActive = false
    Selection.MoveRight(wdWord, 2, wdExtend)
}
```


```JavaScript
/*本示例将活动文档第二个段落选中，并显示所选内容的开始部分是否处于活动。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    alert(Selection.StartIsActive)
}
```
