# Options.MarginAlignmentGuides

返回或设置一个 **Boolean** 值，该值指定是否在用户界面中显示边距对齐参考线。可读/写。



## 语法

express.**MarginAlignmentGuides**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果 **MarginAlignmentGuides** 设置为 **True** ，将显示边距对齐参考线。要使 **MarginAlignmentGuides** 设置生效， **[DisplayAlignmentGuides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisplayAlignmentGuides)** 必须设置为 **True** 。



## 示例


```JavaScript
/*本示例设置 WPS 在用户界面中显示边距对齐参考线。*/
function test() {
    Options.DisplayAlignmentGuides = true
    Options.MarginAlignmentGuides = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户界面中显示边距对齐参考线，则通知用户。*/
function test() {
    Options.DisplayAlignmentGuides = true
    if (Options.MarginAlignmentGuides) {
        alert("WPS 在用户界面中显示边距对齐参考线。")
    }
}
```
