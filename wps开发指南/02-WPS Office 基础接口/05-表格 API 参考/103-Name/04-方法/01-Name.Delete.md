# Name.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Name** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例从活动工作簿中删除名称“test”。*/
function test() {
    ActiveWorkbook.Names.Item("test").Delete()
}
```


```JavaScript
/*本示例从 Sheet1 中删除名称“test1”。*/
function test() {
    Application.Worksheets.Item("Sheet1").Names.Item("test1").Delete()
}
```
