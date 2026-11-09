# COMAddIns.Item

获取指定的 **COMAddIns** 集合的成员。



## 语法

express.**Item(Index)**

express   一个代表 **COMAddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 可以是代表 **COMAddIn** 对象的编程标识符（ProgID）的 **String** 类型值，也可以是代表集合中成员位置的 **Long** 类型值。 |

## 返回值

COMAddIn

## 示例


```JavaScript
/*本示例运行于各组件，显示所有 COM 加载项的说明文本。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.COMAddIns.Count; i++) {
        str += Application.COMAddIns.Item(i).Description + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 COM 加载项的编程标识符（ProgID）。*/
function test() {
    for (let i = 1; i <= Application.COMAddIns.Count; i++) {
        alert(Application.COMAddIns.Item(i).ProgId)
    }
}
```
