# Application.Volatile

用于将用户自定义函数标记为易失性函数，无论何时在工作表的任意单元格中进行计算时，易失性函数都必须重新进行计算。非易失性函数只在输入变量改变时才重新计算，若不用于计算工作表单元格的用户自定义函数中，则此方法无效。



## 语法

express.**Volatile(Volatile)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Volatile | 可选 | any | 如果为 **True** ，则将函数标记为易失性函数。如果为 **False** ，则将函数标记为非易失性函数。默认值为 **True** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将用户自定义函数“test”标记为易失性函数。只要包含此函数的工作表上任何单元格中出现计算过程，此函数都将重新进行计算。*/
function test() {
    Application.Volatile()
    //Remainder of the function
}
```


```JavaScript
/*本示例将用户自定义函数“test”标记为非易失性函数，并通知用户。*/
function test() {
    Application.Volatile(false)
    alert("自定义函数已标记为非易失性函数")
}
```
