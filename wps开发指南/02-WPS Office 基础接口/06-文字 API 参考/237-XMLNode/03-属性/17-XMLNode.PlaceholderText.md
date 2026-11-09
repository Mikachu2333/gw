# XMLNode.PlaceholderText

设置或返回一个 **String** 类型的值，该值代表为不包含文本的元素显示的文本。



## 语法

express.**PlaceholderText**

express   一个代表 **XMLNode** 对象的变量。

## 类型

string

## 说明


仅当清除了 **“XML 结构”** 任务窗格中的 **“在文档中显示 XML 标记”** 复选框时，才在 WPS 中显示占位符文本。 **“在文档中显示 XML 标记”** 复选框对应于 **ShowXMLMarkup** 属性。



## 示例


```JavaScript
/*本示例设置当文档中不显示XML标记时，所选内容中第二个XML元素所要展示的文本*/
function test() {
    Selection.XMLNodes.Item(2).PlaceholderText = "Enter Book Information Here"
}
```


```JavaScript
/*本示例显示当活动文档不显示XML标记时，该文档中第三个XML元素的所要展示的文本。*/
function test() {
    let xmlNode = ActiveDocument.XMLNodes.Item(3)
    alert(xmlNode.PlaceholderText)
}
```
