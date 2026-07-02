#!/usr/bin/env python3
"""
解析《远方与火炬》Markdown文件，拆分成章节，并翻译为多语言
"""

import os
import re
import shutil
from pathlib import Path

# 配置
WORKSPACE = Path("C:/Users/doras/.qclaw/workspace-agent-9c941465")
TEMP_BOOK_DIR = WORKSPACE / "temp_book"
WEBSITE_DIR = WORKSPACE / "website"
BOOK_DIR = WEBSITE_DIR / "books" / "torch-and-horizon"

# 语言配置
LANGUAGES = {
    "zh": "中文",
    "en": "English", 
    "es": "Español",
    "fr": "Français",
    "de": "Deutsch",
    "ar": "العربية"
}

def find_markdown_file(temp_dir):
    """查找解压目录中的Markdown文件"""
    for file in temp_dir.iterdir():
        if file.suffix.lower() == ".md":
            return file
    return None

def parse_chapters(md_file):
    """解析Markdown文件，提取章节结构"""
    with open(md_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 按章节分割
    # 章节格式：## 第一章 标题 或 ## Chapter 1 Title
    chapters = []
    
    # 使用正则表达式查找章节标题
    # 匹配 ## 开头，后跟中文或英文章节标题
    pattern = r'^##\s+(.+)$'
    
    lines = content.split('\n')
    current_chapter = None
    current_content = []
    
    for i, line in enumerate(lines):
        match = re.match(pattern, line)
        if match:
            # 保存上一章
            if current_chapter:
                chapters.append({
                    "title": current_chapter,
                    "content": '\n'.join(current_content)
                })
            
            # 开始新章
            current_chapter = match.group(1)
            current_content = [line]
        else:
            if current_chapter:
                current_content.append(line)
    
    # 保存最后一章
    if current_chapter:
        chapters.append({
            "title": current_chapter,
            "content": '\n'.join(current_content)
        })
    
    return chapters

def create_chapter_files(chapters):
    """创建章节文件"""
    # 确保目录存在
    for lang in LANGUAGES.keys():
        lang_dir = BOOK_DIR / lang
        lang_dir.mkdir(parents=True, exist_ok=True)
    
    # 创建章节文件
    for i, chapter in enumerate(chapters):
        # 生成文件名：01-标题.md
        # 简化标题，移除特殊字符
        title_en = re.sub(r'[^\w\s-]', '', chapter["title"].lower())
        title_en = re.sub(r'[\s]+', '-', title_en)
        filename = f"{i+1:02d}-{title_en}.md"
        
        # 中文版本（原始）
        zh_file = BOOK_DIR / "zh" / filename
        with open(zh_file, "w", encoding="utf-8") as f:
            f.write(chapter["content"])
        
        print(f"Created: {zh_file}")
    
    return len(chapters)

def copy_assets():
    """复制图片资源到网站目录"""
    src_assets = TEMP_BOOK_DIR / "assets"
    dst_assets = WEBSITE_DIR / "public" / "books" / "torch-and-horizon" / "assets"
    
    if src_assets.exists():
        dst_assets.mkdir(parents=True, exist_ok=True)
        shutil.copytree(src_assets, dst_assets, dirs_exist_ok=True)
        print(f"Copied assets to {dst_assets}")

def main():
    """主函数"""
    print("Parsing book...")
    
    # 1. 查找Markdown文件
    md_file = find_markdown_file(TEMP_BOOK_DIR)
    if not md_file:
        print("Error: No Markdown file found")
        return
    
    print(f"Found book file: {md_file}")
    
    # 2. 解析章节
    chapters = parse_chapters(md_file)
    print(f"Found {len(chapters)} chapters")
    
    # 3. 创建章节文件（中文）
    count = create_chapter_files(chapters)
    print(f"Created {count} chapter files")
    
    # 4. 复制图片资源
    copy_assets()
    
    print("Done! Next step: translate to other languages")

if __name__ == "__main__":
    main()
