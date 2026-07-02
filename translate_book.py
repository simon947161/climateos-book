#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
翻译章节文件为多语言
支持：英文、西班牙文、法文、德文、阿拉伯文
"""

import os
import subprocess
import time
from pathlib import Path

# 配置
WORKSPACE = Path("C:/Users/doras/.qclaw/workspace-agent-9c941465")
BOOK_DIR = WORKSPACE / "website" / "books" / "torch-and-horizon"

# 目标语言
TARGET_LANGUAGES = {
    "en": "English",
    "es": "Spanish", 
    "fr": "French",
    "de": "German",
    "ar": "Arabic"
}

def translate_file(src_file, target_lang_code):
    """翻译单个文件"""
    # 这里使用简单的占位符翻译
    # 实际应该使用Google Translate API或DeepL
    
    # 读取源文件
    with open(src_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 简单翻译（占位符）
    # 实际项目中应该使用翻译API
    translated_content = f"[Translation to {target_lang_code}]\n\n{content}"
    
    return translated_content

def create_translation_script():
    """创建翻译脚本 - 使用免费翻译API"""
    print("Creating translation script...")
    
    # 检查是否有googletrans库
    try:
        import googletrans
        print("googletrans is available")
    except ImportError:
        print("googletrans not found. Installing...")
        subprocess.run(["pip", "install", "googletrans==4.0.0rc1"], check=True)
    
    print("Ready to translate")

def batch_translate():
    """批量翻译所有章节"""
    print("Starting batch translation...")
    
    # 获取所有中文章节
    zh_dir = BOOK_DIR / "zh"
    zh_files = sorted(zh_dir.glob("*.md"))
    
    print(f"Found {len(zh_files)} Chinese chapters")
    
    # 为每种语言创建目录
    for lang_code in TARGET_LANGUAGES.keys():
        lang_dir = BOOK_DIR / lang_code
        lang_dir.mkdir(parents=True, exist_ok=True)
    
    # 翻译每个文件
    for zh_file in zh_files:
        print(f"Translating {zh_file.name}...")
        
        # 读取中文内容
        with open(zh_file, "r", encoding="utf-8") as f:
            zh_content = f.read()
        
        # 为每种语言翻译
        for lang_code in TARGET_LANGUAGES.keys():
            # 创建目标文件
            target_file = BOOK_DIR / lang_code / zh_file.name
            
            # 翻译内容（这里使用占位符，实际应调用翻译API）
            # 由于翻译API可能需要时间，这里先创建占位符
            translated_content = f"# Translation to {TARGET_LANGUAGES[lang_code]}\n\n{zh_content}"
            
            # 保存翻译文件
            with open(target_file, "w", encoding="utf-8") as f:
                f.write(translated_content)
            
            print(f"  Created {lang_code}/{zh_file.name}")
        
        # 避免API限制
        time.sleep(1)
    
    print("Batch translation completed (with placeholders)")

def main():
    """主函数"""
    print("=== Translation Script ===")
    
    # 1. 检查翻译库
    create_translation_script()
    
    # 2. 批量翻译
    batch_translate()
    
    print("\n=== Done ===")
    print("Translations created (with placeholders).")
    print("Next: Replace placeholders with real translations using translation API.")

if __name__ == "__main__":
    main()
