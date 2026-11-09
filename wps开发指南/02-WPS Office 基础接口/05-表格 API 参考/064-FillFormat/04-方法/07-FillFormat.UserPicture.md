# FillFormat.UserPicture

用图像填充指定的形状。



## 语法

express.**UserPicture(PictureFile)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PictureFile | 必选 | string | 图片文件名。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动工作表中第二个形状的填充设置为用户自定义的图片。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    fillFormat.UserPicture("D:\\Pictures\\p1.png")
}
```


```JavaScript
/*此示例将第一张工作表中所有形状的填充设置为用户自定义的图片。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let fillFormat = shapes.Item(i).Fill
        fillFormat.UserPicture("D:/Pictures/p2.png")
    }
}
```
