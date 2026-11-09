# ThemeEffectScheme.Load

从文件加载 Office 主题的效果方案。



## 语法

express.**Load(FileName)**

express   一个代表 **ThemeEffectScheme** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 效果方案文件的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例运行于表格组件，从文件加载 Office 主题的效果方案到活动工作簿。*/
function test() {
    ActiveWorkbook.Theme.ThemeEffectScheme.Load("D:\\示例\\WPS.eftx")
}
```


```JavaScript
/*本示例运行于表格组件，从文件加载 Office 主题的效果方案到所有已打开的工作簿。*/
function test() {
    for (let i = 1; i <= Workbooks.Count; i++) {
        Workbooks.Item(i).Theme.ThemeEffectScheme.Load("D:\\示例\\WPS.eftx")
    }
}
```
