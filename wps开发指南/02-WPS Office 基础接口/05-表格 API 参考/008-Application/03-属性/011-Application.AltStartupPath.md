# Application.AltStartupPath

返回或设置替换启动文件夹的名称。 **String** 类型，可读写。



## 语法

express.**AltStartupPath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置替换启动文件夹。*/
function test() {
    Application.AltStartupPath = "C:\\EXCEL\\MACROS"
}
```


```JavaScript
/*本示例演示判断是否存在替换启动文件夹，并通知用户。*/
function test() {
    if (Application.AltStartupPath.length > 0) {
        alert("替换启动文件夹的名称为：" + Application.AltStartupPath)
    } else {
        alert("未设置替换启动文件夹！")
    }
}
```
