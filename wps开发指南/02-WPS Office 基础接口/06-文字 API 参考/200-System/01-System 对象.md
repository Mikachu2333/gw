# System 对象

包含有关计算机系统的信息。

## 说明


使用 **System** 属性可返回 **System** 对象。


## 示例


```JavaScript
/*本示例判断如果用户的操作系统为Windows系统，则通知用户。*/
function test() {
    if (System.OperatingSystem.includes("Windows")) {
        alert("你的操作系统为Windows。")
    }
}
```


```JavaScript
/*本示例显示当前的屏幕分辨率（例如，“1024 x 768”）。*/
function test() {
    let horizontal = Application.System.HorizontalResolution
    let vertical = Application.System.VerticalResolution
    alert(`Resolution = ${horizontal} x ${vertical}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [PrivateProfileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/PrivateProfileString) | 返回或设置 Windows 注册表或设置文件中的一个字符串。 **String** 类型，可读写。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [CountryRegion](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/CountryRegion) | 返回系统的国家/地区设定。 **WdCountry** 类型，只读。 |
| [Cursor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/Cursor) | 返回或设置指针的状态（形状）。可以是下列 **WdCursorType** 常量之一： **wdCursorIBeam** 、 **wdCursorNormal** 、 **wdCursorNorthwestArrow** 或 **wdCursorWait** 。 **Long** 类型，可读写。 |
| [FreeDiskSpace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/FreeDiskSpace) | 以字节为单位返回当前驱动器的可用磁盘空间。使用 ChDrive 语句可更改当前驱动器。 **Long** 类型，只读。 |
| [HorizontalResolution](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/HorizontalResolution) | 以像素为单位返回显示器的水平分辨率。 **Long** 类型，只读。 |
| [MathCoprocessorInstalled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/MathCoprocessorInstalled) | 如果系统安装了数学协处理器，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [OperatingSystem](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/OperatingSystem) | 返回当前操作系统的名称，如“Windows”或“Windows NT”。 **String** 类型，只读。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/Version) | 返回操作系统的版本号。只读 **String** 类型。 |
| [VerticalResolution](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/System/member/VerticalResolution) | 以像素为单位返回屏幕垂直分辨率。 **Long** 类型，只读。 |