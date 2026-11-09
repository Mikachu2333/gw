# PageSetup.GutterStyle

返回或设置 WPS 将装订线应用于当前文档时，基于从右向左的语言还是从左向右的语言。 **WdGutterStyleOld** 类型，可读写。



## 语法

express.**GutterStyle**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdGutterStyleOld

## 示例


```JavaScript
/*本示例设置当前文档使用从右向左语言文档的装订线样式。*/
function test() {
    ActiveDocument.PageSetup.GutterStyle = wdGutterStyleBidi
}
```


```JavaScript
/*本示例显示第一个文档装订线的样式。*/
function test() {
    switch (Documents.Item(1).PageSetup.GutterStyle){
        case wdGutterStyleBidi:
            alert("装订线样式符合从右向左文字排列规则。")
            break
        case wdGutterStyleLatin:
            alert("装订线样式符合从左向右文字排列规则。")
            break
    }
}
```
