# AddIns.Item

从指定的 **AddIns** 集合中返回单个 **AddIn** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回的单个 **AddIn** 对象的名称或索引号。 |

## 返回值

AddIn

## 示例


```JavaScript
/*本示例将标题为“addin”的加载项注册到 Windows 注册表中。*/
function test() {
    Application.AddIns.Item("addin").Registered = msoTrue
}
```


```JavaScript
/*本示例显示应用程序第一个加载项的名称。*/
function test() {
    alert(Application.AddIns.Item(1).Name)
}
```
