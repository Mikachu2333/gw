# Worksheet.SetBackgroundPicture

为工作表设置背景图形。



## 语法

express.**SetBackgroundPicture(Filename)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 图形文件名。 |

## 返回值

void

## 示例


```JavaScript
/*此示例为第一张工作表设置背景图形。*/
function test() {
    Worksheets.Item(1).SetBackgroundPicture("c:\\graphics\\watermark.gif")
}
```


```JavaScript
/*此示例新建一张工作表，并为新工作表设置背景图形。*/
function test() {
    Application.Sheets.Add().SetBackgroundPicture("D:/background.png")
}
```
