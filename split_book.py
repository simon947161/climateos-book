#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
直接解析《远方与火炬》MD文件，拆分成章节，不打印中文到控制台
"""

import os
import re
import shutil
from pathlib import Path

# 配置路径
WORKSPACE = Path("C:/Users/doras/.qclaw/workspace-agent-9c941465")
MD_FILE = Path("D:/copy/远方与火炬.md")  # 直接读取用户上传的文件
BOOK_DIR = WORKSPACE / "website" / "books" / "torch-and-horizon"

# 语言配置
LANGUAGES = ["zh", "en", "es", "fr", "de", "ar"]

def read_full_markdown():
    """读取完整Markdown文件"""
    print("Reading markdown file...")
    with open(MD_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    print(f"File size: {len(content)} characters")
    return content

def parse_chapters(content):
    """解析章节 - 基于 ## 标题"""
    print("Parsing chapters...")
    
    # 章节标记：## 第一章 或 ## 摘要 或 ## 为什么我要写这本书
    # 使用更精确的正则表达式
    chapters = []
    
    # 按行分割
    lines = content.split('\n')
    
    current_chapter = None
    current_lines = []
    
    for line in lines:
        # 检测章节标题（## 开头，后面跟章节名）
        if line.startswith('## ') and not line.startswith('### '):
            # 保存上一章
            if current_chapter is not None:
                chapter_content = '\n'.join(current_lines)
                chapters.append({
                    'title': current_chapter,
                    'content': chapter_content
                })
            
            # 开始新章
            current_chapter = line[3:].strip()  # 移除 '## '
            current_lines = [line]  # 包含标题行
        else:
            if current_chapter is not None:
                current_lines.append(line)
    
    # 保存最后一章
    if current_chapter is not None:
        chapter_content = '\n'.join(current_lines)
        chapters.append({
            'title': current_chapter,
            'content': chapter_content
        })
    
    print(f"Found {len(chapters)} chapters")
    return chapters

def save_chapters(chapters):
    """保存章节文件（中文）"""
    print("Saving Chinese chapters...", flush=True)
    
    # 创建目录
    zh_dir = BOOK_DIR / "zh"
    zh_dir.mkdir(parents=True, exist_ok=True)
    
    # 清理旧文件
    for old_file in zh_dir.glob("*.md"):
        old_file.unlink()
    
    # 保存章节
    for i, chapter in enumerate(chapters):
        # 生成文件名 - 使用英文标题或拼音
        # 尝试提取英文标题（如果有）
        title = chapter['title']
        
        # 简单方案：使用章节编号作为文件名
        filename = f"{i+1:02d}-chapter.md"
        
        # 保存文件
        file_path = zh_dir / filename
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(chapter['content'])
        
        # 不打印文件名，避免编码问题
        print(f"  Saved chapter {i+1}", flush=True)
    
    print(f"Total: {len(chapters)} chapters saved", flush=True)

def copy_assets():
    """复制图片资源"""
    print("Copying assets...")
    
    src_assets = WORKSPACE / "temp_book" / "assets"
    dst_assets = WORKSPACE / "website" / "public" / "books" / "torch-and-horizon" / "assets"
    
    if src_assets.exists():
        # 创建目标目录
        dst_assets.mkdir(parents=True, exist_ok=True)
        
        # 复制文件
        for item in src_assets.iterdir():
            if item.is_file():
                shutil.copy2(item, dst_assets / item.name)
        
        print(f"Copied {len(list(src_assets.iterdir()))} asset files")
    else:
        print("No assets directory found")

def main():
    """主函数"""
    # 1. 读取文件
    content = read_full_markdown()
    
    # 2. 解析章节
    chapters = parse_chapters(content)
    
    # 3. 保存中文章节
    save_chapters(chapters)
    
    # 4. 复制图片
    copy_assets()
    
    print("\n=== Done ===")
    print("Chinese chapters created. Next: translate to other languages.")

if __name__ == "__main__":
    main()
