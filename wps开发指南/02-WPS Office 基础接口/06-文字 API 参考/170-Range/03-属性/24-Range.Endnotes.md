# Range.Endnotes

返回一个 **[Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/obj)** 集合，该集合代表区域中的所有尾注。只读。



## 语法

express.**Endnotes**

express   一个代表 **Range** 对象的变量。

## 类型

Endnotes

## 示例


```JavaScript
/*本示例将活动文档的主文章文档的尾注转换为脚注。*/
function test() {
    ActiveDocument.Content.Endnotes.Convert()
}
```


```JavaScript
/*本示例判断所选内容中的尾注的位置，并通知用户。*/
function test() {
    let endnotes = Selection.Range.Endnotes
    if (endnotes.Location === wdEndOfSection) {
        alert("尾注在当前节的末尾")
    } else {
        alert("尾注在活动文档的末尾")
    }
}
```
