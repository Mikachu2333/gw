# Browser 对象

代表用于将插入点移至文档中对象的浏览器工具。该工具由垂直滚动条底端的三个按钮组成。

## 说明


使用 **[Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Browser)** 属性返回 **Browser** 对象。


## 示例


```JavaScript
/*本示例将插入点移至活动文档中的下一个域之前。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseField
    browser.Next()
}
```


```JavaScript
/*本示例将插入点移至上一张表格，然后选定该表格。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseTable
    browser.Previous()
    if (Selection.Information(wdWithInTable)) {
        Selection.Tables.Item(1).Select()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Browser/member/Next) | 将选定内容移到浏览器目标所指的下一项。使用 **Target** 属性可以更改浏览器目标。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Browser/member/Previous) | 将选定内容移到浏览器目标所指的前一项。使用 **Target** 属性可以更改浏览器目标。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Target](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Browser/member/Target) | 返回或设置 **Previous** 方法和 **Next** 方法定位的文档项。 **WdBrowseTarget** 类型，可读写。 |