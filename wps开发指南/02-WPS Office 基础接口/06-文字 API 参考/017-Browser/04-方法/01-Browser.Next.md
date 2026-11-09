# Browser.Next

将选定内容移到浏览器目标所指的下一项。使用 **Target** 属性可以更改浏览器目标。



## 语法

express.**Next()**

express   一个代表 **Browser** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将插入点移至活动文档的下一个批注之前。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseComment
    browser.Next()
}
```


```JavaScript
/*本示例将插入点移至活动文档的下一个脚注之前。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseFootnote
    browser.Next()
}
```
