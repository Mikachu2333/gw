# Find.ClearHitHighlight

取消突出显示查找操作中所有文本的突出显示，并且返回一个代表该操作是否成功的 **Boolean** 类型的值。



## 语法

express.**ClearHitHighlight()**

express   一个代表 **Find** 对象的变量。

## 返回值

Boolean

## 说明


 **[HitHighlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/HitHighlight)** 方法用于突出显示找到的文本。



## 示例


```JavaScript
/*此示例判断如果在活动文档的主文档文章中查找到指定文本并成功添加突出显示格式，则通知用户，然后清除突出显示查找操作中所有文本的突出显示。*/
function test() {
    let find = ActiveDocument.Content.Find
    if (find.HitHighlight("example", wdColorRed)) {
        alert("查找到指定文本并成功添加突出显示格式")
    }
    find.ClearHitHighlight()
}
```


```JavaScript
/*本示例显示是否清除所选内容中突出显示查找操作中所有文本的突出显示。*/
function test() {
    alert(Selection.Find.ClearHitHighlight())
}
```
