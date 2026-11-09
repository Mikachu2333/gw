# Options.DisplayPasteOptions

如果为 **True** ，则 WPS 直接在新粘贴的文本下显示 **“粘贴选项”** 按钮。 **Boolean** 类型，可读写。



## 语法

express.**DisplayPasteOptions**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*如果“粘贴选项”按钮无效，则本示例将启用该选项。*/
function test() {
    if (!Options.DisplayPasteOptions) {
        Options.DisplayPasteOptions = true
    }
}
```


```JavaScript
/*本示例判断如果 WPS 直接在新粘贴的文本下显示“粘贴选项”按钮，则通知用户。*/
function test() {
    if (Options.DisplayPasteOptions) {
        alert("WPS 直接在新粘贴的文本下显示“粘贴选项”按钮。")
    }
}
```
