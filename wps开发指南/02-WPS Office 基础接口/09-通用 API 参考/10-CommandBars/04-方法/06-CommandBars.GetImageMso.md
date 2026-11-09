# CommandBars.GetImageMso

返回由 *idMso* 参数标识的控件图像（缩放到指定的宽度和高度尺寸）的 **IPictureDisp** 对象。



## 语法

express.**GetImageMso(idMso, Width, Height)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| idMso | 必选 | string | 控件的标识符。 |
| Width | 必选 | number（int 精度） | 图像的宽度 |
| Height | 必选 | number（int 精度） | 图像的高度。 |

## 返回值

IPictureDisp

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

 **Width** 和 **Height** 参数的值必须介于 16 和 128 之间。

如果 **GetImageMso** 未按预期显示，则可能是由于最近的图标重新设计。



## 示例


```JavaScript
/*本示例运行于各组件，将 32x32 尺寸版本的“Paste”图标作为 IPictureDisp 对象存储在变量 iPictureDisp 中。*/
function test() {
    let iPictureDisp = Application.CommandBars.GetImageMso("Paste", 32, 32)
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿的名称为“example.xlsx”，则将 64x64 尺寸版本的“Copy”图标作为 IPictureDisp 对象存储在变量 iPictureDisp 中。*/
function test() {
    if (ActiveWorkbook.Name == "example.xlsx") {
        let iPictureDisp = ActiveWorkbook.CommandBars.GetImageMso("Copy", 64, 64)
    }
}
```
