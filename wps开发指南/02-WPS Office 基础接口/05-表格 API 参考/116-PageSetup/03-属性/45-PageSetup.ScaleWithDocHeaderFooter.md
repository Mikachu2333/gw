# PageSetup.ScaleWithDocHeaderFooter

返回或设置页眉和页脚是否在文档大小更改时随文档缩放。可读/写 **Boolean** 类型。



## 语法

express.**ScaleWithDocHeaderFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将第三张工作表的页眉页脚设置为不随文档大小更改而缩放。*/
function test() {
    Application.Worksheets.Item(3).PageSetup.ScaleWithDocHeaderFooter = false
}
```


```JavaScript
/*此示例判断活动工作表的页眉和页脚是否在文档大小更改时随文档缩放，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.ScaleWithDocHeaderFooter) {
        alert("文档大小更改时随文档缩放")
    } else {
        alert("文档大小更改时不随文档缩放")
    }
}
```
