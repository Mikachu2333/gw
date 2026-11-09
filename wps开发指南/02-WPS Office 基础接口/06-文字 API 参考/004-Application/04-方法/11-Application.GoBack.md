# Application.GoBack

将插入点在活动文档中最近进行过编辑操作的三个位置间移动，其作用等同于按 Shift+F5。



## 语法

express.**GoBack()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例打开最近使用过的文件，并将插入点移至该文档中最后进行编辑操作的位置。*/
function test() {
    Application.RecentFiles.Item(1).Open()
    Application.GoBack()
}
```


```JavaScript
/*本示例打开名为“example1.docx”的文档，并将插入点移至该文档中最后进行编辑操作的位置*/
function test() {
    Documents.Open("D:\\示例\\example1.docx")
    Application.GoBack()
}
```
