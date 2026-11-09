# AllowEditRange.Title

返回或设置受保护的工作表上可编辑的单元格区域的标题。 **String** 型，可读写。



## 语法

express.**Title**

express   一个代表 **AllowEditRange** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将受保护的活动工作表上第二个可编辑的单元格区域的标题设置为“AllowEditRange2”。*/
function test() {
    ActiveSheet.Protection.AllowEditRanges.Item(2).Title = "AllowEditRange2"
}
```


```JavaScript
/*本示例显示受保护的第一张工作表上第一个可编辑的单元格区域的标题。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowEditRanges.Item(1).Title)
}
```
