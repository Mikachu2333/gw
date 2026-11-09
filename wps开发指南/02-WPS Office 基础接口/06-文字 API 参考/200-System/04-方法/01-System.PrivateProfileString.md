# System.PrivateProfileString

返回或设置 Windows 注册表或设置文件中的一个字符串。 **String** 类型，可读写。



## 语法

**注意：**为 **PrivateProfileString** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
PrivateProfileString(FileName: string, Section: string, Key: string, prop: string): void;
PrivateProfileString(FileName: string, Section: string, Key: string): string;
```

express.**PrivateProfileString(FileName, Section, Key)**

express   一个代表 **System** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 设置文件的文件名。如果未指定路径，则假设为 Windows 文件夹。 |
| Section | 必选 | string | 设置文件中包含 _Key_ 的节的名称。在 Windows 设置文件中，节名显示在相关项之前的方括号中（_Section_ 中无方括号）。如果从 Windows 注册表返回项的值，则 _Section_ 应当是指向子项的完整路径，包括子树（例如，“HKEY\_CURRENT\_USER\\SOFTWARE\\kingsoft\\Office”）。 |
| Key | 必选 | string | 要检索的项设置或注册表项的值。在 Windows 设置文件中，项名称后跟等号 (=) 和设置。如果从 Windows 注册表返回项的值，则 _Key_ 应当是 _Section_ 所指定的子项中项的名称（例如，“STARTUP-PATH”）。 |

## 返回值

string

## 说明


可以编写宏，使用设置文件来存储和检索设置。例如，可以在退出 WPS 时存储活动文档的名称，以便下次启动 WPS 时自动重新打开该文档。设置文件是一个文本文件，其信息安排类似 Windows 3.x 版的 WIN.INI 文件中的信息。



## 示例


```JavaScript
/*此示例将活动文档名称设置为 Settings.txt 中 MacroSettings 标题下的 LastFile 设置。*/
function test() {
    Application.System.PrivateProfileString("D:\\示例\\Settings.txt", "MacroSettings", "LastFile", ActiveDocument.FullName)
}
```


```JavaScript
/*本示例打开存储在 Settings.txt 中 LastFile 下的文档。*/
function test() {
    let lastFile = Application.System.PrivateProfileString("D:\\示例\\Settings.txt", "MacroSettings", "LastFile")
    if (lastFile !== "") {
        Documents.Open(lastFile)
    }
}
```


```JavaScript
/*本示例显示 Windows 注册表中 languages 项的值。*/
function test() {
    alert(System.PrivateProfileString("", "HKEY_CURRENT_USER\\Software\\kingsoft\\Office", "languages"))
}
```
