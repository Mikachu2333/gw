# Fields.Update

更新域对象的结果。



## 语法

express.**Update()**

express   一个代表 **Fields** 对象的变量。

## 返回值

Long

## 说明


如果更新域时没有出错，则返回 0（零）；或者返回一个 **Long** 类型的值，该值代表第一个出错域的索引。



## 示例


```JavaScript
/*本示例更新活动文档所有域，并且通知用户。*/
function test() {
    if (Application.ActiveDocument.Fields.Update() == 0) {
        alert("Update Successful")
    } else {
        alert("Field " + Application.ActiveDocument.Fields.Update() + " has an error")
    }
}
```


```JavaScript
/*本示例更新并断开活动文档第一节中的所有域的链接。*/
function test() {
    ActiveDocument.Sections.Item(1).Range.Fields.Update()
    ActiveDocument.Sections.Item(1).Range.Fields.Unlink()
}
```
