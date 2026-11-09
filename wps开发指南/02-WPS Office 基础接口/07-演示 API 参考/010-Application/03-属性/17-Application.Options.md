# Application.Options

返回一个 **Options** 对象，该对象代表 WPP 中的应用程序选项。



## 语法

express.**Options**

express   一个代表 **Application** 对象的变量。

## 类型

Options

## 说明


 **Options** 属性用于返回 **Options** 的对象。



## 示例


```JavaScript
/*本示例将启用应用程序的“粘贴选项”。*/
function test() {
    let options = Application.Options
    if (options.DisplayPasteOptions == msoFalse) {
        options.DisplayPasteOptions = msoTrue
    }
}
```


```JavaScript
/*本示例设置应用程序的显示更改模式。*/
function test() {
    Application.Options.ShowCoauthoringMergeChanges = msoTrue
}
```
