# Application.FindFile

显示 **“打开文件”** 对话框。



## 语法

express.**FindFile()**

express   一个代表 **Application** 对象的变量。

## 返回值

Boolean

## 说明


本方法显示 **“打开文件”** 对话框并让用户打开一个文件。如果成功打开一个新文件，则该方法返回 **True** 。如果用户退出该对话框，则该方法返回 **False** 。



## 示例


```JavaScript
/*本示例显示“打开文件”对话框。*/
function test() {
    Application.FindFile()
}
```


```JavaScript
/*本示例显示“打开文件”对话框，并展示是否成功打开一个新文件。*/
function test() {
    alert(Application.FindFile())
}
```
