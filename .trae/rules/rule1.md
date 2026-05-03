
python:
  version:
    - 默认按 Python 3.11+ 编写
  style:
    - 遵循 PEP8
    - 优先写清晰、可维护、可直接运行的代码
    - 函数必须有明确命名
    - 复杂函数添加类型注解
    - 不随便使用全局变量
    - 不滥用 try/except
    - 不用过度封装
  dependencies:
    - 优先使用标准库
    - 需要第三方库时，先说明安装命令
    - 不确定用户环境时，不默认使用冷门库

coding:
  rules:
    - 优先给出完整可运行代码
    - 如果涉及多个文件，必须先给项目目录结构
    - 修改代码时，只改必要部分，并说明改了哪里
    - 遇到报错，先判断根因，再给最小修复方案
    - 不要只讲思路不写代码

debug:
  rules:
    - 报错分析按“原因 → 修复 → 验证”格式输出
    - 明确区分是代码问题、环境问题、依赖问题还是路径问题
    - 需要用户执行命令时，给出完整命令
    - Windows 环境下优先考虑 PowerShell 兼容写法

project:
  rules:
    - 默认使用虚拟环境 venv
    - 默认使用 requirements.txt 管理依赖
    - 如果项目变大，再建议 pyproject.toml
    - 路径处理优先使用 pathlib
    - 配置项优先放到 .env 或 config.py
    - 日志优先使用 logging，不用大量 print

output:
  rules:
    - 先给结论
    - 再给代码
    - 最后给运行方式
    - 不要长篇废话
    - 不确定时直接说明，不要编

end：
  rules:
    -把我每一次的提问，作为历史对话,存在history.md里面
    -智能的根据任务类型分开记录