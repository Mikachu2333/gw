# PageSetup.AlignMarginsHeaderFooter

如果 ET 以页面设置选项中设置的边距对齐页眉和页脚，则返回 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AlignMarginsHeaderFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例判断活动工作表的页面设置选项中的边距是否对齐页眉和页脚，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.AlignMarginsHeaderFooter) {
        alert("已设置边距对齐页眉和页脚")
    } else {
        alert("未设置边距对齐页眉和页脚")
    }
}
```


```JavaScript
/*此示例将第三个工作表的页面边距设置为不对齐页眉和页脚。*/
function test() {
    Application.Worksheets.Item(3).PageSetup.AlignMarginsHeaderFooter = false
}
```
