# Options.AllowReadingMode

如果为 **True** ，则表明 WPS 将文档在“阅读版式”视图中打开。 **Boolean** 类型，可读写。



## 语法

express.**AllowReadingMode**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


对应于 **“选项”** 对话框中 **“常规”** 选项卡上的 **“允许从‘阅读版式’启动”** 复选框。



## 示例


```JavaScript
/*本示例切换“允许从‘阅读版式’启动”复选框。*/
function test() {
    if (Options.AllowReadingMode) {
        Options.AllowReadingMode = false
    } else {
        Options.AllowReadingMode = true
    }
}
```


```JavaScript
/*本示例显示是否允许文档在“阅读版式”视图中打开。*/
function test() {
    alert(Options.AllowReadingMode)
}
```
