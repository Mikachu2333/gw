# AllowEditRange.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **AllowEditRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表上第一个 AllowEditRange 对象删除。*/
function test() {
    Worksheets.Item(1).Protection.AllowEditRanges.Item(1).Delete()
}
```


```JavaScript
/*本示例将活动工作表上第二个 AllowEditRange 对象删除。*/
function test() {
    ActiveSheet.Protection.AllowEditRanges.Item(2).Delete()
}
```
