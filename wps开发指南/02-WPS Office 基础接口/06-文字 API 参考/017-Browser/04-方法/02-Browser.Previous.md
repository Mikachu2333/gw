# Browser.Previous

将选定内容移到浏览器目标所指的前一项。使用 **Target** 属性可以更改浏览器目标。



## 语法

express.**Previous()**

express   一个代表 **Browser** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将插入点移至前一个表格的第 1 个单元格（左上角的单元格）中。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseTable
    browser.Previous()
}
```


```JavaScript
/*本示例将插入点移至活动文档的上一个批注中，然后插入文本。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseComment
    browser.Previous()
    Selection.Range.Text = "Hello"
}
```
