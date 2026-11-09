# Options.UpdateStyleListBehavior

返回或设置 **[WdUpdateStyleListBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUpdateStyleListBehavior)** 常量，该常量指定在更新某种样式以与包含编号或项目符号的所选内容相匹配时，WPS 应采取的行为。可读/写。



## 语法

express.**UpdateStyleListBehavior**

express   一个代表 **Options** 对象的变量。

## 类型

WdUpdateStyleListBehavior

## 示例


```JavaScript
/*本示例显示 WPS 在更新样式时是否保持使用相同样式的所有其他段落的现有编号或项目符号模式，不应用所选内容的编号或项目符号模式。*/
function test() {
    alert(Options.UpdateStyleListBehavior == wdListBehaviorKeepPreviousPattern)
}
```


```JavaScript
/*本示例设置 WPS 在更新样式时将所选内容的编号或项目符号模式添加到文档中使用相同样式的所有段落。*/
function test() {
    Options.UpdateStyleListBehavior = wdListBehaviorAddBulletsNumbering
}
```
