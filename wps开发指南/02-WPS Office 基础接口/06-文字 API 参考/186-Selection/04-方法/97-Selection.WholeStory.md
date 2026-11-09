# Selection.WholeStory

扩展某一所选内容，使其包括整个文章。



## 语法

express.**WholeStory()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*下列指令在功能上是等效的，都是扩展所选内容，使其包括整个文章。*/
function test() {
    Selection.WholeStory()
    Selection.Expand(wdStory)
}
```


```JavaScript
/*本示例扩展第一个窗口的所选内容，并替换为指定文本。*/
function test() {
    Windows.Item(1).Selection.WholeStory()
    Windows.Item(1).Selection.Text = "文章被替换"
}
```
