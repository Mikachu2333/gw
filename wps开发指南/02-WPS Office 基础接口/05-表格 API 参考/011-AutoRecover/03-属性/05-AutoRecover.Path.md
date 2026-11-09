# AutoRecover.Path

返回或设置一个 **String** 值，它代表 ET 将要存储“自动恢复”临时文件的位置的完整路径。



## 语法

express.**Path**

express   一个代表 **AutoRecover** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例将“自动恢复”文件的路径设置为驱动器 D。*/
function test() {
    Application.AutoRecover.Path = "D:\\"
}
```


```JavaScript
/*本示例显示“自动恢复”文件的完整路径。*/
function test() {
    alert(Application.AutoRecover.Path)
}
```
