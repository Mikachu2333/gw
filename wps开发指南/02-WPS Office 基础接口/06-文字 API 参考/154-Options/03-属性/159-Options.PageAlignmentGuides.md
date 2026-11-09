# Options.PageAlignmentGuides

返回或设置一个 **Boolean** 值，该值指定是否在用户界面中显示页面对齐参考线。可读/写。



## 语法

express.**PageAlignmentGuides**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果 **PageAlignmentGuides** 设置为 **True** ，页面对齐参考线将显示在页面边缘。要使 **PageAlignmentGuides** 设置具有任何效果， **[DisplayAlignmentGuides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisplayAlignmentGuides)** 必须设置为 **True** 。



## 示例


```JavaScript
/*本示例设置 WPS 在用户界面中显示页面对齐参考线。*/
function test() {
    Options.DisplayAlignmentGuides = true
    Options.PageAlignmentGuides = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户界面中显示页面对齐参考线，则通知用户。*/
function test() {
    if (Options.PageAlignmentGuides) {
        alert("WPS 在用户界面中显示页面对齐参考线")
    }
}
```
