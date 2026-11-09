# Workbook.UpdateFromFile

如果磁盘上的工作簿版本比内存中的当前工作簿副本新，则用磁盘上保存的工作簿文件更新只读工作簿。如果载入工作簿之后，磁盘上的副本无改变，则不必重新载入内存中的副本。



## 语法

express.**UpdateFromFile()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

void

## 说明


本方法适用于用户 A 以只读方式打开工作簿，同时用户 B 以可读写方式打开该工作簿。如果用户 B 将工作簿新版存盘而用户 A 仍在使用原工作簿，那么用户 A 必须先关闭该工作簿再打开才能获得更新版本的工作簿， **UpdateFromFile** 方法使用磁盘文件更新内存中的工作簿副本。



## 示例


```JavaScript
/*本示例使用磁盘上的文件更新活动工作簿。*/
function test() {
    ActiveWorkbook.UpdateFromFile()
}
```


```JavaScript
/*本示例判断如果第一张工作簿的名称为 example.xlsx，则使用磁盘上的文件更新该工作簿。*/
function test() {
    if (Workbooks.Item(1).Name == "example.xlsx") {
        Workbooks.Item(1).UpdateFromFile()
    }
}
```
