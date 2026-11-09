# Selection.TypeBackspace

删除折叠的选定内容（即一个插入点）前面的字符



## 语法

express.**TypeBackspace()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


本方法与 Backspace 的功能相同。如果选定内容没有折叠为一个插入点，则删除选定内容。



## 示例


```JavaScript
/*本示例删除插入点（折叠的选定内容）前面的字符。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    Selection.TypeBackspace()
}
```


```JavaScript
/*本示例将选定内容扩展到当前段落的末尾（包括段落标记），然后删除选定内容。*/
function test() {
    Selection.EndOf(wdParagraph, wdExtend)
    Selection.TypeBackspace()
}
```
