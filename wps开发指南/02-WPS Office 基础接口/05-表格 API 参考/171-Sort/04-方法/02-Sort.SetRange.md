# Sort.SetRange

设置 **Sort** 对象的起始字符和结束字符的位置。



## 语法

express.**SetRange(Rng)**

express   一个代表 **Sort** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Rng | 必选 | Range | 指定 Sort 集合的区域。 |

## 返回值

void

## 说明


仅当对工作表区域应用排序时才能使用 **SetRange** ，当区域在表内时不能使用它。



## 示例


```JavaScript
/*本示例设置活动工作表排序区域为C1:C5。*/
function test() {
    Application.ActiveSheet.Sort.SetRange(Range("C1:C5"))
}
```


```JavaScript
/*本示例新建一张工作表，并为新工作表设置排序区域为A1:A11。*/
function test() {
    let sheet = Application.Sheets.Add()
    sheet.Sort.SetRange(Range("A1:A11"))
}
```
