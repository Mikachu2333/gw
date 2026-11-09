# Options.PasteSmartStyleBehavior

从其他文档粘贴选定文本时，如果 WPS 智能合并样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PasteSmartStyleBehavior**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 从其他文档的选定文本中智能粘贴样式（如果已禁用该选项）。*/
function test() {
    if (!Options.PasteSmartStyleBehavior) {
        Options.PasteSmartStyleBehavior = true
    }
}
```


```JavaScript
/*本示例显示 WPS 在粘贴其他文档的选定文本时是否智能合并样式。*/
function test() {
    alert(Options.PasteSmartStyleBehavior)
}
```
