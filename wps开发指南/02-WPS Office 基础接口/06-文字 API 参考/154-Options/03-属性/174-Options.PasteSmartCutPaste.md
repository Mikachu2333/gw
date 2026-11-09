# Options.PasteSmartCutPaste

如果 WPS 在文档中智能粘贴选定内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PasteSmartCutPaste**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 智能粘贴选定文本（如果已禁用该选项）。*/
function test() {
    if (!Options.PasteSmartCutPaste) {
        Options.PasteSmartCutPaste = true
    }
}
```


```JavaScript
/*本示例显示 WPS 是否智能粘贴选定文本。*/
function test() {
    alert(Options.PasteSmartCutPaste)
}
```
