# Application.RegisteredFunctions

返回在动态链接库或代码资源中的用 REGISTER 或 REGISTER.ID 宏函数登记的函数信息。 **Variant** 类型，只读。



## 语法

express.**RegisteredFunctions(Index1, Index2)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index1 | 可选 | any | 动态链接库或代码资源的名称。 |
| Index2 | 可选 | any | 函数的名称。 |

## 返回值

any

## 说明


如果未指定索引参数，则本属性返回包含所有已登记函数列表的数组。数组中的每一行包含一个函数的信息，如下表所示。

| 列 | 内容                        |
| - | ------------------------- |
| 1 | 动态链接库或代码资源的名称             |
| 2 | 动态链接库或代码资源中过程的名称          |
| 3 | 指明返回值的数据类型和参数数目及数据类型的字符串。 |

没有注册的函数时，该属性返回 **null** 。



## 示例


```JavaScript
/*本示例创建已登记的函数的列表，并在 Sheet1 中每一行放置一个已登记函数。A 列包含动态链接库或代码资源的完整路径和名称，B 列包含函数名称，C 列包含参数数据类型代码。*/
function test() {
    let arr = Application.RegisteredFunctions()
    if (arr == null) {
        alert("No registered functions")
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < 3; j++) {
                Worksheets.Item("Sheet1").Cells(i + 1, j + 1).Formula = arr[i][j]
            }
        }
    }
}
```


```JavaScript
/*本示例将已登记的函数信息赋值到F1单元格。*/
function test() {
    Range("F1").Value2 = Application.RegisteredFunctions().toString()
}
```
