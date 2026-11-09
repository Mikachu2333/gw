# Application.Quit

退出 WPP。该方法相当于单击“文件”菜单上的“退出”。



## 语法

express.**Quit()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 说明


若要避免提示保存更改，可在调用 **Quit** 方法之前使用 **Save** 或 **SaveAs** 方法保存所有打开的演示文稿。



## 示例


```JavaScript
/*本示例保存所有打开的演示文稿，然后退出WPP。*/
function test() {
    for (let i = 1; i <= Application.Presentations.Count; i++) {
        Application.Presentations.Item(i).Save()
    }
    Application.Quit()
}
```


```JavaScript
/*本示例退出WPP。*/
function test() {
    Application.Quit()
}
```
