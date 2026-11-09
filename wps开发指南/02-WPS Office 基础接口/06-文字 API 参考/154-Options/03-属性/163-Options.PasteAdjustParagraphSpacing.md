# Options.PasteAdjustParagraphSpacing

如果在剪切和粘贴选定内容时，WPS 自动调整段落间距，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PasteAdjustParagraphSpacing**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在剪切和粘贴所选内容时自动调整段落间距（如果已禁用该选项）。*/
function test() {
    if (!Options.PasteAdjustParagraphSpacing) {
        Options.PasteAdjustParagraphSpacing = true
    }
}
```


```JavaScript
/*本示例显示 WPS 是否在剪切和粘贴选定内容时自动调整段落间距。*/
function test() {
    alert(Options.PasteAdjustParagraphSpacing)
}
```
