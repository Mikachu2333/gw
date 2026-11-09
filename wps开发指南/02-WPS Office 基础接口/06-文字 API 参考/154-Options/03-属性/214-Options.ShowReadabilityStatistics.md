# Options.ShowReadabilityStatistics

如果 WPS 在结束语法检查时，显示统计信息的摘要列表（包括可读性程度），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowReadabilityStatistics**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在结束语法检查时，显示统计信息的摘要列表（包括可读性程度）。*/
function test() {
    Options.ShowReadabilityStatistics = true
    ActiveDocument.CheckGrammar()
}
```


```JavaScript
/*本示例显示 WPS 在结束语法检查时，是否展示统计信息的摘要列表（包括可读性程度）。*/
function test() {
    alert(Options.ShowReadabilityStatistics)
}
```
