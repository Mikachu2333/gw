# Windows.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Windows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Window

## 示例


```JavaScript
/*此示例将第一个窗口最大化。*/
function test() {
    Application.Windows.Item(1).WindowState = xlMaximized
}
```


```JavaScript
/*此示例关闭第二个窗口。*/
function test() {
    Windows.Item(2).Close()
}
```
