# Workbook.UnprotectSharing

关闭共享保护功能并保存工作簿。



## 语法

express.**UnprotectSharing(SharingPassword)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SharingPassword | 可选 | any | 工作簿密码。 |

## 返回值

void

## 示例


```JavaScript
/*本示例关闭共享保护，并保存活动工作簿。*/
function test() {
    ActiveWorkbook.UnprotectSharing()
}
```


```JavaScript
/*此示例演示保存第一张工作簿并设置共享保护，再用密码取消对第一张工作簿的共享保护，过程中会提示保存工作簿。*/
function test() {
    Workbooks.Item(1).ProtectSharing(undefined, undefined, undefined, undefined, undefined, "Y6dh!et5")
    Workbooks.Item(1).UnprotectSharing("Y6dh!et5")
}
```
