# Windows.Item

返回集合中的单个 **Window** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Windows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Window

## 示例


```JavaScript
/*本示例显示第一个窗口的宽度。*/
function test() {
    alert("第一个窗口的宽度：" + Application.Windows.Item(1).Width)
}
```


```JavaScript
/*本示例关闭第一个窗口。*/
function test() {
    Application.Windows.Item(1).Close()
}
```
