# Application.GetCustomListNum

返回字符串数组的自定义序列号。使用本方法既可对内置序列进行匹配，也可对自定义序列进行匹配。



## 语法

express.**GetCustomListNum(ListArray)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListArray | 必选 | any | 字符串数组。 |

## 返回值

Long

## 说明


如果没有对应序列，则使用本方法将出错。



## 示例


```JavaScript
/*本示例删除一个自定义序列。*/
function test() {
    let customLN = Application.GetCustomListNum(["cogs", "sprockets", "widgets", "gizmos"])
    Application.DeleteCustomList(customLN)
}
```


```JavaScript
/*本示例显示自定义序列号。*/
function test() {
    alert(Application.GetCustomListNum(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]))
}
```
