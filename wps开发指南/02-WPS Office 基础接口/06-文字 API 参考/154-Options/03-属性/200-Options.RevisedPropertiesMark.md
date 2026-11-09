# Options.RevisedPropertiesMark

在启用修订功能时，返回或设置用于显示格式修改情况的标记。 **WdRevisedPropertiesMark** 类型，可读/写。



## 语法

express.**RevisedPropertiesMark**

express   一个代表 **Options** 对象的变量。

## 类型

WdRevisedPropertiesMark

## 示例


```JavaScript
/*本示例设置 WPS 在启用修订功能后，用双下划线标记修改过格式的文本。*/
function test() {
    Options.RevisedPropertiesMark = wdRevisedPropertiesMarkDoubleUnderline
}
```


```JavaScript
/*本示例显示 WPS 启用修订功能后，是否用特殊符号标记修改过格式的文本。*/
function test() {
    alert(Options.RevisedPropertiesMark == wdRevisedPropertiesMarkNone)
}
```
